const User = require('../model/User')
const express = require('express')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')

const SECRET ="ExiXGmnNx2pWE7eXj3sBtFabIjTpSZQ3"


exports.register = async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name
    //check use console log
    console.log("email :",email , "password :",password)


    const existUser = await User.findOne({email});
    if(existUser){
        return res.status(400).json({
            error: "User is already exist"
        })
    }

    const newUser = new User({
        name,
        email,
        password
    })

    await newUser.save();


    res.json({
        message : `hello ,${name},Your account create successfully`
    })
}
exports.update = async (req,res,next) =>{
    const{name,email,password} = req.body;

}
exports.delete = async (req,res) =>{}
exports.login = async (req,res,next) =>{

   try{
       const email = req.body.email;
       const password = req.body.password;
       const name = req.body.password;

       const existUser = await User.findOne({email})
       console.log("User  : ",existUser)

       if(!existUser){
           return res.status(404).json("User not found")
       }

       const token = jwt.sign({email:email},SECRET,{expiresIn:"1h"});
       return res.status(200).json({token})
   }catch (error){
       next(errorHandle);
   }

}

exports.get = async (req,res) =>{
    res.json({message:`Hello${(req.user.email)}`})
}

