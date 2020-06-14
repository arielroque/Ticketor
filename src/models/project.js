const database = require('../database/database');

const Project = database.model('Project',{
    name:{type:String,require:true},
    room:{type:String,require:true},
    created:{type:Date,require:true}
});

module.exports={Project};