    
    
    
    
    
function value_number()
{
    var value_from = document.getElementById("number_value_from") ;

    var user_input = document.getElementById("input_user") ;    

    if(value_from.value == "binary")
    {
        user_input.value = "0B" ;
    }
    else if(value_from.value == "octal")
    {
        user_input.value = "0O" ;
    }
    else if(value_from.value == "hexadecimal")
    {
        user_input.value = "0X" ;
    }
}

function convert_number()
{
        var from_number = Number(document.getElementById("input_user").value) ;
    
        var conversion_result = document.getElementById("result_number") ;
    
        var value_from = document.getElementById("number_value_from") ;
    
        var value_to = document.getElementById("number_value_to") ;

    if( value_from.value == "binary" )
    {
        
        if( value_from.value == value_to.value )
        {
            conversion_result.innerHTML = from_number.toString(2) ;
        }
        else if( value_to.value == "octal" )
        {
            conversion_result.innerHTML = from_number.toString(8) ;
        }
        else if( value_to.value == "hexadecimal" )
        {
            conversion_result.innerHTML = from_number.toString(16) ;
        }
        else
        {
            conversion_result.innerHTML = from_number.toString(10) ;
        }
    }
    
    if( value_from.value == "octal" )
    {
        
        if( value_from.value == value_to.value )
        {
            conversion_result.innerHTML = from_number.toString(8) ;
        }
        else if( value_to.value == "binary" )
        {
            conversion_result.innerHTML = from_number.toString(2) ;
        }
        else if( value_to.value == "hexadecimal" )
        {
            conversion_result.innerHTML = from_number.toString(16) ;
        }
        else
        {
            conversion_result.innerHTML = from_number.toString(10) ;
        }
    }

    if( value_from.value == "hexadecimal" )
    {   
        if( value_from.value == value_to.value )
        {
            conversion_result.innerHTML = from_number.toString(16) ;
        }
        else if( value_to.value == "binary" )
        {
            conversion_result.innerHTML = from_number.toString(2) ;
        }
        else if( value_to.value == "octal" )
        {
            conversion_result.innerHTML = from_number.toString(8) ;
        }
        else
        {
            conversion_result.innerHTML = from_number.toString(10) ;
        }
    }
    if ( value_from.value == "decimal" )
    {
        if( value_from.value == value_to.value )
        {
            conversion_result.innerHTML = from_number.toString(10) ;
        }
        else if( value_to.value == "binary" )
        {
            conversion_result.innerHTML = from_number.toString(2) ;
        }
        else if( value_to.value == "hexadecimal" )
        {
            conversion_result.innerHTML = from_number.toString(16) ;
        }
        else
        {
            conversion_result.innerHTML = from_number.toString(8) ;
        }
    }
}

function filter(event)
{
    var number_value = document.getElementById("number_value_from") ;

    var number_input_user = parseInt(event.key) ;

    var input_limit_binary = "acdefghijklmnopqrstuvwxyzåöäACDEFGHIJKLMNOPQRSTUVWXYZÅÖÄ" ;

    var input_limit_octal = "abcdefghijklmnpqrstuvwxyzåöäABCDEFGHIJKLMNPQRSTUVWXYZÅÖÄ" ;

    var input_limit_hexadecimal = "ghijklmnopqrstuvwyzåöäGHIJKLMNOPQRSTUVWYZÅÖÄ" ;

    var input_limit_decimal = "abcdefghijklmnopqrstuvwxyzåöäABCDEFGHIJKLMNOPQRSTUVWXYZÅÖÄ" ;

    if( number_value.value == "binary" )
    {
        if( number_input_user >= 2 || number_input_user < 0 )
        {
            alert("In binary number system, input is allowed only 1 or 0." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
        else if( input_limit_binary.includes(event.key) == true )
        {
            alert("In binary number system, input is allowed only 1 or 0." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
    }
    if( number_value.value == "octal" )
    {
        if( number_input_user >= 8 || number_input_user < 0 )
        {
            alert("In octal number systemm, input is allowed only number from 0 to 7." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
        else if( input_limit_octal.includes(event.key) == true )
        {
            alert("In octal number systemm, input is allowed only number from 0 to 7." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
    }
    if( number_value.value == "hexadecimal" )
    {
        if( number_input_user < 0 )
        {
            alert("In hexadecimal number systemm, input is allowed only number from 0 to f." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
        else if( input_limit_hexadecimal.includes(event.key) == true )
        {
            alert("In hexadecimal number systemm, input is allowed only number from 0 to f." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
    }
    if( number_value.value == "decimal" )
    {
        if( number_input_user < 0 )
        {
            alert("In decimal number systemm, input is allowed only number from 0 to 9." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
        else if( input_limit_decimal.includes(event.key) == true )
        {
            alert("In decimal number systemm, input is allowed only number from 0 to 9." + 
                  "\nPlease, give only valid input.") ;
            event.preventDefault();
        }
    }
}