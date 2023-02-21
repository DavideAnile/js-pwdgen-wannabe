
/* 

x chiedi all'utente il suo nome
x chiedi il suo cognome
x chiedi il suo colore preferito
x scrivi in pagina la concatenazione delle variabili + numero a caso.


*/

const numeroScelto = "16";

let nomeUtente;
nomeUtente = prompt("Qual'è il tuo nome ?");
console.log (nomeUtente);

let cognomeUtente;
cognomeUtente = prompt("Qual'è il tuo cognome ?");
console.log (cognomeUtente);

let colorePreferito;
colorePreferito = prompt("Qual'è il tuo colore preferito ?")
console.log (colorePreferito)


 document.writeln("Ciao " + [nomeUtente] + [cognomeUtente] + [colorePreferito] + [numeroScelto], "!" )


/* UTILIZZO TEMPLATE LITERALS */

// document.writeln(`
//   Ciao
//   ${nomeUtente}
//   ${cognomeUtente}
//   ${colorePreferito}
//   ${numeroScelto}
//   !
// `)