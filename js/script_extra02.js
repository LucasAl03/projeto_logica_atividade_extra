//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let num = parseFloat(form_num.get('num'))

    console.log(num)

    if((num % 3 === 0) && (num % 7 === 0)){
        divResultado.innerHTML = `O número ${num} é divisível por 3 e 7`
    }else{
        divResultado.innerHTML = `O número ${num} NÃO é divisível por 3 e 7`
    }

})