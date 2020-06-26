const {User} = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const config = require('../config');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {

async getUserByEmail(req,res){

    const accountType = req.decoded.data.type;
    
    if(accountType != "support"){
        return res.status(401).send({"Error":"Account is not authorized for this action"})
    }

    const userEmail = req.params.email;

    User.findOne({email:userEmail},(err,docs)=>{
        if(err){
            return res.status(500).send(err);
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
            res.status(400).send(err);
        }
        return res.send(docs);
    });
},    
    
async getUsers(req,res){

    const accountType = req.decoded.data.type;
    
    if(accountType != "support"){
        return res.status(401).send({"Error":"Account is not authorized for this action"})
    }

    User.find((err,docs)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.send(docs);
    });
},

async getUserById(req,res){

    const userID = req.params.id;
    const accountType = req.decoded.data.type;
    
    if(accountType != "support"){
        return res.status(401).send({"Error":"Account is not authorized for this action"})
    }

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send({"Error":`No user with given id :${req.params.id}`});

    User.findById(userID,(err,docs)=>{
        if(err){
            return res.status(500).send(err);
        }

        return res.send(docs);
    });   
}
}

