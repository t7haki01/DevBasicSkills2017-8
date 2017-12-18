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
        if (input_from_user == "90") // after final test, found out that  cos(90) gives -0.0000
        {                            // Technically same but for better output with "if condition" added directly to give "0.0000"
            result_after.innerHTML = "0.0000" ; // 17_12. still couldn't find out why it gives -0.0000
        }
        else
        {
            result_after.innerHTML = Math.cos(degree).toFixed(4) ;
        }
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