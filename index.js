const express = require('express')
const app = express();
const port = ;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let isActive = false;

app.get('/', function(req, res){
   res.send("Hello world!");
});


app.get('/status', (req, res) =>{

res.send({isActive});
});

app.post('/change', (req, res) =>{
isActive = !isActive;
res.send({isActive});
    
});


app.listen(port, () => {
    console.log(`Listening on ${port}`)
  });