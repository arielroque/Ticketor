const database = require('mongoose');

database.connect("mongodb://localhost:27017/ticketor",{ useNewUrlParser: true }).then(()=>{
    console.log("Database started");
}).catch((err)=>{
    console.log(`Database could not start, error: ${JSON.stringify(err,undefined,2)}`);
});
module.exports = database;