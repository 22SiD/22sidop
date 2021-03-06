const mongoose = require("mongoose");
const conn_str = "mongodb+srv://sid:root@cluster0.xrrg4.mongodb.net/ESD-2?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
    .then( () => console.log("Connected successfully...") )
    .catch( (err) => console.log(err) );

const orderSchema = new mongoose.Schema({
  "flatNo": String,
  "firstName": String,
  "lastName": String,
  "phoneNumber": String,
  "emailID": String,
      }
  
);

const orderModel = new mongoose.model("resident", orderSchema);

exports.order = orderModel;
