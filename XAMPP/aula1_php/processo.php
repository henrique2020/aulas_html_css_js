<?php ?> <!--Idica que está trabalhando com php -->
<!--
<h1>Aqui é HTML</h1>
-->

<?php
    if ($_POST["op"] == "add") {
        $resultado = $_POST["v1"] + $_POST["v2"];
        echo $resultado;
    }
    elseif ($_POST["op"] == "sub") {
        $resultado = $_POST["v1"] - $_POST["v2"];
        echo $resultado;
    }
    elseif ($_POST["op"] == "div") {
        $resultado = $_POST["v1"] / $_POST["v2"];
        echo $resultado;
    }
    else{
        $resultado = $_POST["v1"] * $_POST["v2"];
        echo $resultado;
    }
    echo "<h1>".$resultado."</h1>";

    /*
    include             Ignora erros
    include_once
    require             Não executa com erros
    */

    require_once "funcoes.php";
    echo operacao($_POST["v1"], $_POST["v2"], $_POST["op"]);
?>