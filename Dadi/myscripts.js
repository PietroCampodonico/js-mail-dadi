var dadoUtente = Math.ceil(Math.random() * 6);
console.log("Hai rollato un:" + "'" + dadoUtente + "'");
document.getElementById("tuo-numero").innerHTML = dadoUtente;


var dadoAi = Math.ceil(Math.random() * 6);
console.log("Il tuo avversario ha rollato un:" + "'" + dadoAi + "'");
document.getElementById("numero-ai").innerHTML = dadoAi;

if (dadoUtente > dadoAi) {
    console.log("Hai vinto!");
    document.getElementById("risultato").innerHTML = "Hai vinto!";
} else if (dadoUtente < dadoAi) {
    console.log("Hai perso :(");
    document.getElementById("risultato").innerHTML = "Hai perso :(";

} else if (dadoUtente === dadoAi) {
    console.log("Pareggio!");
    document.getElementById("risultato").innerHTML = "Pareggio";
}