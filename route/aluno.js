const express = require('express');
const router = express.Router();



//retorna todos os alunos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o get 1 na rota aluno'
    })
});

//cadastra um aluno
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o post na rota aluno'
    })
});

// atualiza um aluno
router.patch('/:id_aluno', (req, res, next) => {
    const id = req.params.id_aluno;
    res.status(201).send({
        mensagem: 'Usando o patch na rota aluno'
    })
});

//deleta um aluno
router.delete('/:id_aluno', (req, res, next) => {
    const id = req.params.id_aluno;
    res.status(201).send({
        mensagem: 'Usando o delete na rota aluno'
    })
});

module.exports = router;