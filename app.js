const express = require("express")
const app = express();

const rotaAluno = require('./route/aluno');
const rotaHome = require('./route/home');
const rotaProf = require('./route/professor');

app.use('/aluno', rotaAluno);
app.use('/home', rotaHome);
app.use('/professor', rotaProf);

app.use('/teste', (req, res, next) =>   {
    res.status(200).send({
        mensagem: "Deu certo"
    });
});



module.exports = app;