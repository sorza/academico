function tocaSom(idElementoAudio)
{
    const elemento =  document.querySelector(idElementoAudio);

    if(elemento && elemento.localName === 'audio')
    {
        elemento.play();
    }
    else
    {
        alert('Elemento ou seletor não encontrado');       
    }
}

// Recuperar lista de elementos que possuem a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++)
{
    //recuperar a tecla na posição do contador
    const tecla = listaDeTeclas[contador]

    //adicionar a classe[1] da tecla ao instrumento correspondente 
    const instrumento = tecla.classList[1];

    //concatena string 
    const idAudio = `#som_${instrumento}`;

    // para o evento click da tecla em questão
    tecla.onclick = function()
    {
        //executa a função tocaSom, passando por parametro o Id do elemento
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento)
    {
        //verificar o code da tecla
        if(evento.code === 'Space' || evento.code === 'Enter')
        {
            //atribuir a classe ao obetjo
            tecla.classList.add('ativa');
        }        
    };

    tecla.onkeyup = function()
    {
        // revmover classe do objeto
        tecla.classList.remove('ativa');
    };
}
