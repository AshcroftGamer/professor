var myHeaders = new Headers();

var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
};


function ok() {
    alert( "clickou" )
};

class alunos {
    constructor () {
        this.arrayAluno = [];
        this.editId = null;
    }

    listaAlunosAll() {
        fetch( 'http://localhost:3000/aluno/', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        } ).then( result => {
            return result.json();
        } ).then( data => {
            data.aluno.array.forEach( element => {
                this.arrayAluno.push( element );
            } )
            for ( let i = 0; i < this.arrayAluno.length; i++ ) {

                if(this.arrayAluno[i].id_prof == localStorage.getItem('id_professor')){
                    let aluno = document.createElement('option');

                }

                if ( this.arrayEstabelecimento[ i ].id_proprietario == localStorage.getItem( 'id_proprietario' ) ) {
                    let estabelecimento = document.createElement( 'option' )
                    estabelecimento.setAttribute( "value", this.arrayEstabelecimento[ i ].nome_estabelecimento );
                    estabelecimento.innerHTML = `${this.arrayEstabelecimento[ i ].nome_estabelecimento}`;
                    document.getElementsByClassName( "dropdown_estabelecimento" )[ 0 ].appendChild( estabelecimento )
                }



            }
        } )
    }

}