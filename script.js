function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    
    const data = new Date()    
    const hora = data.getHours()
    const strData = data.toTimeString().substring(0,5)

    msg.innerHTML = `Agora são ${strData}`
    
    if (hora >= 0 && hora < 12) {
        img.src = './images/manha.png'
        document.body.style.background = '#e2cd9f' 
    } else if (hora >= 12 && hora <= 18) {
        img.src = './images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './images/noite.png'
        document.body.style.background = '#515154'        
    }
}
