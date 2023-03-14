function parimp(n1){
    if (n1%2==0){
        return 'Par!'
    }
    else {
        return 'Impar!'
    }
}
console.log(parimp(10))

function soma(n1=0, n2=0){
    return n1+n2
}
let som= soma(11)
console.log(som)

function fatorial(n){
    let fat=1
    for (let c=n; c > 1; c--){
    fat *=c
    }
    return fat
}
s

console.log(fatorial(5))

function fatorial1(n){
    if (n==1){
        return 1
    }
    else {
        return n*fatorial1(n-1)
    }
}
console.log(fatorial1(5))