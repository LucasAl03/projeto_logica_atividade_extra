//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let name = (form_num.get('name'))
    let valor = parseFloat(form_num.get('valor'))

    console.log(name, valor)

    if(valor < 10){
        divResultado.innerHTML = (`O produto ${name} que custa ${valor} tem lucro de 70%`)
    }else if((valor >= 10)&&(valor < 30)){
        divResultado.innerHTML = (`O produto ${name} que custa ${valor} tem lucro de 50%`)
    }else if((valor >= 30)&&(valor < 50)){
        divResultado.innerHTML = (`O produto ${name} que custa ${valor} tem lucro de 40%`)
    }else{
        divResultado.innerHTML = (`O produto ${name} que custa ${valor} tem lucro de 30%`)
    }

    

})

//Menor que de R$ 10,00 lucro de 70%; Entre R$10,00 e R$ 30,00 lucro de 50%; Entre R$30,00 e R$ 50,00 lucro de 40%; Maior R$50,00 lucro de 30%.