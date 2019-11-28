const express = require('express');
const cors = require('cors');

//routes
const propertyData = require('./routes/propertyList');
const agentData = require('./routes/agentsList');

const app = express ();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/property', propertyData);
app.use('/agent', agentData);

app.listen(8080, () => {
    console.log(`++++ The Server Is Working ++++`);
})