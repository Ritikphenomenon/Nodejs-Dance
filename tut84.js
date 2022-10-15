show dbs
use harrrykart
show collections 
db.items.find()
//for updating the databases 
db.items.updateOne({name:"moto 30s"},{$set:{price:2}}) 
db.items.find()
db.items.updateMany({name:"moto 30s"},{$set:{price:3,rating:1}})
