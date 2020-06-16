const {User} = require('../models/user');
const jwt = require('jsonwebtoken'); 
const config = require('../config');
const bcrypt = require('bcryptjs');

module.exports={
    async verifyToken(req,res,next){
        const token = req.headers['x-acess-token'];

        if(token){
            jwt.verify(token,config.jwtSecret,(err,decoded)=>{
                if(err){
                    return res.send({success:false,message:'Invalid Token'});
                }

                req.decoded = decoded;
                next();
            });
        }else{
        return res.status(203).send({success:false,message:'Token not sent in request'});
        }

    },

    async auth(req,res){

        const userEmail = req.body.email;
        const password = req.body.password;
    
        User.findOne({email:userEmail},async (err,docs)=>{
            if(err){
                return res.send(`Error ${JSON.stringify(err,undefined,2)}`);
            }
            
            if(docs == null){
                return res.send(`Invalid E-mail`);
            }
    
            const passwordHash = docs.password;
            const isPasswordMatch = await bcrypt.compare(password, passwordHash);
    
            if(isPasswordMatch){
    
                console.log(docs);
    
                var token = jwt.sign({data:docs}, config.jwtSecret, {
                    expiresIn: 3600 //1 hour duration
                });
    
                res.json({success: true,
                    message: 'Token successfully created',
                    token: token})      
            }
    
            else{
                res.send("senha incorreta");
            }
        });   
    }
}