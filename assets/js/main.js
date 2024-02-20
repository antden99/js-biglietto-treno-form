console.log("Funziona");

const name = document.getElementById("name");
console.log(name.value);


const age = document.getElementById("age");
console.log(age.value);

document.querySelector("button").addEventListener("click", function(){
    console.log(name.value, age.value);
})