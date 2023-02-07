let userLogged = JSON.parse(localStorage.getItem('userLogged'))

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá' + ' ' + userLogged.nome + '!' + '<br>' + 'Este é um sistema de cadastro e login que tem funcionalidade com o local storage do seu navegador substituindo um banco de dados' + '<br>' + '<br>' +'Fiquei com preguiça de fazer essa página bonita pois não adicionaria nada' + '<br>' + '<br>' + 'Não se preocupe, os seus dados de login estão salvos apenas no seu próprio navegador e eu não tenho acesso algum' + '<br>' + '<br>' + 'Tanto o botão sair quanto a ação de fechar a página, fazem com que esse login expire e você tenha que se logar novamente apenas por segurança pra ver essa página!' 

function valid() {
    if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esse site!')
    window.location.href = 'https://dyogozzz.github.io/login/login'
    }
}

function sair(){ 
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    window.location.href ='https://dyogozzz.github.io/login/login'
  }

 function fechaSite() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
}
