<?php

//Chaves só aceitam valores inteiros e strings, os demais tipos de dados serão convertidos para int
$array = [
    1 => 'a'
];

foreach ($array as $item) {
    echo $item . '<br>';
}