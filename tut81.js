//inserting data in mongo db
use harrykart
db.items.insertOne([{name:"samsung 30s",price:22000,rating:4.5,qty:233,sold:98},{name:"moto 30s",price:29000,rating:3.5,qty:233,sold:98},{name:"relame 80s",price:52000,rating:4.0,qty:33,sold:8}])
db.items.insertmany([{name:"samsung 30s",price:22000,rating:4.5,qty:233,sold:98},{name:"moto 30s",price:29000,rating:3.5,qty:233,sold:98},{name:"relame 80s",price:52000,rating:4.0,qty:33,sold:8}])
db.items.insertMany([{name:"samsung 30s",price:22000,rating:4.5,qty:233,sold:98},{name:"moto 30s",price:29000,rating:3.5,qty:233,sold:98},{name:"relame 80s",price:52000,rating:4.0,qty:33,sold:8}])