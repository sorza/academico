<?php

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

$contasCorrentes ['120.125.987-10'] = [ 
    'titular' => 'Alexandre', 'saldo' => 3000
];


foreach ($contasCorrentes as $cpf => $conta) {
    echo $cpf ."<br>";
}
