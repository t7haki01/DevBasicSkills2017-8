

function random()
{
    var smallest_number = Number(document.getElementById("min_number").value) ; // Even input type is number for using toFixed method
    var biggest_number = Number(document.getElementById("max_number").value) ;  // In here, Number object is used
    var result_random = document.getElementById("result_number") ;
    var count_number = document.getElementById("how_many").value ;
    var decimal_point = document.getElementById("decimals").value ;
    var j = 0 ;
    result_random.innerHTML = " " ; // start with making result value as empty string
    var result_array =[] ;
    var repeat_allow = document.getElementById("repeat_select").value ;
    var in_order = document.getElementById("sort_number").value ;

if(in_order == "yes_sort") // From here sort and repetition condition is added after beta test.  
{                          // applied user's feedback
    if( repeat_allow == "no_repeat")
    {
        if(decimal_point == "integer")
        {        
            while(result_array.length < count_number)
            {
                var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                var fun_b = Math.floor(fun_a) ;
                
                if(result_array.indexOf(fun_b) == -1)
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

        else if(decimal_point == "decimal_first")
        {
            while(result_array.length<count_number)
            {
                var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                var fun_b = fun_a.toFixed(1) ;
                
                if(fun_b <= biggest_number)
                {
                    if(result_array.indexOf(fun_b) == -1)
                        {
                            result_array.push(fun_b);
                        }
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
                
                if(fun_b <= biggest_number)
                {
                    if(result_array.indexOf(fun_b) == -1)
                    {
                        result_array.push(fun_b);
                    }
                }
            }
            
            while(j<count_number)
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array.sort(function(a, b){return a - b})[j] +"<br>" ;
                j ++ ; 
            }
        }
    }

    if(repeat_allow == "yes_repeat")
    {
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
                if(fun_b <= biggest_number)
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
                
                if(fun_b <= biggest_number)
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
}

else // here for, without sort
{
    if( repeat_allow == "no_repeat")
    {
        if(decimal_point == "integer")
        {        
            while(result_array.length < count_number)
            {
                var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                var fun_b = Math.floor(fun_a) ;
                
                if(result_array.indexOf(fun_b) == -1)
                {
                    result_array.push(fun_b);
                }
            }
            
            while(j<count_number)
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                j ++ ; 
            }
        }
    
        else if(decimal_point == "decimal_first")
        {
            while(result_array.length<count_number)
            {
                var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                var fun_b = fun_a.toFixed(1) ;
                
                if(fun_b <= biggest_number)
                {
                    if(result_array.indexOf(fun_b) == -1)
                        {
                            result_array.push(fun_b);
                        }
                }
            }
            
            while(j<count_number)
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                j ++ ; 
            }
        }
    
        else
        {
            while(result_array.length<count_number)
            {
                var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                var fun_b = fun_a.toFixed(2) ;
                
                if(fun_b <= biggest_number)
                {
                    if(result_array.indexOf(fun_b) == -1)
                    {
                        result_array.push(fun_b);
                    }
                }
            }
            
            while(j<count_number)
            {
                result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                j ++ ; 
            }
        }
    }
        if(repeat_allow == "yes_repeat")
        {
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
                    result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                    j ++ ; 
                }
            }
        
            else if(decimal_point == "decimal_first")
            {
                while(result_array.length<count_number)
                {
                    var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                    var fun_b = fun_a.toFixed(1) ;
                    
                    if(fun_b <= biggest_number)
                    {
                        result_array.push(fun_b);       
                    }
                }
                
                while(j<count_number)
                {
                    result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                    j ++ ; 
                }
            }
        
            else
            {
                while(result_array.length<count_number)
                {
                    var fun_a = Math.random() * ( biggest_number - smallest_number + 1 ) + smallest_number ;
                    var fun_b = fun_a.toFixed(2) ;
                    
                    if(fun_b <= biggest_number)
                    {
                        result_array.push(fun_b);   
                    }
                }
                
                while(j<count_number)
                {
                    result_random.innerHTML = result_random.innerHTML + "Random number" + (j+1) + " is " + result_array[j] +"<br>" ;
                    j ++ ; 
                }
            }
        }    
}


}

