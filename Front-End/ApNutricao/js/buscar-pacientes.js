var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function()
{
    /* para buscar em uma API externa via http request ou local
    console.log("Buscando pacientes...");*/

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/pacientes.json");
    xhr.addEventListener("load", function()
    {
        if(xhr.status == 200)
        {
            document.querySelector("#erro-ajax").classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else
        {
            console.log(xhr.status);
            console.log(this.responseText);
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
         
    });
    xhr.send();

});




