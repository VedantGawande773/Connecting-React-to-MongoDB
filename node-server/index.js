 const express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');

 main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected');
}

const userSchema = new mongoose.Schema({
   username: String,
   password: String
 });

 const User = mongoose.model('User', userSchema);

 const server = express();

 server.use(cors());
 server.use(bodyParser.json());

 //CRUD - Create
 server.post('/demo',async (req,res) => {

   let user = new User(); //User is the name of the class what ever changes we have to make we will make with this User class
   user.username = req.body.username; //this data come from frontend and will be stores in user formed by the model
   user.password = req.body.password;
   const doc = await user.save() 

   console.log(doc);  //we are trying to get data from the form here
    res.json(doc); //we are giving back the same response which we get so it is like a complete cycle
 })

 server.get('/demo',async (req,res) => {
   const docs = await User.find({})
   res.json(docs)
 })

 server.listen(8080,() => {
    console.log("server started");
 })