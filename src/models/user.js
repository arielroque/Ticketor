const database = require('../database/database');
const User = database.model('User',{
    name:{type: String,require:true},
    password:{type:String,require:true},
    email:{type:String,require:true},
    projectId: {type:database.ObjectId,require:true},
    type:{type:String,enum: ['general', 'support'],require:true},
})

module.exports = {User};