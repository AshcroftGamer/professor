const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile('../public/index.html')
});

// router.post('/', (req, res, next) => {
//     res.status(200).send({
//         mensagem: 'Usando o post na rota aluno'
//     })
// });

// router.get('/id_aluno', (req, res, next) => {
//     const id = req.params.id_aluno;
//     if(id === 'especial'){
//         res.status(200).send({
//             mensagem: 'Você descobriu um id especial',
//             id: id
//         })
//     }else{
//         res.status(200).send({
//             mensagem: 'Usando o get na rota aluno',
//             id: id
//         })
//     }
    
// });

module.exports = router;