console.log("Desenvolvido por Henrique Britz Hahn.");
let aux = new Date();
console.log("De acordo com Henrique, agora são: "+aux.getHours()+":"+aux.getMinutes()+":"+aux.getSeconds());

var btnVerifica = document.querySelector(".verifica");
btnVerifica.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Desenvolvido por Henrique Britz Hahn.");
    let aux = new Date();
    console.log("De acordo com Henrique, agora são: "+aux.getHours()+":"+aux.getMinutes()+":"+aux.getSeconds());


    var namej1 = document.querySelector(".nomej1").value;
    var namej2 = document.querySelector(".nomej2").value;
    var jogada1 = document.querySelector('input[name=j1]:checked').value;
    var jogada2 = document.querySelector('input[name=j2]:checked').value;
    
    if(jogada1 == "pedra" && jogada2 == "papel"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej2;
    }
    else if(jogada1 == "papel" && jogada2 == "tesoura"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej2;
    }
    else if(jogada1 == "tesoura" && jogada2 == "pedra"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej2;
    }
    else if(jogada1 == "papel" && jogada2 == "pedra"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej1;
    }
    else if(jogada1 == "tesoura" && jogada2 == "papel"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej1;
    }
    else if(jogada1 == "pedra" && jogada2 == "tesoura"){
        document.querySelector(".resultado").innerHTML = "Vencdedor: "+namej1;
    }
    else{
        document.querySelector(".resultado").innerHTML = "Empate";
    }
});