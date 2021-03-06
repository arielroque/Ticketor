const express = require('express');
const routes = require('../src/routes');
const cors = require('cors');
const app = express();
const util = require('./util');

app.use(express.json());
app.use(cors())
app.use(routes);

util.initializeRootUser();

app.listen(5000,()=>{
    console.log("Server started");
});