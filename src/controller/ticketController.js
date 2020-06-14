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

    }
}