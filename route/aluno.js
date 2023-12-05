const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



//retorna todos os alunos
router.get('/', (req, res, next) => {
    mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 500 ).send( { error: error } );
        conn.query(
            'Select * from alunos;',
            ( error, results, fields ) => {
                //conn.release();
                if ( error ) { return res.status( 400 ).send( { ok: error } ); }

                res.status( 200 ).send( {
                    aluno: results
                } );

            }
        )
    } )
});

//cadastra um aluno
router.post('/', (req, res, next) => {
    const aluno = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    // mysql.getConnection((error, conn)=>{
    //     conn.query(
    //         'INSERT INTO alunos(id, nome, )'
    //     )
    // })
    res.status(200).send({
        mensagem: 'Aluno cadastrado',
        alunoCriado: aluno
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