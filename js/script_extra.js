const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let num = parseFloat(form_num.get('num'))

    console.log(num)

    let = parseFloat(num1 + num2 + num3) / parseFloat(3)

    divResultado.innerHTML = ` ${num} `

})