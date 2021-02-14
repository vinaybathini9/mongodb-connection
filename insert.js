var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ north";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
db.collection(" south").insertOne(myobj, function(err, res) {  
if (err) throw err;  
console.log("1 record inserted");  
db.close();  
});  
});  