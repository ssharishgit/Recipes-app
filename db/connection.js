const mongoose =  require('mongoose')

// initiating the MongoDB atlas connection using Mongoose
const connection = async()=>{
  let connect = mongoose.connect('mongodb+srv://testdb:testdb@cluster0.0dnvr.mongodb.net/test-mongoose')
  if(connect){
    console.log("Connected to MongoDB")
  }
}

module.exports = connection;
