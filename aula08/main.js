var btnMax = document.querySelector(".max");
btnMax.addEventListener("click", function(e){
    e.preventDefault();
    let elements = document.querySelectorAll("input");
    elements.value;
    maior = parseFloat(elements[0]);
    for (let index = 1; index < elements.length; index++) {
        maior = Math.max(maior,elements[index]);
    }
    console.log(maior);
});

var btnMin = document.querySelector(".min");
btnMin.addEventListener("click", function(e){
    e.preventDefault();
    let elements = document.querySelectorAll("input");
    elements.value;
    elements = parseFloat(elements);
    manor = parseFloat(elements[0]);
    for (let index = 1; index < elements.length; index++) {
        menor = Math.max(maior,elements[index]);
    }
    console.log(menor);
});