const express = require("express")
const app = express();

const rotaAluno = require('./route/aluno');

app.use('/aluno', rotaAluno);

app.use('/teste', (req, res, next) =>   {
    res.status(200).send({
        mensagem: "Deu certo"
    });
});



module.exports = app;