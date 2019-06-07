<?php
//print_r($_FILES['imagem']);
if (! file_exists($_POST['nome'])) {
    mkdir($_POST['nome']);
}
$partes = explode(".", $_FILES['imagem']['name']);  //explode, nesse caso, separa a string por '.'
$ext = end($partes);

//$caminho = $_POST['nome']."/".$_FILES['imagem']['name']   Deixa com o nome original e completo
$caminho = $_POST['nome']."/"."arquivo_do_".$_POST['nome'].".".$ext;  //Deixa com o nome colocado no txt
move_uploaded_file($_FILES['imagem']['tmp_name'], $caminho);