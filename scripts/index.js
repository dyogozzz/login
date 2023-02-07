let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let btn = document.querySelector("#verSenha");

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

let btnConfirm = document.querySelector("#verConfirmSenha");

btnConfirm.addEventListener("click", () => {
  let inputSenha = document.querySelector("#confirmSenha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function cadastrar() {
  if(validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nome: nome.value,
        usuario: usuario.value,
        senha: senha.value
      }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    setTimeout(()=>{
      msgSuccess.innerHTML ='<strong>Usuário Cadastrado!</strong>'
    }, 2000)

    setTimeout(()=>{
      window.location.href = 'http://127.0.0.1:5500/login.html'
    }, 3000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
    msgSuccess.setAttribute('style', 'display: none')
  }
}

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar senha *A senha precisa ser igual*'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function entrar() {
  let userValid = {
    nome: '',
    usuario: '',
    senha: ''
  }

  let listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach(item => {
    if(usuario.value == item.usuario && senha.value == item.senha){
      userValid = {
        nome: item.nome,
        usuario: item.usuario,
        senha: item.senha
      }
    console.log(userValid)
    }
  })

  if(usuario.value == userValid.usuario && senha.value == userValid.senha && usuario.value != '' && senha.value != ''){
    window.location.href = 'http://127.0.0.1:5500/logado.html'

    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)

    localStorage.setItem('userLogged', JSON.stringify(userValid))
  } else {
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
}
 