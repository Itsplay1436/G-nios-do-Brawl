function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string vazia
    if (campoPesquisa=="") {
        section.innerHTML = "É necessário inserir o nome de lendas ou suas características no campo de pesquisa!!!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se campoPesquisa incluir titulo, descricao ou tags
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
            // Cria o HTML para cada resultado
            resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Perfil da lenda literalmente aqui</a>
        </div>
      `;
    }
}

if(!resultados) {
    resultados = "Inventou coisa aí meu parceiro, digite características ou pessoas reais"
}
  
    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
  }