function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
let campoPesquisa = document.getElementById('campo-pesquisa').value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = '<p>Nada foi digitado</p>'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';
    let titulo = '';
    let sinopse = '';
    let tags = '';

  
    // Itera sobre os dados da pesquisa e cria o HTML para cada item
    for (let dado of dados){
        titulo = dado.titulo.toLocaleLowerCase()
        sinopse = dado.sinopse.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        // se titulo inclui campoPesquisa
        if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){

        //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p>${dado.genero}</p>
                <p>${dado.duracao}</p>
            </div>
            `;
        }
        
    }

    if (!resultados){
        resultados = '<p>Nada foi encontrado para sua busca</p>'

    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



