function calcular(){
    var inic=window.document.getElementById('ini')
    var fi=window.document.querySelector('input#fi')
    var int=window.document.querySelector('input#int')
    var inicio=Number(inic.value)
    var fim=Number(fi.value)
    var interacao=Number(int.value)
    var resp=window.document.getElementById('res')
    resp.innerHTML=''// deixa a div zerada de novo 
 
    if (interacao>0 || inicio !=-10){ // o interador não pode ser menor que 0
        if (inicio<fim) // caso o fim seja menor que o fim ele faz a contagem progressiva
        {
        
        for(let c=inicio;c<=fim;c+=interacao) {
            resp.innerHTML+=`${c},\u{1F449}`	// o +=ajuda a sempre somar a string da Div resp
            
        }
        }
       else{
        for( let c=inicio; c>=fim; c-=interacao){ // caos não seja faz regressiva

          resp.innerHTML+=`${c},\u{1F448}` // coloca o emoji tambem
        }

       }
        resp.innerHTML+=`\u{1F355}` // coloca o emoji final


    }
    else{
        alert('Valor invalido')
    }  
    resp.innerHTML+=' Fim do Programa'
    
}

