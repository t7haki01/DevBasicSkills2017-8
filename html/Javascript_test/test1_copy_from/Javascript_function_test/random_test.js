

function random()
{
    var smallest_number = Number(document.getElementById("min_number").value) ;
    var biggest_number = Number(document.getElementById("max_number").value) ;
    var result_random = document.getElementById("result_number") ;
    var count_number = document.getElementById("how_many").value ;
    var decimal_point = document.getElementById("decimals").value ;
    var j = 0 ;
    result_random.innerHTML = " " ;
    var result_array =[] ;

    if(decimal_point == "integer")
    {        
        while(result_array.length < count_number)
        {
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = Math.floor(fun_a) ;
            result_array.push(fun_b);
        }
        while(j<count_number)
        {
        result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array.sort(function(a, b){return a - b})[j] +"<br>" ;
        j ++ ; 
        }
    }

    else if(decimal_point == "decimal_first")
    {
        while(result_array.length<count_number)
        {
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = fun_a.toFixed(1) ;
            if(fun_b > biggest_number)
            {
                fun_b = random() ;
            }
            else
            {
                result_array.push(fun_b);
            }
        }
        while(j<count_number)
        {
        result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array.sort(function(a, b){return a - b})[j] +"<br>" ;
        j ++ ; 
        }
    }

    else
    {
        while(result_array.length<count_number)
        {
            var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
            var fun_b = fun_a.toFixed(2) ;
            
            if(fun_b > biggest_number)
            {
                random();
            }
            else
            {
                result_array.push(fun_b);
            }   
        }
        
        while(j<count_number)
        {
        result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array.sort(function(a, b){return a - b})[j] +"<br>" ;
        j ++ ; 
        }
    }
}
