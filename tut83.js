show dbs 
use harrykart
show collections 
db.items.find({price:22000})
//deleting items from the mongo databases
db.items.deleteOne({price:22000})
//deleteOne will delete the matching document  entry and will delete the first entry in the 
//case of multi document match 

//for deleting multielements 
db.items.deleteMany({price:29000})

