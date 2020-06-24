const database = require('../database/database');
const Ticket = database.model('Ticket',{
   title:{type:String,require:true},
   description:{type:String,require:true},
   priority:{type:String,enum: ['high', 'medium','low'],require:true},
   authorId:{type:database.ObjectId,require:true},
   solverId:{type:database.ObjectId,default:null},
   date:{type: Date, default: Date.now},
   status:{type: String,default:'unsolved'}
});

module.exports = {Ticket};