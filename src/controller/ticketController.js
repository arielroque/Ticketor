const {Ticket} = require('../models/ticket');


module.exports = {
    async getTickets(req,res){
        Ticket.find((err,docs)=>{
            if(err){
                res.status(400).send(err);
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
                res.status(400).send(err);
            }
            return res.send(docs);
        });

    }
}