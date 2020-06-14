const {User} = require('../models/user');
const bcrypt = require('bcriyptjs');
const saltRounds = 10;


module.exports = {

async getUsers(req,res){
    User.find((err,docs)=>{
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

