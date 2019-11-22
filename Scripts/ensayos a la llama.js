var call;

function info(element)
{
    var info = "";
    if (element == "cuchara")
        info = "Este instrumento es una cuchara funciona para tomar muestras de los reactivos";
    if (element == "mechero")
        info = "Este instrumento es un mechero, utilizado para proporcionar calor";
    if (element == "cloruro_de_litio")
        info = "Es un compuesto inorgánico. Presenta una gran avidez por el agua, es decir posee una elevada higroscopicidad, por lo que es un muy buen secante. ";
    if (element == "sodio")
        info = "Es un metal alcalino blando, untuoso, de color plateado, muy abundante en la naturaleza, encontrándose en la sal marina y el mineral halita. Es muy reactivo, arde con llama amarilla, se oxida en presencia de oxígeno y reacciona violentamente con el agua.";
    if (element == "calcio")
        info = "Es un metal blando, grisáceo, y es el quinto más abundante en masa de la corteza terrestre";
    if (element == "potasio")
        info = "Es un metal alcalino de color blanco-plateado, que abunda en la naturaleza en los elementos relacionados con el agua salada y otros minerales.";
    if (element == "estroncio")
        info = "Es un metal blando de color plateado brillante, algo maleable, también alcalino térreo, que rápidamente se oxida en presencia de aire adquiriendo un tono amarillento por la formación de óxido, por lo que debe conservarse sumergido en parafina";
    if (element == "bario")
        info = "Es un elemento metálico que es químicamente similar al calcio, pero más reactivo. Este metal se oxida con mucha facilidad cuando se expone al aire y es altamente reactivo con el agua o el alcohol";
    if (element == "hierro")
        info ="Es un  metal de transición es el cuarto elemento más abundante en la corteza terrestre, representando un 5% y, entre los metales, solo el aluminio es más abundante, y es el primero más abundante en masa planetaria"
    if (element == "cobre")
        info = "Es un metal de transición de color rojizo y brillo metálico que, junto con la plata y el oro, forma parte de la llamada familia del cobre, se caracteriza por ser uno de los mejores conductores de electricidad";

    document.getElementById("info").innerHTML = '';
    clearCall();
    typeWriter(0, info);
}

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
    info("mechero");
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
    info(element);
}

function drag(e, id)
{
    var element = document.getElementById(id);
}

function drop(e, id)
{
    e.preventDefault();
    var cuchara = document.getElementById("cuchara");
    cuchara.src = "../Resources/Instruments/cuchara/cuchara " + id + ".png";
}

function dropCuchara(e)
{
    e.preventDefault();
    var cuchara = document.getElementById("cuchara");
    var mechero = document.getElementById("mechero");
    var name = "";
    var info = "";
    if(cuchara.src.includes("cloruro"))
    {
        name = "cloruro de litio.png";
        info = "Se puede observar un tono rojiso en la llama";
    }
    else if(cuchara.src.includes("sodio"))
    {
        name = "sodio.png";
        info = "Se puede notar un amarillo intenso en la llama";
    }
    else if(cuchara.src.includes("calcio"))
    {
        name = "calcio.png";
        info = "se puede observar un rojo escarlata en la llama";
    }
    else if(cuchara.src.includes("potasio"))
    {
        name = "potasio.png";
        info = "se puede notar un tono lila en la llama";
    }
    else if(cuchara.src.includes("estroncio"))
    {
        name = "estroncio.png";
        info = "se puede notar un tono rojo escarlata en la llama";
    }
    else if(cuchara.src.includes("bario"))
    {
        name = "bario.png";
        info = "se puede notar un color verde en la llama";
    }
    else if(cuchara.src.includes("hierro"))
    {
        name = "hierro.png";
        info = "se puede observar un amarillo brilloso en la llama";
    }
    else if(cuchara.src.includes("cobre"))
    {
        name = "cobre.png";
        info = "se puede notar una llama azul";
    }
    else if(cuchara.src.includes("empty"))
    {
        name = "on.png";
        info = "no hay efecto";
    }
    mechero.src = "../Resources/Instruments/mechero/mechero " + name;
    document.getElementById("info").innerHTML = '';
    clearCall();
    typeWriter(0, info);

}

function typeWriter(i, message) 
{
    if (i < message.length) 
    {
        document.getElementById("info").innerHTML += message[i];
        i++;
        call = setTimeout(function()
        {
            typeWriter(i, message)
        }, 50);
    }
  }

function clearCall()
{
    clearTimeout(call);
}