const path=require("path")
const fs=require("fs")
const express=require("express")
const storeRouter=express.Router();
const rootDirectory=require("../utils/pathutils");
const { registeredHomes,submit } = require("./dataSubmit");
const storeController=require("../Controllers/store")
const getHomes=require("../Controllers/store")
const Home=require("../Models/home")
storeRouter.get("/",storeController.getHomes);
 storeRouter.get("/bookings",storeController.getbookings);
 storeRouter.get("/home-list",storeController.getindex);
 storeRouter.get("/fav-list",storeController.getfavourites);
 

 
    // console.log(registeredHomes);
   
    
   
    
    // res.sendFile(path.join(__dirname,"../","views","home.html"))
    // res.sendFile(path.join(rootDirectory,"views","home.html"))
    


module.exports=storeRouter