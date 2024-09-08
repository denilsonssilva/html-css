function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
let campoPesquisa = document.getElementById('campo-pesquisa').value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = '<p style="color: red; font-size: 20px; background-color: black">Nada foi digitado</p>'
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
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <a href="${dado.link}" target="_blank">
                <img src="${dado.imagem}" alt="${titulo}" target="_blank" a>
                </a>
                <p>Diretor: ${dado.diretor}</p>
                <p>Ano de lançamento: ${dado.anoLancamento}</p>
                <p>Sinopse: ${dado.sinopse}</p>
                <p>Gênero: ${dado.genero}</p>
                <p>Duração do Filme: ${dado.duracao}</p>
                <a href="${dado.streaming}" target="_blank">Onde assistir saiba mais...</a><br>
                <a href="${dado.trailer}" target="_blank">Trailer</a>
            </div>
            `;
        }
        
    }

    if (!resultados){
        resultados = '<p style="color: red; font-size: 20px; background-color: black">Nada foi encontrado para sua busca</p>'

    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



