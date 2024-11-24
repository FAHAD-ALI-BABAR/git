const path=require("path")
const rootDirectory=require("../utils/pathutils")
const Home=require("../Models/home")


 exports.getHomes=(req,res,next)=>{
    Home.fetchall((registeredHomes)=>{
        res.render("store/home",{
            registeredHomes:registeredHomes
        })
    })
 };


 exports.getindex=(req,res,next)=>{
    Home.fetchall((registeredHomes)=>{
        res.render("store/home-list",{
            registeredHomes:registeredHomes
        })
    })
 };
 exports.getbookings=(req,res,next)=>{
    Home.fetchall((registeredHomes)=>{
        res.render("store/bookings",{
            registeredHomes:registeredHomes
        })
    })
 };
 exports.getfavourites=(req,res,next)=>{
    Home.fetchall((registeredHomes)=>{
        res.render("store/fav-list",{
            registeredHomes:registeredHomes
        })
    })
 };
 exports.getReserves=(req,res,next)=>{
    Home.fetchall((registeredHomes)=>{
        res.render("store/reserve",{
            registeredHomes:registeredHomes
        })
    })
 };

 exports.error404=(req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,"views","404.html"));
    res.status(404).sendFile(path.join(rootDirectory,"views","404.html"));
    
}