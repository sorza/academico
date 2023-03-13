var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);    

    var erro = validaPaciente(paciente);

    if(erro.length > 0)
    {
        exibeMensagensdeErro(erro);
        return;
    }

    var ul = document.querySelector("#msgErro");
    ul.innerHTML = "";
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    
});

function obtemPacienteDoFormulario(form)
{
    var paciente = 
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montaTd(dado, classe)
{
    var td = document.createElement("td");

    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente)
{
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser nulo.")
    if(!validaPeso(paciente.peso) || paciente.peso == "") erros.push("Peso inválido.");
    if(!validaAltura(paciente.altura) || paciente.altura == "") erros.push("Altura inválida.");
    if(paciente.gordura < 0 || paciente.gordura > 100 || paciente.gordura == "") erros.push("O % de gordura é inválido");

    return erros;
}

function exibeMensagensdeErro(erro)
{
    var ul = document.querySelector("#msgErro");
    ul.innerHTML = "";

    erro.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}

