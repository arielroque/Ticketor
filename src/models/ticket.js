const database = require('../database/database');
const Ticket = database.model('Ticket',{
   title:{type:String,require:true},
   description:{type:String,require:true},
   priority:{type:String,enum: ['High', 'Medium','Low'],require:true},
   authorId:{type:mongoose.ObjectId,require:true},
   solvedID:{type:mongoose.ObjectId,require:false},
   date:{type: Date, default: Date.now}
});

module.exports = {Ticket};