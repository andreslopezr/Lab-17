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
    }
}