/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
String: sequenza di caratteri che non hanno una specifica per esempio (casa - nome - etc.)
number: una cifra (numero 1 - 2 - 3 etc.)
boolean: True or false, ovvero: è vero o falso?
null: non c'è nessun valore ed è intenzionale, ho lasciato io, volutamente, una variabile che non ha niente
undefined: non ho ancora definito il valore (lo farò in seguito)
data: la data, in qualsiasi modalità
array: può contenere sia numeri, sia stringhe sia altri array
oggetto: sia stringa sia valore (nome + età ad esempio)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName="Michele"
console.log(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let globale1 = 12;
let globale2 = 20;
function somma() {
return globale1+globale2;
}
Document.getElementById('sommaGlobale').innerHTML=somma ()


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

//Quindi

let globale1 = 12;
let globale2 = 20;

let x = 12; //variabile

function somma() {
  return globale1 + globale2;
}

document.getElementById('sommaGlobale').innerHTML = somma();

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const myName = "Michele"
myName = "Sifanno"

console.log(myName) <- errore


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = 12;
let globale1 = x;
let globale2 = 4;

function sottrazione() {
  return globale2 - globale1;
}

document.getElementById('sottrazioneGlobale').innerHTML = sottrazione();


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

let sonoDiversi = name1 !== name2;

console.log("name1 diverso da name2:", sonoDiversi);

// EXTRA
let lowerCaseName1 = name1.toLowerCase();
let lowerCaseName2 = name2.toLowerCase();

let ugualiConLowerCase = lowerCaseName1 === lowerCaseName2;

console.log("in lowercase name1 uguale name2:", ugualiConLowerCase);
