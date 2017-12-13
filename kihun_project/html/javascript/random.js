

function random()
{
    var smallest_number = Number(document.getElementById("min_number").value) ;
    var biggest_number = Number(document.getElementById("max_number").value) ;
    var result_random = document.getElementById("result_number") ;
    var count_number = document.getElementById("how_many").value ;
    var decimal_point = document.getElementById("decimals").value ;
    var i = 0 ;

    if(decimal_point == "integer")
    {
        result_random.innerHTML = " " ;
        while(i<count_number)
        {
            i++;
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = Math.floor(fun_a) ;
            result_random.innerHTML = result_random.innerHTML + "Random number" + i + " is " + fun_b + "<br>" ;
        }
    }

    else if(decimal_point == "decimal_first")
    {
        result_random.innerHTML = " " ;
        while(i<count_number)
        {
            i++;
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = fun_a.toFixed(1) ;

            if(fun_b > biggest_number)
            {
                fun_b = biggest_number ;
                result_random.innerHTML = result_random.innerHTML + "Random number" + i + " is " + fun_b.toFixed(1) + "<br>" ;
            }
            else
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + i + " is " + fun_b + "<br>" ;
            }
            
        }
    }

    else
    {
        result_random.innerHTML = " " ;
        while(i<count_number)
        {
            i++;
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = fun_a.toFixed(2) ;

            if(fun_b > biggest_number)
            {
                fun_b = biggest_number ;
                result_random.innerHTML = result_random.innerHTML + "Random number" + i + " is " + fun_b.toFixed(2) + "<br>" ;
            }
            else
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + i + " is " + fun_b + "<br>" ;
            }
            
        }
    }

}
