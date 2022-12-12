/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 /* SCRIVI QUI LA TUA RISPOSTA */
let n1=10;
let n2=8;
if (n1>n2)
{
 console.log( "n1 è maggiore di n2");
}
 else (n1<n2) 
 {
console.log("n1 è minore di n2");
}





/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n3=4;
if (n3!=5) 
{console.log("not equal");} 
else (n3==5) 
{console.log("equal");}




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let  dividendo=37;
let divisore=5
if (dividendo%5=== 0)
{console.log("è divisibile" );}
else {
  console.log("non è divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let n6 = 2;
let n5 = 6;
if (n5==8 || n6==8 || n6+n5==8 || n6-n5==8)
{console.log("ONE OF THIS NUMBER it's  8");}
else  (n5!=8 || n6!=8 || n6+n5!=8 || n6-n5!=8)
{console.log("wrooooong!!");}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart=70
let newTotalShoppingCart;
let spedizione=10;
if (totalShoppingCart>50) {
  console.log(totalShoppingCart+ "", "spedizionegratuita!");
}
else {newTotalShoppingCart=totalShoppingCart+spedizione
  console.log(newTotalShoppingCart,"compresi 10 di spedizione")}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 30;
let newTotalShoppingCart2;
let spedizione2=10;
if (totalShoppingCart2>50) {
  console.log(totalShoppingCart2 *0.8, "spedizionegratuita!");
}
else {newTotalShoppingCart2=(totalShoppingCart2 *0.8)+spedizione2;
 console.log(newTotalShoppingCart2,"compresi 10 di spedizione")}




/* ESERCIZIO 7

/*Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numero1 =17;
let numero2=11;
let numero3=96;
if (numero1>numero2 & numero1>numero3) 
{
 if (numero2>numero3)
 {console.log (numero1,numero2,numero3);}
 else{
  console.log (numero1,numero3,numero2);}
 }
 if (numero2>numero1 & numero2>numero3) 
  {
if (numero1>numero3)
{
  console.log(numero2,numero1,numero3);}
  else {
    console.log(numero2,numero3,numero1);}
  }

else if (numero3>numero1 & numero3>numero2)
{ if (numero1>numero2)
  {console.log(numero3,numero1,numero2);}
  else{console.log(numero3,numero2,numero1);}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let variabile ="ciao"
if (typeof variabile === "number" )
{console.log("it is a number");}

else 
{console.log("it's not a number");}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*il numero è pari se il resto del risultato diviso 2 è 0*/ 

let numeropari =35       
if (numeropari%2===0)
{console.log("numero pari");}
else {
  console.log("numero dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } 
    let val2=val
     console.log(val2)
     if (val2 >= 5 & val2 <10)
{
  console.log("meno di 10")
} else if(val2 <5 ){
  console.log("meno di 5")
} else { console.log("uguale a 10 o maggiore")}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city="toronto";
console.log(me)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const pop=me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numerii=[];
numerii.push(1,2,3,4,5,6,7,8,9,10)
console.log(numerii)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numerii.splice(9,9, 100)
console.log(numerii)


          