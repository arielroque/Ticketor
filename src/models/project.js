const database = require('../database/database');

const Project = database.model('Project',{
    name:{type:String,require:true},
    coordinatorId:{type:mongoose.ObjectId,require:true},
    created:{type:Date,require:true}
});

module.exports={Project};