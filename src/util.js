const {User} = require('./models/user');
const {Project} = require('./models/project');
const config = require('./config');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {

async initializeRootUser(){
    if(config.enableRootUser){  

     User.findOne({email:config.rootEmail},(err,docs)=>{
        if(err){
            
        }

        if(docs == null){

            const project = new Project({
                name: config.rootProject,
                room: config.rootRoom,
                created: config.rootCreated,
                });
        
                project.save((err,docs)=>{
                    if(err){
                        console.log(err);
                    }
                     
                    const salt = bcrypt.genSaltSync(saltRounds);
                    const hash = bcrypt.hashSync(config.rootPassword,salt);


                    let user = new User(
                        {name:config.rootName,
                            password:hash,
                            email:config.rootEmail,
                            projectId:docs._id,
                            type: config.rootType
                    });

                    user.save((err,docs)=>{
                        if(err){
                            res.status(400).send(err);
                        }
                    });
                        });  

                }
            });  
    }
    else{

        User.findOne({email:config.rootEmail},(err,docs)=>{
            if(err){}
            
            if(docs != null){
                User.deleteOne({email:config.rootEmail},(err,docs)=>{});
                Project.deleteOne({name:config.rootProject},(err,docs)=>{})
            }});
    }

}
}