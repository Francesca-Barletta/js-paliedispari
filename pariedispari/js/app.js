console.log('pari e dispari')
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//pari e dispari

//chiedere all'utente tramite prompt di scegliere pari o dispari
//let userChoice = prompt('scrivi pari o dispari in base alla tua scelta');
let numberControl
let userChoice //= prompt('scrivi pari o dispari in base alla tua scelta');

// voglio dirgli di chiedere pari o dispari finchè la parola inserita non è esatta
//
do {
    userChoice = prompt('scrivi pari o dispari in base alla tua scelta'); // dispari

} while (userChoice !== 'pari' && userChoice !== 'dispari'); // true && false => false 

//console.log(userChoice)
if (userChoice === 'pari') {
    console.log('pari')
} if (userChoice === 'dispari') {
    console.log('dispari')
}

let userNumber
do {
    //userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

    userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
} while (userNumber < 1 || userNumber > 5 || isNaN(userNumber));

console.log(userNumber)
//if (userNumber < 1 || userNumber > 5) {
//    console.log('numero errato')
//    alert('numero errato')
//}

const consoleRandomNumber = Math.floor(Math.random() * 5) + 1;
console.log(consoleRandomNumber)

function sum(userNumber, consoleRandomNumber) {
    const sumResult = userNumber + consoleRandomNumber;

    console.log('sumResult ', sumResult)

    const isResultEven = sumResult % 2;
    
    if (isResultEven === 0) {
        numberControl = ('pari')
        console.log(numberControl)
    } else {
        numberControl = ('dispari')
        console.log(numberControl)
    }
    if (numberControl === userChoice) {
        return true
    } else {
        return false
    }


}
const finalResult = sum(userNumber, consoleRandomNumber);
console.log(finalResult)
if (finalResult === true) {
    alert('hai vinto')
} else {
    alert('hai perso')
}
//inserisce un numero da 1 a 5
//genero un numero ramndom sempre da 1 a 5 per il computer
//sommo i due numeri
// stabiliamo se la somma die numeri è pari o dispari
//a seconda di quelloc he ha scelto all'inizio l'utente decretiamo chi ha vinto
