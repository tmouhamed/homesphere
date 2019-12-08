const express = require('express');
const cors = require('cors');

//routes
const agentData = require('./routes/agentsList');
const propertyData = require('./routes/propertyList');
const applicantsData = require('./routes/applicantsList');

const app = express ();

//middlewares
app.use(cors());
app.use(express.json());

app.use(express.static('public'));
app.use('/agents', agentData);
app.use('/properties', propertyData);
app.use('/applications', applicantsData);


app.listen(8080, () => {
    console.log(`++++ The Server Is Working ++++`);
})