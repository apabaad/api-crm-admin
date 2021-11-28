import mongoose from 'mongoose';

const mongoClient = async () => {
  try {
    const mongoURL = process.env.MONGO_CLIENT;
    if (!mongoURL) {
      return console.log(
        'Please add mongoDB connection in env variable MONGO_CLIENT'
      );
    }
    const con = await mongoose.connect(mongoURL);

    if (con) {
      console.log('mongodb is connected');
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
