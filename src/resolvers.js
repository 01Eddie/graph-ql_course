import { tasks } from './sample';

import User from './models/User'
import { createSourceEventStream } from 'graphql';

export const resolvers = {
    Query : {
        hello: () => {
            return 'Hello world with GraphQL'
        },
        greet(root, {name}, ctx) {
            //console.log(args.name);
            console.log(ctx)
            return `Hello ${name}! `;
        },
        tasks() {
            return tasks;
        },
        async Users() {   
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            //console.log(input);
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            //console.log(newUser);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    }
};