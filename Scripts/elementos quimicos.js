var call;
var dragObject;
var cucharaContent;
var pipetaContent;
var precipitadoContent;


function changeElement(element)
{  
    var  Element = document.getElementById(element);
    
    if(Element.classList.value == element+'_estante')
    {
        Element.classList.value = element+'_table';
        if(element == 'cuchara' || element == 'pipeta' || element == 'conductimetro')
            Element.setAttribute('draggable', true);
    }
    else if(Element.classList.value == element+'_table')
    {
        Element.classList.value = element+'_estante';
        Element.setAttribute('draggable', false);
        if (element == 'cuchara' || element == 'precipitado' || element == 'pipeta' || element == 'conductimetro')
            Element.src = "../Resources/Instruments/" + element + "/" + element + " empty.png";
    }
    elementInfo(element);
}

function drag(e, element)
{
    dragObject = element;
}
function drop(e, object, type)
{
    var cuchara = document.getElementById("cuchara");
    var pipeta = document.getElementById("pipeta");
    var precipitado = document.getElementById("precipitado");
    var conductimetro = document.getElementById("conductimetro");
    document.getElementById("precipitacion").classList.value = "precipitacion_hide";

    if (dragObject == 'cuchara' && type == "solid")
    {
        cuchara.src = "../Resources/Instruments/cuchara/cuchara " + object +".png";
        cucharaContent = object;
    }
    if (dragObject == 'pipeta' && type == 'liquid')
    {
        pipeta.src = "../Resources/Instruments/pipeta/pipeta " + object + ".png";
        pipetaContent = object;
    }

    if (dragObject == 'cuchara' && type == "precipitado" && cucharaContent!=undefined)
    {
        precipitado.src = "../Resources/Instruments/precipitado/1 precipitado " + cucharaContent + ".png";
        precipitadoContent = cucharaContent;
    }

    if (dragObject == 'pipeta' && type == "precipitado" && pipetaContent!=undefined && precipitadoContent != undefined && precipitado.src.includes("1") )
    {
        var n;
        if (pipeta.src.includes("agua"))
            n = '2';
        if (pipeta.src.includes("cloruro%20de%20cobre"))
            n = '3';
        if (pipeta.src.includes("acido%20clorhidrico"))
            n = '4';
        precipitado.src = "../Resources/Instruments/precipitado/" + n + " precipitado " + pipetaContent + " " + precipitadoContent + ".png";
        if (precipitado.src.includes("agua") || precipitado.src.includes("cloruro%20de%20cobre") || precipitado.src.includes("acido%20clorhidrico"))
            precipitadoAnimate();
    }
    if (dragObject == 'conductimetro' && type == 'precipitado' && precipitadoContent != undefined)
        electric();
    
}


function precipitadoAnimate()
{
    var reaction = document.getElementById("precipitado").src;
    document.getElementById("info").innerHTML = "";
    var info;
    if (reaction.includes("agua"))
    {
        if(reaction.includes("magnesio"))
        {
            info = "No hubo reación alguna";
        }
        if(reaction.includes("cobre"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("calcio"))
        {
            info = "Se presento precipitación, cambio en la textura además de emisión de calor";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("zinc"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("azufre"))
        {
            info = "No hubo reacción alguna, no es soluble";
        }
        if(reaction.includes("carbon"))
        {
            info = "No hubo reacción alguna";
        }
    }   
    if (reaction.includes("cloruro%20de%20cobre"))
    {
        if(reaction.includes("magnesio"))
        {
            info = "Se presento precipitacion, cambio en la textura ademas de emision de calor y oxidación del metal";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("cobre"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("calcio"))
        {
            info = "Se presento precipitación, cambio en la textura además de emisión de calor";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("zinc"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("azufre"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("carbon"))
        {
            info = "No hubo reacción alguna";
        }
        
    }
    if (reaction.includes("acido%20clorhidrico"))
    {
        if(reaction.includes("magnesio"))
        {
            info = "Se presento precipitación, cambio en la textura además de emisión de calor";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("cobre"))
        {
            info = "se presento un cambio en la coloración";
        }
        if(reaction.includes("calcio"))
        {
            info = "Se presento precipitación, cambio en la textura además de emisión de calor";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("zinc"))
        {
            info = "se presento precipitación emisión de calor y cambio en la coloración";
            document.getElementById("precipitacion").classList.value = "precipitacion_show";
        }
        if(reaction.includes("azufre"))
        {
            info = "No hubo reacción alguna";
        }
        if(reaction.includes("carbon"))
        {
            info = "No hubo reacción alguna";
        }
    }
    writeInfo(info + ".");
}

function electric()
{
    
    var precipitado = document.getElementById("precipitado").src;
    var conductimetro = document.getElementById("conductimetro");
    document.getElementById("info").innerHTML = "";
    var info;
    if (precipitado.includes("1"))
    {
        if (precipitado.includes("magnesio") || precipitado.includes("cobre"))
        {
            
            info = "el " +  precipitadoContent + " presenta conductividad electrica";
            conductimetro.src = "../Resources/Instruments/conductimetro/conductimetro on.png";
        }
        else
        {
            info = "el " +  precipitadoContent + " no presenta conductividad electrica";
            conductimetro.src = "../Resources/Instruments/conductimetro/conductimetro empty.png";
        }
        writeInfo(info);
    }
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


function writeInfo(message)
{
    clearCall();
    document.getElementById("info").innerHTML = "";
    typeWriter(0, message)
}


function elementInfo(element)
{
    var info;
    if (element == 'cuchara')
        info = "Este instrumento es una cuchara funciona para tomar muestras de los reactivos";
    else if (element == "precipitado")
        info = "Este instrumento es un vaso de precipitados funciona como recipiente de reactivos";
    else if (element == "pipeta")
        info = "Este instrumento es una pipeta funciona para tomar y medir sustancias liquidas";
    else if (element == "conductimetro")
        info = "Este instrumento es un conductimetro funciona para verificar la conductividad de algun reactivo";
    else if (element == "calcio")
        info = "Es un metal blando, grisáceo, y es el quinto más abundante en masa de la corteza terrestre";
    else if (element == "zinc")
        info = "Es un metal, a veces clasificado como metal de transición aunque estrictamente no lo sea, ya que tanto el metal como su ion positivo presentan el conjunto orbital completo";
    else if (element == "magnesio")
        info = "Es un metal liviano, medianamente fuerte, color blanco plateado. En contacto con el aire se vuelve menos lustroso, aunque a diferencia de otros metales alcalinos no necesita ser almacenado en ambientes libres de oxígeno";
    else if (element == "carbon")
        info = "Es una roca sedimentaria organógena de color negro, muy rica en carbono y con cantidades variables de otros elementos";
    else if (element == "azufre")
        info = "Es un no metal tiene un color amarillento fuerte, amarronado o anaranjado y arde con llama de color azul, desprendiendo dióxido de azufre. Es insoluble en agua pero se disuelve en disulfuro de carbono y benceno";
    else if (element == "cobre")
        info = "Es un metal de transición de color rojizo y brillo metálico que, junto con la plata y el oro, forma parte de la llamada familia del cobre, se caracteriza por ser uno de los mejores conductores de electricidad";
    else if (element == "agua")
        info = "Es una sustancia cuya molécula está compuesta por dos átomos de hidrógeno y uno de oxígeno (H2O)";
    else if (element == "cloruro_de_cobre")
        info = "Es un compuesto químico con fórmula CuCl2. Un sólido de color verde amarillento que absorbe lentamente la humedad";
    else if (element == "acido_clorhidrico")
        info = "Es una disolución acuosa del gas cloruro de hidrógeno (HCl). Es muy corrosivo y ácido. Se emplea comúnmente como reactivo químico y se trata de un ácido fuerte";
   
    
        writeInfo(info + '.');
}
