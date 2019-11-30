const express = require('express');
const cors = require('cors');

//routes
const agentData = require('./routes/agentsList');
const propertyData = require('./routes/propertyList');

const app = express ();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/agent', agentData);
app.use('/property', propertyData);


app.listen(8080, () => {
    console.log(`++++ The Server Is Working ++++`);
})