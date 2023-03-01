function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    //var hora =  
    
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#fef7d3'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#96605c'
    } else if (hora > 18 && hora < 24) {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#3a2d48'
    }
}
