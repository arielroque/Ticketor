const {Ticket} = require('../models/ticket');


module.exports = {
    async getTickets(req,res){
        Ticket.find((err,docs)=>{
            if(err){
                res.send(`Error ${JSON.stringify(err,undefined,2)}`);
            }
            return res.send(docs);
        });
    },

    async addTicket(req,res){
        const ticket = new Ticket({
            title:req.body.title,
            description:req.body.description,
            priority:req.body.priority,
            authorId:req.body.authorId,
        });

        ticket.save((err,docs)=>{
            if(err){
                res.send(`Error ${JSON.stringify(err,undefined,2)}`);
            }
            return res.send(docs);
        });

    }
}