const express=require("express");
const path=require("path");
const app=express();
const port=80;


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

//start the server
app.listen(port,()=>{
    console.log(`The application started succcesfully on port ${port} `);
})