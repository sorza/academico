<?php

require_once 'funcoes.php';

$contasCorrentes = [
    '123.245.678-09' => [
        'titular' => 'Vinicius',
        'saldo' => 1000
    ],

    '101.112.134-10' => [
        'titular' => 'Maria',
        'saldo' => 10000
    ],

    '321.957.841-12' => [
        'titular' => 'Roberto',
        'saldo' => 300
    ]
];


//adicionar item a lista
$contasCorrentes['450.578.948-97'] = ['titular' => 'Alexandre', 'saldo' => 5000];

//remover item da lista
unset($contasCorrentes['321.957.841-12']);

/*
echo "<ul>";

foreach($contasCorrentes as $cpf => $conta)
{
    exibeConta($conta);
}

echo "</ul>";*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Contas Correntes </h1>

    <dl>
        <?php foreach($contasCorrentes as $cpf => $conta) { ?>
            <dt>
                 <h3><?=$conta['titular'];?> - <?= $cpf; ?></h3>
            </dt>
            <dd>
                Saldo: <?= $conta['saldo']; ?>
            </dd>
        <?php } ?>
    </dl>
</body>
</html>




