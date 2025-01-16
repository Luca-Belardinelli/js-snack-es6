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

console.table(squad);

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”