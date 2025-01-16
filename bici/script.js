// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

// array con objects bici
const bikes = [
    {nome: 'bici 1', peso: 500},
    {nome: 'bici 2', peso: 10},
    {nome: 'bici 3', peso: 30},
    {nome: 'bici 4', peso: 55},
    {nome: 'bici 5', peso: 60},
    {nome: 'bici 6', peso: 90},
    {nome: 'bici 7', peso: 200},
    {nome: 'bici 8', peso: 5},
    {nome: 'bici 9', peso: 75},
    {nome: 'bici 10', peso: 98},
    {nome: 'bici 11', peso: 32},
    {nome: 'bici 12', peso: 20},
];

console.table(bikes);

// Inizializza la prima bici come se fosse la più leggera
let light = bikes[0];

// ciclo per confrontare il peso di tutte le bici
for (let i = 0; i < bikes.length; i++) {
// se la prima bici è minore di peso delle altre
    if (bikes[i].peso <  light.peso)
// allora light è uguale alla bici più leggera
        light = bikes[i];
}

document.getElementById('message').innerHTML = ` la  più leggera è la ${light.nome} , con kg ${light.peso} `;


