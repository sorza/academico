<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivinhando a senha</title>
</head>
<body>
<?php

$arquivo = "senha_correta.txt";

$sr = fopen($arquivo, "r");
$senhacorreta = fgets($sr);

if($_POST['senha'] == $senhacorreta)
{
    echo "Parabéns, você sabe a senha!";
}
else
{
    echo "Você errou!";

    $arquivo = "senhas_enviadas.txt";

    if(!file_exists($arquivo))
    {
        $handle = fopen($arquivo, "w");
    } 
    else 
    {
        $handle = fopen($arquivo, "a");
    }

    fwrite($handle, $_POST['senha'] ."\n");
    fflush($handle);
    fclose($handle);

}

?>
</body>
</html>