console.log('pari e dispari')
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//pari e dispari

//chiedere all'utente tramite prompt di scegliere pari o dispari
let userChoice = ('scrivi pari o dispari in base alla tua scelta');
let even
let odd

if( userChoice === 'pari'){
    even = userChoice
    console.log('pari')
}else if(userChoice === 'dispari'){
    odd = userChoice
    console.log('dispari')
}else{
    alert('parola sbagliata scrivi pari o dispari')
}

//inserisce un numero da 1 a 5
//genero un numero ramndom sempre da 1 a 5 per il computer
//sommo i due numeri
// stabiliamo se la somma die numeri è pari o dispari
//a seconda di quelloc he ha scelto all'inizio l'utente decretiamo chi ha vinto