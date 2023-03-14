function carregar(){

    var msg= window.document.getElementById('msg')
    var img=window.document.querySelector('img#foto')
    var data= new Date
    var hora=data.getHours()
    var min=data.getMinutes()
    if (hora<=12 && hora>=0){
        msg.innerHTML= `São exatamente ${hora} : ${min}, Bom dia`
        img.src='fotomanha.png'
        window.document.body.style.background='#e2cd9f'
    }
    else if(hora>12 && hora<18){
        msg.innerHTML=`São extamente ${hora}: ${min}, Boa tarde!`
        img.src='fototarde.png'
        window.document.body.style.background='#b9846f'
        
    }
    else{
        msg.innerHTML=`São exatamente ${hora}: ${min}, Boa noite!:`
        img.src='fotonoite.png'
        window.document.body.style.background='#515154'
    }
}