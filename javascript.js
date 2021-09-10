//Declarar constante
const API_KEY = 'cf002ec80672498494ea6144766c274a';

function exibeNoticias(){
    let divTela = document.getElementById('divisao');
    let texto = '';

   // Montar texto HTML das noticias
   let dados = JSON.parse (this.responseText);
   for (i=0; i< dados.articles.length; i++) {
       let noticia = dados.articles[i];
       let data = new Date (noticia.publishedAt);
       //console.log(noticia);
       texto = texto + `
          <div class="box-noticia">
          <img src="${noticia.urlToImage}" width="30%" height="50%" alt="">
          <span class="titulo">
          <h1>${noticia.title}</h1>
          </span>
          <span class="creditos">
          <p>${data.toLocaleDateString ()} - 
          ${noticia.source.name} - 
          ${noticia.author}
          </p>
          <span class="texto">
          <p>
          ${noticia.content}
          </p>
          <a class="btn btn-blog pull-right marginBottom10" href="${noticia.url}" target="_blank">leia mais</a>  
                </span>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>     
       `;
   };

   // Preencher a DIV com o texto HTML
   divTela.innerHTML = texto;
}

function pesquisa (assunto){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${assunto}&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa (){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa1 (){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa2 (){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa3 (){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa4 (){
    //Coletar valor que esta no campo 
    //let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=${API_KEY}`);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}
/*Add Event Listener associa uma funcao a um evento */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.getElementById("btn").addEventListener('click', function(event){
    event.preventDefault();
    const assunto=document.getElementById("dig").value;
    pesquisa(assunto);
    const botao=htmlToElement(`<h1 style="font-size: x-large;" style="font-weight: bold;"><a id="${assunto}" href="#" >${assunto}</a></h1>`)
    botao.addEventListener('click', function(){
        pesquisa(assunto);
    });
    document.getElementById("salvo").appendChild(botao);
});
