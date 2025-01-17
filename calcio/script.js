//Snack2

// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// array con objects
const squad = [
    {nome: 'Frascati', puntifatti: 0, fallisubiti: 0},
    {nome: 'Capoterra', puntifatti: 0, fallisubiti: 0},
    {nome: 'Cagliari', puntifatti: 0, fallisubiti: 0},
    {nome: 'Rocca Priora', puntifatti: 0, fallisubiti: 0},
    {nome: 'Buero', puntifatti: 0, fallisubiti: 0},
    {nome: 'Cocciano', puntifatti: 0, fallisubiti: 0},
    {nome: 'Monteporzio', puntifatti: 0, fallisubiti: 0},
    {nome: 'Parioli', puntifatti: 0, fallisubiti: 0},
    {nome: 'Roma', puntifatti: 0, fallisubiti: 0},
    {nome: 'Frosinone', puntifatti: 0, fallisubiti: 0},
];


// funzione per i numeri casuali

function randomNumber(min,max){

    return (Math.floor(Math.random() * (max - min + 1)) + min);

}

// Aggiungiamo numeri casuali per i puntifatti falli subiti

for (let i = 0; i < squad.length; i++){

    squad[i].puntifatti = randomNumber(1,50);

    squad[i].fallisubiti = randomNumber(1,50);
}


// array vuota

let arrayvuoto = [];

// ciclo l'array vuoto

for (let i = 0; i < squad.length; i++) {

    //Metto nell'array i nomi e i falli subiti

    arrayvuoto.push({ nome: squad[i].nome, fallisubiti: squad[i].fallisubiti  })
}

// stampo in console

console.table(arrayvuoto);