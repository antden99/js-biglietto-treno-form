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

    // Calcolo il prezzo del biglietto, moltiplicando la distanza da percorrere per il prezzo a km
    let price= ( distanceUpdate * 0.21);
    console.log(price);

    //Applico uno sconto se vengono rispettate determinate condizioni, altrimenti no
    let final;
    let discount;
    if (ageUpdate < 18) {
        final = price - (price * 0.20);
        final = final.toFixed(2);
        console.log(`il prezzo del biglietto con lo sconto del 20% applicato è di €${final}`);
        discount = "Sconto del: 20%";
        
    
    } else if (ageUpdate > 65) {
        final = price - (price * 0.40);
        final = final.toFixed(2);
        console.log(`il prezzo del biglietto con lo sconto del 40% applicato è di €${final}`);
        discount = "Sconto del: 40%";
        
    
    } else {
        console.log(price);
        final = price.toFixed(2);
        discount = "Nessuno sconto";
    }
    // stampo nel documento il prezzo finale del biglietto
    
    document.querySelector(".your_ticket").innerHTML= "Il tuo biglietto";
    document.querySelector(".name_ticket").innerHTML= "Nome Passeggero: " + name.value;
    document.querySelector(".discount").innerHTML= discount;
    document.querySelector(".cp_code").innerHTML="Carrozza numero :"+ " 12345";
    document.querySelector(".ticket_price").innerHTML="Prezzo biglietto:" + final;


})






