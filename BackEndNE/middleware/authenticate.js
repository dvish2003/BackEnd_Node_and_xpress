const jwt = require('jsonwebtoken')

//my json secret key
const SECRET ="ExiXGmnNx2pWE7eXj3sBtFabIjTpSZQ3"


function authenticate(req,res,next){
        const authHeader = req.headers.authorization;
        console.log("authHeader :",authHeader)

         if(!authHeader){
             return res.status(401).json({
                 message:'Authorization header missing'
             })
         }

         const token = authHeader.split(" ")[1];
         if(!token){
             return  res.status(401).json({
                 message:"token missing"
             })


             try{
                 const decode = jwt.verify(token,SECRET);
                 req.user = decode;
                 next();

             }catch (err){
                 res.status(401).json({
                     error : "Invalid token"
                 })
             }

         }
}

module.exports = authenticate;