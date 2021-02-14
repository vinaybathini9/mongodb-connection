var mc=require('mongodb');
var mo=mc.MongoClient;
var url="mongodb://localhost:27017/ monkey";
mo.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db(" monkey");
    var myobj = { "empname":"vinay","empid":123,"empadr":"mancherial"};
    dbo.collection(" tiger").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  