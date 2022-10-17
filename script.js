function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var boa =window.document.getElementById('boa')
    var data = new Date()
    var dia = data.getDate()
    var mes = (data.getMonth()+1) 
    var hora = data.getHours()
    var min= data.getMinutes()
    var ano= data.getFullYear()

    msg.innerHTML = ` Hoje é dia <strong>${dia}</strong> do <strong>${mes}</strong> de <strong>${ano}</strong> e agora são: <strong>${hora}:${min}</strong>`

    if (hora >=0 && hora <12){
        img.src='img/manhaa.jpg'
        boa.innerHTML =`Tenha um otimo dia!`
        document.body.style.background='#A4D8FC'
    } else if (hora >=12 && hora <=18 ) {
        img.src='img/tardee.jpg'
        boa.innerHTML ='Tenha uma otima tarde!'
        document.body.style.background='#FFB784'
    }
    else{
        img.src='img/noitee.jpg'
        document.body.style.background = '#8568A1'
        boa.innerHTML ='Tenha uma otima Noite!'
    }
}