const express = require( 'express' );
const router = express.Router();
const mysql = require( '../mysql' ).pool;



//retorna todos os alunos
router.get( '/', async ( req, res, next ) => {
    await mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 500 ).send( { error: error } );
        conn.query(
            'Select * from alunos;',
            ( error, results, fields ) => {
                conn.release();
                if ( error ) { return res.status( 400 ).send( { ok: error } ); }
                const response = {
                    Alunos: results.length,
                    aluno: results.map( data => {
                        return {
                            Id: data.id,
                            Nome: data.nome,
                            Idade: data.idade,
                            Serie: data.serie,
                            B1: data.b1,
                            B2: data.b2,
                            B3: data.b3,
                            B4: data.b4,
                            id_prof: data.id_prof
                        }
                    } )

                }
                return res.status( 200 ).send( response );
            }
        )
    } )
} );

router.get( '/:id', async ( req, res, next ) => {
    let idAluno = req.params.id
    await mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 500 ).send( { error: error } );
        conn.query(
            'Select * from alunos where id = ?;',
            [ idAluno ],
            ( error, results, fields ) => {
                if ( error ) { return res.status( 400 ).send( { ok: error } ); }

                const response = {
                    Alunos: results.length,
                    aluno: results.map( data => {
                        return {
                            Id: data.id,
                            Nome: data.nome,
                            Idade: data.idade,
                            Serie: data.serie,
                            B1: data.b1,
                            B2: data.b2,
                            B3: data.b3,
                            B4: data.b4,
                            id_prof: data.id_prof
                        }
                    } )

                }


                return res.status( 200 ).send( response );
            }
        )
    } )
} );

//cadastra um aluno
router.post( '/cadastro', async( req, res, next ) => {

    await mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 400 ).send( { ok: error } );

        conn.query(
            'INSERT INTO alunos(nome, idade, serie, b1, b2, b3, b4, id_prof) values (?, ?, ?, ?, ?,?,?,?);',
            [
                req.body.nome,
                req.body.idade,
                req.body.serie,
                req.body.b1,
                req.body.b2,
                req.body.b3,
                req.body.b4,
                req.body.id_prof
            ],
            ( error, resultado, field ) => {
                // conn.release();
                if ( error ) {
                    return res.status( 500 ).send( {
                        error: error,
                        response: null
                    } );
                }
                res.status( 201 ).send( {
                    mensagem: 'Cadastro aluno Realizado com sucesso',
                   

                } );

            }
        );

    } )

} );


    // atualiza um aluno
    router.patch( '/:id_aluno', ( req, res, next ) => {
        const id = req.params.id_aluno;
        res.status( 201 ).send( {
            mensagem: 'Usando o patch na rota aluno'
        } )
    } );


    //deleta um aluno
    router.delete( '/:id_aluno', ( req, res, next ) => {
        const id = req.params.id_aluno;
        res.status( 201 ).send( {
            mensagem: 'Usando o delete na rota aluno'
        } )
    } );

    module.exports = router;