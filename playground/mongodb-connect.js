//const MongoClient = require('mongodb').MongoClient;

//destructuing mongodb api call
const {MongoClient,ObjectID} = require('mongodb');
// var obj=new ObjectID();
// console.log(obj);


//ES6 destructuring
var user={name:'Kiran', age:40};
var {name}=user;
console.log(name);

// // Connection URL
// const url = 'mongodb://localhost:27017';
// // Database Name
// const dbName = 'myproject';
// // Create a new MongoClient
// const client = new MongoClient(url);
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   client.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB client');
  }
  console.log('Connected to MongoDB client');
  const db=client.db('TodoApp');
  // db.collection('TodosApp').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if (err){
  //     return console.log('Unable to insert TodoApp:',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('TodosApp').insertOne({
  //   text:'Something to do tomorrow',
  //   completed:false
  // },(err,result)=>{
  //   if (err){
  //     return console.log('Unable to insert TodoApp:',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('TodosApp').insertOne({
    text:'Walk the Dog',
    completed:true
  },(err,result)=>{
    if (err){
      return console.log('Unable to insert TodoApp:',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  // db.collection('users').insertOne({
  //   Name:'Kiran',
  //   age:25,
  //   location:'San Ramon'
  // },(err,result)=>{
  //   if (err){
  //     return console.log('Unable to insert user:',err);
  //   }
  //   //console.log(JSON.stringify(result.ops,undefined,2));
  //   console.log(result.ops);
  //   console.log(result.ops[0]);
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  //close the connection to MongoDB server
  client.close;
});
