var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/Database";
MongoClient.connect(url,function(res,db){
    if (err) throw err;
    db.createCollection("employees",function(err,res){
        if(err) throw err;
        console.log("collection created ");
        db.close();

    });
     db.close();
});