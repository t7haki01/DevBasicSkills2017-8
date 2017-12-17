

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
    var permu_n = document.getElementById("permutation_without_n").value ;
    var permu_r = document.getElementById("permutation_without_r").value ;
    var result_without_per = factorial(permu_n) / factorial(permu_n - permu_r) ;
    document.getElementById("result_permu_without").innerHTML = result_without_per ;
}

function permu_with()
{
    var replace_n = document.getElementById("permutation_with_n").value ;
    var replace_r = document.getElementById("permutation_with_r").value ;
    var result_replace = Math.pow(replace_n, replace_r) ;
    document.getElementById("result_permu_with").innerHTML = result_replace ;
}

function selection_com()
{
    document.getElementById("combination_n").disabled = false ;
    document.getElementById("combination_r").disabled = false ;
    document.getElementById("permutation_without_n").disabled = true ;
    document.getElementById("permutation_without_r").disabled = true ;
    document.getElementById("permutation_with_n").disabled = true ;
    document.getElementById("permutation_with_r").disabled = true ;
}

function selection_per_without()
{
    document.getElementById("permutation_without_n").disabled = false ;
    document.getElementById("permutation_without_r").disabled = false ;
    document.getElementById("combination_n").disabled = true ;
    document.getElementById("combination_r").disabled = true ;
    document.getElementById("permutation_with_n").disabled = true ;
    document.getElementById("permutation_with_r").disabled = true ;
}

function selection_per_with()
{
    document.getElementById("permutation_with_n").disabled = false ;
    document.getElementById("permutation_with_r").disabled = false ;
    document.getElementById("combination_n").disabled = true ;
    document.getElementById("combination_r").disabled = true ;
    document.getElementById("permutation_without_n").disabled = true ;
    document.getElementById("permutation_without_r").disabled = true ;
}