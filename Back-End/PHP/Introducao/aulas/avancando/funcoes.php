<?php

function exibeMensagem(string $mensagem)
{
    echo "$mensagem <br>";  
}


function sacar(array $conta, float $valorASacar): array
{
    if($valorASacar > $conta['saldo'])
    {
        exibeMensagem("Saldo Insuficiente.");
    }
    else
    {
        $conta['saldo'] -= $valorASacar;
    }

    return $conta;  
}

function depositar(array $conta, float $valorADepositar): array
{    
     $conta['saldo'] += $valorASacar;

 return $conta;  
}

function titularComLetrasMaiusculas(array &$conta)
{
    $conta['titular'] = strtoupper($conta['titular']);
}

function exibeConta(array $conta)
{
    ['titular' => $titular, 'saldo' => $saldo] = $conta;
    echo "<li>Titular: $titular Saldo: $saldo</li>";
}