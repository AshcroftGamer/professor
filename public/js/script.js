var urlBase = 'http://localhost:3000';

// const fetchApi = () => {
//     const result = fetch( urlBase + '/aluno/' )
//         .then( ( res ) => {
//            return res.json()
//         } ).then( ( data ) => {
//             console.log(data)


//         } )

// }
// fetchApi()


window.onload = function getAlunosAll() {
    fetch( urlBase + '/aluno/' ).then( response => {
        // console.log( response )
        return response.json()

    } ).then( data => {


        console.log( data.Alunos, data.aluno );
        if ( !data.Alunos ) {
            console.log( 'passou' )
        }


        for ( let i = 0; i < data.length; i++ ) {

            let tabela = document.createElement( 'table' );
            let thead = document.createElement( 'thead' );
            let tbody = document.createElement( 'tbody' );

            tabela.appendChild( thead );
            tabela.appendChild( tbody );
            document.getElementById( 'tabela' ).appendChild( tabela );

            let row_1 = document.createElement( 'tr' );
            let heading_1 = document.createElement( 'th' );
            heading_1.innerHTML = 'Nome';
            let heading_2 = document.createElement( 'th' );
            heading_2.innerHTML = 'Idade';
            let heading_3 = document.createElement( 'th' );
            heading_3.innerHTML = 'Série';
            let heading_4 = document.createElement( 'th' );
            heading_4.innerHTML = 'B1';
            let heading_5 = document.createElement( 'th' );
            heading_5.innerHTML = 'B2';
            let heading_6 = document.createElement( 'th' );
            heading_6.innerHTML = 'B3';
            let heading_7 = document.createElement( 'th' );
            heading_7.innerHTML = 'B4';
            let heading_8 = document.createElement( 'th' );
            heading_8.innerHTML = 'Média';
            let heading_9 = document.createElement( 'th' );
            heading_9.innerHTML = ' ';
            let heading_10 = document.createElement( 'th' );
            heading_10.innerHTML = ' ';
            let heading_11 = document.createElement( 'th' );
            heading_11.innerHTML = ' ';

            row_1.appendChild( heading_1 );
            row_1.appendChild( heading_2 );
            row_1.appendChild( heading_3 );
            row_1.appendChild( heading_4 );
            row_1.appendChild( heading_5 );
            row_1.appendChild( heading_6 );
            row_1.appendChild( heading_7 );
            row_1.appendChild( heading_8 );
            row_1.appendChild( heading_9 );
            row_1.appendChild( heading_10 );
            row_1.appendChild( heading_11 );
            thead.appendChild( row_1 );


            let row_2 = document.createElement( 'tr' );
            let row_2_data1 = document.createElement( 'td' );
            row_2_data1.innerHTML = data.aluno.nome;
            let row_2_data2 = document.createElement( 'td' );
            row_2_data2.innerHTML = '10';
            let row_2_data3 = document.createElement( 'td' );
            row_2_data3.innerHTML = '6 ano';
            let row_2_data4 = document.createElement( 'td' );
            row_2_data4.innerHTML = '7';
            let row_2_data5 = document.createElement( 'td' );
            row_2_data5.innerHTML = '9';
            let row_2_data6 = document.createElement( 'td' );
            row_2_data6.innerHTML = '8';
            let row_2_data7 = document.createElement( 'td' );
            row_2_data7.innerHTML = '8';
            let row_2_data9 = document.createElement( 'td' );

            row_2_data9.innerHTML = '<button class="btn-edit" onclick="ok()" type="">Editar</button>';
            let row_2_data10 = document.createElement( 'td' );
            row_2_data10.innerHTML = '<button class="btn-editn" type="">Editar Notas</button>';
            let row_2_data11 = document.createElement( 'td' );
            row_2_data11.innerHTML = '<button class="btn-delete" type="">Excluir</button>';

            row_2.appendChild( row_2_data1 );
            row_2.appendChild( row_2_data2 );
            row_2.appendChild( row_2_data3 );
            row_2.appendChild( row_2_data4 );
            row_2.appendChild( row_2_data5 );
            row_2.appendChild( row_2_data6 );
            row_2.appendChild( row_2_data7 );
            row_2.appendChild( row_2_data8 );
            row_2.appendChild( row_2_data9 );
            row_2.appendChild( row_2_data10 );
            row_2.appendChild( row_2_data11 );
            tbody.appendChild( row_2 );

        }




    } ).catch( error => console.error( 'Erro:', error ) );
}

function criarTr() {

    let tabela = document.createElement( 'table' );
    let thead = document.createElement( 'thead' );
    let tbody = document.createElement( 'tbody' );

    tabela.appendChild( thead );
    tabela.appendChild( tbody );
    document.getElementById( 'tabela' ).appendChild( tabela );

    let row_1 = document.createElement( 'tr' );
    let heading_1 = document.createElement( 'th' );
    heading_1.innerHTML = 'Nome';
    let heading_2 = document.createElement( 'th' );
    heading_2.innerHTML = 'Idade';
    let heading_3 = document.createElement( 'th' );
    heading_3.innerHTML = 'Série';
    let heading_4 = document.createElement( 'th' );
    heading_4.innerHTML = 'B1';
    let heading_5 = document.createElement( 'th' );
    heading_5.innerHTML = 'B2';
    let heading_6 = document.createElement( 'th' );
    heading_6.innerHTML = 'B3';
    let heading_7 = document.createElement( 'th' );
    heading_7.innerHTML = 'B4';
    let heading_8 = document.createElement( 'th' );
    heading_8.innerHTML = 'Média';
    let heading_9 = document.createElement( 'th' );
    heading_9.innerHTML = ' ';
    let heading_10 = document.createElement( 'th' );
    heading_10.innerHTML = ' ';
    let heading_11 = document.createElement( 'th' );
    heading_11.innerHTML = ' ';

    row_1.appendChild( heading_1 );
    row_1.appendChild( heading_2 );
    row_1.appendChild( heading_3 );
    row_1.appendChild( heading_4 );
    row_1.appendChild( heading_5 );
    row_1.appendChild( heading_6 );
    row_1.appendChild( heading_7 );
    row_1.appendChild( heading_8 );
    row_1.appendChild( heading_9 );
    row_1.appendChild( heading_10 );
    row_1.appendChild( heading_11 );
    thead.appendChild( row_1 );


    let row_2 = document.createElement( 'tr' );
    let row_2_data1 = document.createElement( 'td' );
    row_2_data1.innerHTML = 'João';
    let row_2_data2 = document.createElement( 'td' );
    row_2_data2.innerHTML = '10';
    let row_2_data3 = document.createElement( 'td' );
    row_2_data3.innerHTML = '6 ano';
    let row_2_data4 = document.createElement( 'td' );
    row_2_data4.innerHTML = '7';
    let row_2_data5 = document.createElement( 'td' );
    row_2_data5.innerHTML = '9';
    let row_2_data6 = document.createElement( 'td' );
    row_2_data6.innerHTML = '8';
    let row_2_data7 = document.createElement( 'td' );
    row_2_data7.innerHTML = '8';



    // document.onload = function media() {
    //     let valorFinal;
    //     let b1 = parseFloat( row_2_data4.innerHTML )
    //     let b2 = parseFloat( row_2_data5.innerHTML )
    //     let b3 = parseFloat( row_2_data6.innerHTML )
    //     let b4 = parseFloat( row_2_data7.innerHTML )
    //     valorFinal = ( b1 + b2 + b3 + b4 ) / 4;
    //     return valorFinal;
    // }
    // let row_2_data8 = document.createElement( 'td' );
    // row_2_data8.innerHTML = 'media';


    let row_2_data9 = document.createElement( 'td' );
    row_2_data9.innerHTML = '<button class="btn-edit" onclick="ok()" type="">Editar</button>';
    let row_2_data10 = document.createElement( 'td' );
    row_2_data10.innerHTML = '<button class="btn-editn" type="">Editar Notas</button>';
    let row_2_data11 = document.createElement( 'td' );
    row_2_data11.innerHTML = '<button class="btn-delete" type="">Excluir</button>';

    row_2.appendChild( row_2_data1 );
    row_2.appendChild( row_2_data2 );
    row_2.appendChild( row_2_data3 );
    row_2.appendChild( row_2_data4 );
    row_2.appendChild( row_2_data5 );
    row_2.appendChild( row_2_data6 );
    row_2.appendChild( row_2_data7 );
    row_2.appendChild( row_2_data8 );
    row_2.appendChild( row_2_data9 );
    row_2.appendChild( row_2_data10 );
    row_2.appendChild( row_2_data11 );
    tbody.appendChild( row_2 );

}


async function cadProfessor() {

    // const nome = document.getElementById( 'nome' ).value;
    // const materia = document.getElementById( 'materia' ).value;
    // const email = document.getElementById( 'email' ).value;
    // const senha = document.getElementById( 'senha' ).value;
    // const professor = {
    //     nome: document.getElementById( 'fname' ).value,
    //     materia: document.getElementById( 'fmateria' ).value,
    //     email: document.getElementById( 'fmail' ).value,
    //     senha: document.getElementById( 'fsenha' ).value
    // };

    // console.log( professor);
    await fetch( 'http://localhost:3000/professor/cadastro/', {
        method: 'POST',
        header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },

        mode: "cors",
        body:
        {
            nome: 'Joao',
            materia: "Geografia",
            senha: 'sddadff',
            email: 'Joao@123.com'
        }



    } ).then( response => {
        // console.log( response )
        return response.json()

    } ).then( data => {

        console.log( data )


    } ).catch( error => console.log( 'Erro:', error ) );
}