//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let codigo = (form_num.get('codigo'))
    let senha = (form_num.get('senha'))

    if((codigo == "ABCD1234") && (senha == "1234")){
        alert("ACESSO PERMITIDO")
    }else{
        alert("ACESSO NEGADO")
    }

})