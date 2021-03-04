// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi:
// ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’,
// 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui
// il nuovo utente si trova


var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"]
listaCognomi.sort();

var cognome = prompt("Qual è il tuo cognome?")
listaCognomi.push(cognome)
console.log(listaCognomi);

var listaCognomiSorted = listaCognomi.sort()



i = 0
while (i < listaCognomi.length) {
 console.log(listaCognomi[i]);
 i++
}


console.log(listaCognomiSorted.indexOf(cognome));
