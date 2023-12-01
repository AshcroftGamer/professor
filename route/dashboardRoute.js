const express = require('express');
const router = express.Router();
const mysql = require( '../mysql' ).pool;

// global.__basedir = __dirname;


//retorna todos os professor
router.get( '/', ( req, res, next ) => {
    
        res.sendFile(__basedir +'/public/pages/dashboard.html' );

} );
router.get( '/:id_prof', ( req, res, next ) => {
    // const id = req.params.id_prof;
    mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 500 ).send( { error: error } );
        conn.query(
            'select * from professor where id = ?;',
            [
                req.params.id_prof
            ],
            ( error, results, fields ) => {
                //conn.release();
                if ( error ) { return res.status( 400 ).send( { erro: error } ); }

                res.status( 200 ).send( {
                    Professor: results
                } );

            }
        )
    } )

} );

//cadastra um professor
router.post( '/', ( req, res, next ) => {

    mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 400 ).send( { ok: error } );

        conn.query(
            'INSERT INTO professor ( nome, email, senha, materia) values (?, ?, ?, ?);',
            [
                req.body.nome, req.body.email, req.body.senha, req.body.materia
            ],
            ( error, resultado, field ) => {
                conn.release();
                if ( error ) {
                    return res.status( 500 ).send( {
                        error: error,
                        response: null
                    } );
                }
                res.status( 201 ).send( {
                    mensagem: 'Cadastro professor Realizado com sucesso',
                    id_professor: resultado.insertId

                } );

            }
        );

    } )

} );

// atualiza um professor
router.patch( '/:id', ( req, res, next ) => {
    //const id = req.params.id_prof;
    mysql.getConnection( ( error, conn ) => {
        if ( error )
            {return res.status( 500 ).send( { error: error } );}

        conn.query(
            'UPDATE professor SET nome = ?, senha = ? WHERE id = ?;',
            [
                req.body.nome,  
                req.body.senha, 
                req.params.id
            ],
            ( error, resultado, field ) => {
                conn.release();
                if ( error ) {
                    return res.status( 500 ).send( {
                        error: error
                    } );
                }
                res.status( 201 ).send( {
                    mensagem: 'professor atualizado com sucesso'
                } );

            }
        );

    } )
} );

//deleta um professor
router.delete( '/:id_prof', ( req, res, next ) => {
    const id = req.params.id_prof;
    mysql.getConnection( ( error, conn ) => {
        if ( error )
            return res.status( 500 ).send( { error: error } );
        conn.query(
            'delete from professor where id = ?;',
            [
                req.params.id_prof
            ],
            ( error, results, fields ) => {
                //conn.release();
                if ( error ) { return res.status( 400 ).send( { erro: error } ); }

                res.status( 200 ).send( {
                    Professor: results
                } );

            }
        )
    } )

} );

module.exports = router;