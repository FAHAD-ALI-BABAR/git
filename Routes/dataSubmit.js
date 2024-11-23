const path=require("path")
const express=require("express")
const dataSubmit=express.Router();
const rootDirectory=require("../utils/pathutils")
const submit=require("../Controllers/host")
dataSubmit.post("/host/submit-detail",submit.submit)
 exports.dataSubmit=dataSubmit
 exports.registeredHomes=submit.registeredHomes
