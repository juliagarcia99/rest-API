//const { Router } = require('express');

const express = require('express');
const apps = require('./app');

const router = express.Router();

const app = express();

app.use(express.urlencoded({ extended: false}));

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "legumes"
    }
  });

router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem: "funcionando :)"
    });
});

router.get('/legumes', (req,res,next)=>{
    const html = __dirname + "/index.html"
    res.sendFile(html)
})

router.get('/nomes',(req,res,next)=>{
    knex.select('nome').from('legumes').then((nomes)=>{
        res.status(200).send(nomes)
    })

})

router.post('/legumes', (req, res, next)=> {
  knex.insert(req.body).into("legumes").then(function(a){
    res.send("adicionado :)")
  })
  console.log(req.body)
})

module.exports = router;