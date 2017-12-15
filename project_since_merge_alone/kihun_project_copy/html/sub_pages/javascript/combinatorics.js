

function factorial(x)
{
    if (x === 0)
    {
        return 1 ;
    }
    return x * factorial(x-1);
}

function combi()
{
    var combi_n = document.getElementById("combination_n").value ;
    var combi_r = document.getElementById("combination_r").value ;
    var result_com = factorial(combi_n) / factorial(combi_r) / factorial(combi_n - combi_r) ;
    document.getElementById("result_combi").innerHTML = result_com ;
}

function permu_without()
{
    var permu_n = document.getElementById("permutation_n").value ;
    var permu_r = document.getElementById("permutation_r").value ;
    
    if ( document.getElementById("permutation_without").checked )
    {
        var result_without_per = factorial(permu_n) / factorial(permu_n - permu_r) ;
        document.getElementById("result_permu").innerHTML = result_without_per ;
    }
    else if ( document.getElementById("permutation_with").checked )
    {
        var result_replace = Math.pow(permu_n, permu_r) ;
        document.getElementById("result_permu").innerHTML = result_replace ;    
    }
}

function selection_com()
{
    document.getElementById("permutation_without_button").style.visibility = "visible" ;
    document.getElementById("permutation_with_button").style.visibility = "visible" ;
    document.getElementById("permutation_without_button").style.visibility = "hidden" ;
    document.getElementById("permutation_with_button").style.visibility = "hidden" ;
    document.getElementById("combination_n").disabled = false ;
    document.getElementById("combination_r").disabled = false ;
    document.getElementById("permutation_n").disabled = true ;
    document.getElementById("permutation_r").disabled = true ;
}

function selection_per()
{
    document.getElementById("permutation_n").disabled = false ;
    document.getElementById("permutation_r").disabled = false ;
    document.getElementById("combination_n").disabled = true ;
    document.getElementById("combination_r").disabled = true ;
}

function button_show()
{
    document.getElementById("permutation_n").disabled = true ;
    document.getElementById("permutation_r").disabled = true ;
    document.getElementById("combination_n").disabled = true ;
    document.getElementById("combination_r").disabled = true ;
    document.getElementById("permutation_without_button").style.visibility = "visible" ;
    document.getElementById("permutation_with_button").style.visibility = "visible" ;
}