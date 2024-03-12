console.log('paliedispari')
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire 
    se la parola inserita è palindroma:
    la funzione deve ritornare true 
    se la parola è palindroma
    deve ritornare false se la parola non è palindroma
alla fine stampate in console un messaggio 
per dire all’utente il risultato del controllo

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//Palindroma

//devo chiedere all'utente di inserire una parola tramite prompt

const userWord = prompt('inserisci una parola palindroma');
console.log(userWord)
let wordReverseIndex
let reverseWord = ('')
////la parola palindroma si può leggere in entrambi i versi dà sempre la stessa parola
////creo un ciclo che legge la parola al contrario
////quindi l'indice partirà dal massimo e tornerà indietro
for (let i = userWord.length - 1; i >= 0; i--) {
    wordReverseIndex = (userWord[i]);
    console.log(wordReverseIndex)// mi restituisce le lettere singolarmente al contrario

    //devo unire tutte queste lettere in una stringa
    // salvo la parola al contrario in una variabile
    reverseWord = reverseWord + wordReverseIndex;
}
console.log(reverseWord)


//creo una funzione che deve capire se la funzione è palidroma o no
function isUserWordPalindroma(userWord) {
    if (userWord === reverseWord)//// se le due parole sono uguali quindi palindroma
        //la funzione deve ritornare il valore true
        return true
}
const userResult = isUserWordPalindroma(userWord)
if (userResult === true) {
    alert('parola palindroma')
} else {
    alert('parola non palindroma')
}


//la funzione deve ritornare il valore true
//altrimenti ritorna il valore false
//alla fine devo stampare in console un messaggio che dice all'utente il risultato del controllo