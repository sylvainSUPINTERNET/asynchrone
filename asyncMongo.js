'use strict';


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
 
// Database Name
const dbName = 'asynctest';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  let user = {
      firstname: process.argv[2],
      lastname: process.argv[3],
      age: process.argv[4]
  }

  async function addUser(){
        let insertResponse = await db.collection("users").insertOne(user) // la function passé après le await keyword doit ETRE une promise <pending>
        return insertResponse;
  }

  addUser()
    .then(function(data){
        console.log("user inserted -> ", data)
    })
    .catch(err => console.log(err))


  client.close();
});






