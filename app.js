const express=require("express");
const path=require("path");
const app=express(); 
const mongoose=require('mongoose');
const bodyparser=require("body-parser");

mongoose.connect('mongodb://localhost/contactDance',{useNewurlParser:true});
const port=80;
//define mongoose schema 

var ContactSchema= new mongoose.Schema({
    name:String, 
    phone:String,
    email:String,
    address:String,
    desc:String
}); 

var Contact= mongoose.model('Contact',ContactSchema);

//express specific stuff
app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded());

//pug specific stuff
app.set('view engine','pug')//set the template enjine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory

//our  end point
app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
}) 

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
}) 

app.post('/contact',(req,res)=>{
    var mydata= new Contact(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to databases")
    }).catch(()=>{
        res.status(400).send("item was not saved to databases")
    });
})

//start the server
app.listen(port,()=>{
    console.log(`The application started succcesfully on port ${port} `);
})