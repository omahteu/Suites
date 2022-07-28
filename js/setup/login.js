import { link } from "./index.js"

async function autenticacao(usuario, senha){
    const resposta = await fetch(link[20])
    const data = await resposta.json()
    var dados = data.filter(nome => nome.nome == usuario)
    if(dados.length == 0){
        alert('Usuário e/ou Senha Inválidos!')
    } else {
        dados.forEach(elemento => {
            if(usuario === elemento.nome && senha === elemento.senha){
                if(elemento.status === 'Admin'){
                    alert('Login com Sucesso!')
                    localStorage.setItem('usuarioLogado', 'admin')
                    localStorage.setItem('nome', elemento.nome)
                    localStorage.setItem('caixa', 'fechado')
                    $(location).attr('href', './paginas/home.html')
                } else {
                    alert('Login com Sucesso!')
                    localStorage.setItem('usuarioLogado', 'caixa')
                    localStorage.setItem('nome', elemento.nome)
                    localStorage.setItem('caixa', 'fechado')
                    $(location).attr('href', './paginas/caixa.html')
                }
            } else {
                alert('Usuário e/ou Senha Inválidos!')
            }
        });
    }
}

$(document).keypress( (event) => {
    var keycode = (event.keyCode ? event.keyCode : event.which)
    if(keycode == '13'){
        var nome = $("#usuario")
        var senha = $("#senha")
        if(nome.val() == ''){
            alert('Nome Inválido')
            nome.focus()
            return
        }
        if(senha.val() == ''){
            alert('Senha Inválida')
            senha.focus()
            return
        }
        autenticacao(nome.val(), senha.val())       
    }
}) 

$("#btn-acessar").click(function() {
    var nome = $("#usuario")
    var senha = $("#senha")
    if(nome.val() == ''){
        alert('Nome Inválido')
        nome.focus()
        return
    }
    if(senha.val() == ''){
        alert('Senha Inválida')
        senha.focus()
        return
    }
    autenticacao(nome.val(), senha.val())
})
