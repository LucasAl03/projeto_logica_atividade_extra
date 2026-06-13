//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let code = `ABCD1234`
    let password = `1234`

    if((codigo = code)&&(senha = password)){
        divResultado.innerHTML = `ACESSO PERMITIDO`
    }else{
        divResultado.innerHTML = `ACESSO NEGADO`
    }

})