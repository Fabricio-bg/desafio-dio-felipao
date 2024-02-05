let nomeHeroi = "Marquito.pvp"
let xpHeroi = 1200

let nivelHeroi 

if (xpHeroi < 1000){
    nivelHeroi = "ferro"
} 
else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelHeroi = "broze"
}
else if ( xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelHeroi = "prata"
}
else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelHeroi = "ouro"
}
else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelHeroi = "platina"
}
else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelHeroi = "ascendente"
}
else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelHeroi = "imortal"
}
else if (xpHeroi >= 10001){
    nivelHeroi = "radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)