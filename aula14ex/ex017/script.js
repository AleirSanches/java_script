function gerar(){
    var num=window.document.getElementById('num')
    
    var tab=window.document.getElementById('tab')
    if (num.value.length == 0){ // aqui testa com o tamanho de string (length)
        alert('[erro] Digite um valor' )
    }
    else {
        var nu= Number(num.value) // converte para numero
        let c=1
        tab.innerHTML='' //limpa o select apos as interações
        while(c<=10){
            var item=document.createElement('option') // cria um option dentro do select
            item.text = `${nu} X ${c} = ${nu*c} `//coloca um texto dentro do select
            tab.appendChild(item) // adiciona o item dentro do select
            c++

    }
}
}
s