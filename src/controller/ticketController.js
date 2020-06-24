const {Ticket} = require('../models/ticket');

module.exports = {
    async getTickets(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find((err,docs)=>{
            if(err){
                res.status(400).send(err);
            }
            return res.send(docs);
        });
    },

    async getSolvedTickets(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"status":'solved'},(err,docs)=>{
            if(err){
                res.status(400).send(err);
            }
            return res.send(docs);
        });
    },

    async getUnsolvedTickets(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"status":'unsolved'},(err,docs)=>{
            if(err){
                res.status(400).send(err);
            }
            return res.send(docs);
        });
    },

    async getTicketsByEmail(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({email:userEmail},(err,docs)=>{
            if(err){
                res.status(400).send(err);
            }
            return res.send(docs);
        });
    },

    async getUnsolvedTicketsByEmail(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'unsolved'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getUnsolvedTicketsByEmailHighPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'unsolved',"priority":'high'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getUnsolvedTicketsByEmailMediumPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'unsolved',"priority":'medium'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getUnsolvedTicketsByEmailLowPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'unsolved',"priority":'low'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getTicketsByHighPriority(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"priority":'high'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getTicketsByMediumPriority(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"priority":'medium'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },
    async getTicketsByLowPriority(req,res){

        const accountType = req.decoded.data.type;
    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"priority":'low'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getSolvedTicketsByEmail(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'solved'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getSolvedTicketsByEmailHighPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'solved',"priority":'high'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getSolvedTicketsByEmailMediumPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'solved',"priority":'medium'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
            }
            return res.send(docs);
        });
    },

    async getSolvedTicketsByEmailLowPriority(req,res){

        const accountType = req.decoded.data.type;
        const userEmail = req.params.email;

    
        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({"email":userEmail,"status":'solved',"priority":'low'},(err,docs)=>{
            if(err){
                res.status(500).send(err);
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

    },

    async solverTicket(req,res){
        const accountType = req.decoded.data.type;
        const supportId = req.decoded.data._id;
        const ticketID = req.params.id;

        if(accountType != "support"){
            return res.status(401).send({"Error":"Account is not authorized for this action"})
        }

        Ticket.find({_id:ticketID},(err,docs)=>{
            if(err){
                res.status(400).send({"Error":"Invalid ticket id"});
            }

             Ticket.updateOne({_id:ticketID},{solverId:supportId,status:'solved'},(err,docs)=>{
                if(err){
                    res.status(400).send(err);
                }

                return res.send({"sucess":"true","message":"Ticket successfully updated"});
             });

        });

    }
}