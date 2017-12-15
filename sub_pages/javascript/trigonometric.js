function convert()
{
    var input_from_user = Number(document.getElementById("input_box").value) ;
    var choice = document.getElementById("selection_value").value ;
    var degree = (input_from_user * Math.PI/180).toFixed(4) ;
    var result_after = document.getElementById("result") ;

    if(choice == "sin")
    {
        result_after.innerHTML = Math.sin(degree).toFixed(4) ;
    }
    else if(choice == "cos")
    {
        debugger//15_12 cos 90 gives -0
        result_after.innerHTML = Math.cos(degree).toFixed(4) ;
    }
    else
    {
        if(input_from_user == "90")
        {
            result_after.innerHTML = "Infinity" ;   
        }
        else
        {
        result_after.innerHTML = Math.tan(degree).toFixed(4) ;
        }
    }
}