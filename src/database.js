import mongoose from 'mongoose'

export async function connect() {   
try {
    await mongoose.connect('mongodb://localhost/mongodbgraphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
console.log('>>>Database is connected');

} 
catch (e){
    console.log('Algo ha ido mal');    
    console.log(e);
}
}