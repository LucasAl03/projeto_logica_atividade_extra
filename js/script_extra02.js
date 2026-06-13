//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let code = parseFloat(form_num.get('num'))
    let senha = parseFloat(form_num.get(`num`))

    if((code == 'ABCD1234')&&(senha = `1234`)){
        divResultado.innerHTML("ACESSO PERMITIDO")
    }else{
        divResultado.innerHTML("ACESSO NEGADO")
    }

})