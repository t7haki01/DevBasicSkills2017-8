function hide()
{
    document.getElementById("side_menu").style.visibility = "hidden" ;
    document.getElementById("show_button").style.visibility = "visible" ;
    document.getElementById("side_menu").style.display = "none" ;
    document.getElementById("show_button").style.display = "block" ;
}

function show()
{
    document.getElementById("side_menu").style.visibility = "visible" ;
    document.getElementById("show_button").style.visibility = "hidden" ;
    document.getElementById("side_menu").style.display = "block" ;
    document.getElementById("show_button").style.display = "none" ;
}

function show_youtube() 
{

    if(document.getElementById("side_menu").style.visibility == "visible" || document.getElementById("side_menu").style.visibility == "")
    {
    document.getElementById("side_menu").style.visibility = "hidden" ;    
    document.getElementById("side_menu").style.display = "none" ;
    }
    else
    {
        document.getElementById("side_menu").style.visibility = "visible" ;    
        document.getElementById("side_menu").style.display = "block" ;
    }

}
