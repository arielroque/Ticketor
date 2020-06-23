
const {Project} = require('../models/project');

module.exports = {
    async getProjects(req,res){
        Project.find((err,docs)=>{
            if(err){
                res.status(400).send(err);
            }

            return res.send(docs);
        });
    },

    async addProject(req,res){

        const project = new Project({
            name: req.body.name,
            room: req.body.room,
            created: req.body.created
        });

        project.save((err,docs)=>{
            if(err){
                res.status(400).send(err);
            }
            return res.send(docs);
        });
    }
}