const {User} = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken'); 
const config = require('../config');

module.exports = {
    
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
},    

async getUsers(req,res){
    User.find((err,docs)=>{
        if(err){
            return res.send(`Error ${JSON.stringify(err,undefined,2)}`);
        }
        return res.send(docs);
    });
},
async getUserById(req,res){

    const userID = req.params.id;

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No user with given id :${req.params.id}`);

    User.findById(userID,(err,docs)=>{
        if(err){
            return res.send(`Error ${JSON.stringify(err,undefined,2)}`);
        }

        return res.send(docs);
    });   
},

async getUserByEmail(req,res){

    const userEmail = req.params.email;

    User.findOne({email:userEmail},(err,docs)=>{
        if(err){
            return res.send(`Error ${JSON.stringify(err,undefined,2)}`);
        }
        return res.send(docs);
    });   
},

async addUser(req,res){
    
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password,salt);

    let user = new User(
        {name:req.body.name,
            password:hash,
            email:req.body.email,
            projectId:req.body.projectId,
            type:req.body.type
    });

    user.save((err,docs)=>{
        if(err){
            res.send(`Error ${JSON.stringify(err,undefined,2)}`);
        }
        return res.send(docs);
    });
}
}

