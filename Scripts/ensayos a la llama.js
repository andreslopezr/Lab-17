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
        Element.classList.value = element+'_table';
        
    else if (Element.classList.value == element+'_table')
        Element.classList.value = element+'_estante';
}