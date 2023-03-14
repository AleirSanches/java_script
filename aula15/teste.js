let num=[6,7,4] // cria Array
num[3]=5 // Coloca o valor na posiçã que esta entre colchetes[]
num.push(89) // coloca o calor entre parentes no final da Array
console.log(`Os elementos da Array e ${num}`)
console.log(`O tamanho do Array num e ${num.length}`) // retorna o tamanho da Array
num.sort() // Coloca a Array num em ondem crescente



for(let pos in num){ // for simplificado para Arrays
    console.log(`Posição ${pos} e igual ${num[pos]}`)
}
console.log(` O Valor 7 esta na posição ${num.indexOf(7)}`)// Retoerna a posiçaõ do valor entre parentes