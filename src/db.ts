import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb+srv://julio999:juliodb@cluster0.lxh0w4f.mongodb.net/?retryWrites=true&w=majority'

async function connectDatabase(){
    try{
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }catch(error){
        console.log('Error connecting to MongoDB: ', error)
    };
    
}

export default connectDatabase;
