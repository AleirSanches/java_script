
let res=window.document.querySelector('div#res') // Variavel para a resposta
let array=[]
let nu=window.document.getElementById('txtn') // Variavel que coloca o numero
//let num=Number(nu.value)
let sel=window.document.querySelector('select#arra')

function nuConsta(n,l){         // função que verifica se o  numero esta no Array
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function verNumero(n){ // função que verifica se o numero esta estre 1 e 100
    if (Number(n)>0 && Number(n)<=100){
        return true
    }
    else {
        return false
    }
}

function chamar(){ // função que adiciona no select e no Array
    
    if ( verNumero(nu.value) &&  !nuConsta(nu.value ,array)){
        var item=window.document.createElement('option') // cria um option dentro do select
        item.text = ` O valor ${nu.value} adicionado`//coloca um texto dentro do select
        sel.appendChild(item) // adiciona o item dentro do select
        
        array.push(nu.value)


    }
    else{
        alert('Digite um valor entre 1 e 100')
    }
    nu.value='' // limpa o valor de nu a cada ver que usa
    nu.focus() // coloca o focu o cursor sempre em nu

}

function final(){
    if (array.length==0){
        alert('Digite um valor para Finalizar')
    }
    else{
    
    let soma=0
    
    let media=0    
    let max=array[0]
    let min=array[0]
    let tamanho=array.length

    for(let pos in array){ // tipo de for para array
        soma+=array[pos]   
        if(array[pos]>max){
            max=array[pos]   //subistitui o valor de max, caso a proxima posição for maior

        }
        if(array[pos]<min){
            min=array[pos]   // subistitui o valor de min vaso a proxima posição de Array for menor

        }
        
    }

   

    /*for(let pos=0;pos<=array.length;pos++){
        som+=array[pos]
        /*var item=window.document.createElement('option') // cria um option dentro do select
        item.text = ` Posição ${pos} o valor ${array[pos]} `//coloca um texto dentro do select
        arr.appendChild(item) // adiciona o item dentro do select*/
       
        
          
    

    res.innerHTML+=` Array ${array} <br>`
    res.innerHTML+=` O maior valor e ${max}<br>`
    res.innerHTML+= ` O menor valor e ${min}<br>`
    res.innerHTML+=`O tamanho da Array e ${tamanho}<br>`
    res.innerHTML+= ` A soma dos valores da Array e :${soma}<br>`
    res.innerHTML+=` A media da Array e ${soma/ tamanho} `
    }

}
function zerar(){ // função limpa a Array e a Div com a resposta
     array=[]
     res.innerHTML=''
     

     

}