const express = require('express');
const router = express.Router();



//retorna todos os professor
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o get na rota professor'
    })
});

//cadastra um professor
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o post na rota professor'
    })
});

// atualiza um professor
router.patch('/:id_prof', (req, res, next) => {
    const id = req.params.id_prof;
    res.status(201).send({
        mensagem: 'Usando o patch na rota professor'
    })
});

//deleta um professor
router.delete('/:id_prof', (req, res, next) => {
    const id = req.params.id_prof;
    res.status(201).send({
        mensagem: 'Usando o delete na rota professor'
    })
});

module.exports = router;