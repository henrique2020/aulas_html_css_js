//class = .xxxx
//id = #xxxx

var btnSoma = document.querySelector(".soma");
btnSoma.addEventListener("click", function(e){
      e.preventDefault();
      let v1 = document.querySelector(".v_1");
      let v2 = document.querySelector(".v_2");
      let soma = parseInt(v1.value) + parseInt(v2.value);
      //alert(soma);
      document.querySelector(".resultado").innerHTML = "O resultado é: " + soma;
});    

var btnSubtrai = document.querySelector(".subtrai");
btnSubtrai.addEventListener("click", function(e){
      e.preventDefault();
      let v1 = document.querySelector(".v_1");
      let v2 = document.querySelector(".v_2");
      let subtracao = parseInt(v1.value) - parseInt(v2.value);
      /*alert(subtracao);*/
      document.querySelector(".resultado").innerHTML = "O resultado é: " + subtracao;
});

var btnDivide = document.querySelector(".divide");
btnDivide.addEventListener("click", function(e){
      e.preventDefault();
      let v1 = document.querySelector(".v_1");
      let v2 = document.querySelector(".v_2");
      let divisao = parseFloat(v1.value) / parseFloat(v2.value);
      //alert(divisao);
      document.querySelector(".resultado").innerHTML = "O resultado é: " + divisao.toFixed(4);
});

var btnMultiplica = document.querySelector(".multiplica");
btnMultiplica.addEventListener("click", function(e){
      e.preventDefault();
      let v1 = document.querySelector(".v_1");
      let v2 = document.querySelector(".v_2");
      let multiplicacao = parseInt(v1.value) * parseInt(v2.value);   
      /*alert(multiplicacao);*/
      document.querySelector(".resultado").innerHTML = "O resultado é: " + multiplicacao;
});
