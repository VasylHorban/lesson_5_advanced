const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('../config/db.connect')

const taskRouter = require('../src/routes/rout')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(taskRouter)


app.listen(PORT, err=>{
    if(err) console.log('Server is field')
    else console.log('Server is running on Port : ' + PORT)
})

app.get('/', (req, res)=>{
    res.send('To do app')
})
