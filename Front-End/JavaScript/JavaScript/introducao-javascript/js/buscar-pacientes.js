var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function()
{
    /* para buscar em uma API externa via http request ou local
    console.log("Buscando pacientes...");*/

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/pacientes.json");
    xhr.addEventListener("load", function()
    {
        console.log(xhr.responseText);
    });
    xhr.send();

});




