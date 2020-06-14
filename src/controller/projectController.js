
const {Project} = require('../models/project');


module.exports = {
    async getProjects(req,res){
        Project.find((err,docs)=>{
            if(err){
                res.send(`Error ${JSON.stringify(err,undefined,2)}`);
            }

            return res.send(docs);
        });
    },

    async addProject(req,res){

        const project = new Project({
            name: req.body.name,
            cordinatorId: req.body.cordinatorId,
            created: req.body.created
        });

        project.save((err,docs)=>{
            if(err){
                res.send(`Error ${JSON.stringify(err,undefined,2)}`);
            }
            return res.send(docs);
        });
    }
}