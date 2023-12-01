const express = require( "express" );
const app = express();
const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );

global.__basedir = __dirname;
app.use( express.static( __dirname + '/public' ) );
app.use( '/uploads', express.static( '/uploads' ) );
app.use( '/public', express.static( __dirname + '/public' ) );
app.use( '/css', express.static( __dirname + '/public/css' ) );
app.use( '/js', express.static( __dirname + '/public/js' ) );
app.use( '/img', express.static( __dirname + '/public/img' ) );

const rotaAluno = require( './route/aluno' );
const rotaHome = require( './route/home' );
const rotaProf = require( './route/professor' );
const rotaDashboad = require('./route/dashboardRoute');


app.use('/dashboard', rotaDashboad);
app.use( '/aluno', rotaAluno );
app.use( '/home', rotaHome );
app.use( '/professor', rotaProf );

// app.use( morgan( 'dev' ) );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.use( ( req, res, next ) => {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
} );






app.use( ( req, res, next ) => {
    const erro = new Error( 'Não encontrado' );
    erro.status = 404;
    next( erro );
} );

app.use( ( error, req, res, next ) => {
    res.status( error.status || 500 );
    return res.send( {
        erro: {
            mensagem: error.message
        }
    } )
} );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


module.exports = app;