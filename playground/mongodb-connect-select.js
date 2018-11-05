//const MongoClient = require('mongodb').MongoClient;

//destructuing mongodb api call
const {MongoClient,ObjectID} = require('mongodb');
// var obj=new ObjectID();
// console.log(obj);


//ES6 destructuring
// var user={name:'Kiran', age:40};
// var {name}=user;
// console.log(name);

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
  // db.collection('TodosApp').find({_id:new ObjectID('5bdff9654a28135364c031dd')}).toArray().then((docs)=>{
  //   console.log('TodosApp');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch TodoApp',err);
  // });

  // db.collection('TodosApp').find().count().then((count)=>{
  //   console.log(`TodosApp Count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch count TodoApp',err);
  // });

  db.collection('users').find({Name:'Kiran'}).toArray().then((docs)=>{
    //console.log('TodosApp');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch TodoApp',err);
  });
  //close the connection to MongoDB server
  //client.close;
});
