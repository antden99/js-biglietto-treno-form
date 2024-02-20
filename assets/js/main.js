// Prendo dal documento l'id name e lo stampo in console dopo averlo salvato in variabile name
const name = document.getElementById("name");
console.log(name);

// Prendo dal documento l'id age e lo stampo in console dopo averlo salvato in variabile age
const age = document.getElementById("age");
console.log(age);

// Prendo dal documento l'id distance e lo stampo in console dopo averlo salvato in variabile distance
const distance = document.getElementById("distance");
console.log(distance);


// Creo una funzione che al click sul button, esegua un if e stampi in console il risultato
document.querySelector("button").addEventListener("click", function () {
    console.log(name.value, age.value, distance.value);

    // Converti il valore dell'età e della distanza in un numero intero e lo faccio all'interno della funzione
    // altrimenti farebbe sempre lo stesso caricamento

    let ageUpdate = Number(age.value);
    let distanceUpdate = Number(distance.value);

    
})




