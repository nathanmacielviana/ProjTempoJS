function carregar()
{
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são: ${hora} horas`
    
    if (hora >= 5 && hora < 12) //BOM DIA
    {
        img.src = 'sol.png'
        document.body.style.background = 'rgb(15, 132, 241)'
    } 
    else if (hora >=12 && hora < 18) //BOA TARDE
    {
          img.src = 'imagens/tarde.png'
          document.body.style.background = 'rgb(233, 158, 20)'
    }

    else  //BOA NOITE
    {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(58, 7, 153)'
    }
}