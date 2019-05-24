
var nomeT1 = document.querySelector(".nomet1");
var golsT1 = document.querySelector(".golst1");
var nomeT2 = document.querySelector(".nomet2");
var golsT2 = document.querySelector(".golst2");
var decisao = document.querySelector(".resultado");

golsT1.addEventListener("input", function(e){
    if (golsT1.value  && golsT2.value) {
        if ((nomeT1.value  && nomeT2.value) != "") {
            if (parseInt(golsT1.value) > parseInt(golsT2.value)) {
            decisao.innerHTML = nomeT1.value+" é o vencedor";
            }
            else if (parseInt(golsT1.value) < parseInt(golsT2.value)){
                decisao.innerHTML = nomeT2.value+" é o vencedor";
            }
            else{
                decisao.innerHTML = "O jogo entre "+nomeT1.value+" e "+nomeT2.value+" empatou";
            }
        }
    } 
});
golsT2.addEventListener("input", function(e){
    if (golsT1.value  && golsT2.value) {
        if ((nomeT1.value  && nomeT2.value) != "") {
            if (parseInt(golsT1.value) > parseInt(golsT2.value)) {
            decisao.innerHTML = nomeT1.value+" é o vencedor";
            }
            else if (parseInt(golsT1.value) < parseInt(golsT2.value)){
                decisao.innerHTML = nomeT2.value+" é o vencedor";
            }
            else{
                decisao.innerHTML = "O jogo entre "+nomeT1.value+" e "+nomeT2.value+" empatou";
            }
        }
    } 
});


let ano = document.querySelector('.desenvolvido');
let date = new Date();
ano.innerHTML = "Desenvolvido em "+/*date.getDate()+"/"+date.getDay()+"/"+*/date.getFullYear();

