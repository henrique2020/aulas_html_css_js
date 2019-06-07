<?php
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header("Location: index.html");
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Restrita</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <h1>Página acessada</h1>
        <?php
            echo "Usuario: ".$_SESSION["usuario"]."<br>";
            echo "Senha: ".$_SESSION["senha"];
        ?>
        <a href="sair.php">Sair</a>
    </body>
</html>