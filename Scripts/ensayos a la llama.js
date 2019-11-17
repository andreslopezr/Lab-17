function changeMechero()
{
    var mechero = document.getElementById("mechero");
    if (mechero.classList.value == "mechero_estante")
    {
        mechero.classList.value = "mechero_table";
        mechero.src = "../Resources/Instruments/mechero/mechero on.png";
    }

    else if (mechero.classList.value == "mechero_table")
    {
        mechero.classList.value = "mechero_estante";
        mechero.src = "../Resources/Instruments/mechero/mechero off.png";
    }
}


function changeElement(element)
{
    var Element = document.getElementById(element);

    if (Element.classList.value == element+'_estante')
    {
        Element.classList.value = element+'_table';
        if (element == 'cuchara')
            Element.setAttribute('draggable', true);
    }
        
    else if (Element.classList.value == element+'_table')
    {
        Element.classList.value = element+'_estante';
        Element.setAttribute('draggable', false);
        if (element == 'cuchara')
            Element.src = "../Resources/Instruments/cuchara/cuchara empty.png";
    }
}

function drag(e, id)
{
    var element = document.getElementById(id);
}

function drop(e, id)
{
    var cuchara = document.getElementById("cuchara");
    cuchara.src = "../Resources/Instruments/cuchara/cuchara " + id + ".png";
}

function dropCuchara(e)
{
    var cuchara = document.getElementById("cuchara");
    var mechero = document.getElementById("mechero");
    var name = "";
    var info = "";
    for (i=75; i<cuchara.src.length; i++)
        name += cuchara.src[i];
    if (name != 'empty.png')
        mechero.src = "../Resources/Instruments/mechero/mechero " + name;
    
    if (name=='cloruro de sodio.png')
        info = "Se puede observar un tono rojiso en la llama";
    else if(name == 'sodio.png')
        info = "Se puede notar un amarillo intenso en la llama";
    else if(name == 'calcio.png')
        info = "se puede observar un rojo escarlata en la llama";
    else if(name == 'potasio.png')
        info = "se puede notar un tono lila en la llama";
    else if(name == 'estroncio.png')
        info = "se puede notar un tono rojo escarlata en la llama";
    else if(name == 'bario.png')
        info = "se puede notar un color verde en la llama";
    else if(name == 'hierro.png')
        info = "se puede observar un amarillo brilloso en la llama";
    else if(name == 'cobre.png')
        info = "se puede notar una llama azul";
    else if(name == 'empty.png')
        info = "";
    
    
        document.getElementById("info").innerHTML = '';
    typeWriter(0, info);

}

function typeWriter(i, message) 
{
    if (i < message.length) 
    {
        document.getElementById("info").innerHTML += message[i];
        i++;
        setTimeout(function()
        {
            typeWriter(i, message)
        }, 50);
    }
  }

