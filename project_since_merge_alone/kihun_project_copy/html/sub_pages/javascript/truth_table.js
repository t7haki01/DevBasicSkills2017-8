

function truth_table(elem) 
{
    remove_table();
    var two_number_value1 = [0, 0, 1, 1] ;
    var two_number_value2 = [0, 1, 0, 1] ;




    var three_number_value1 = [0, 0, 0, 1, 0, 1, 1, 1] ;
    var three_number_value2 = [0, 0, 1, 0, 1, 0, 1, 1] ;
    var three_number_value3 = [0, 1, 0, 0, 1, 1, 0, 1] ;
                            
    var table = document.getElementById("truth_table") ;

    var title_row = table.insertRow(0) ;
    var title_cell_1 = title_row.insertCell(0) ;
    var title_cell_2 = title_row.insertCell(1) ;
    var title_cell_3 = title_row.insertCell(2) ;
    var title_cell_4 = title_row.insertCell(3) ;


    if(elem.id == "pq_and")
    {
        title_cell_1.innerHTML = "P" ;
        title_cell_2.innerHTML = "Q" ;
        title_cell_3.innerHTML = "P &and; Q" ;

        for(i=0; i<4; i++)
        {
        var row = table.insertRow(1) ;
        var cell1 = row.insertCell(0) ;
        var cell2 = row.insertCell(1) ;
        var cell3 = row.insertCell(2) ;
        
        cell1.innerHTML = two_number_value1[i];
        cell2.innerHTML = two_number_value2[i];
        cell3.innerHTML = two_number_value1[i] && two_number_value2[i] ;
        }
    }
    
    if(elem.id == "pq_or")
    {
        title_cell_1.innerHTML = "P" ;
        title_cell_2.innerHTML = "Q" ;
        title_cell_3.innerHTML = "P &or; Q" ;

        for(i=0; i<4; i++)
        {
        var row = table.insertRow(1) ;
        var cell1 = row.insertCell(0) ;
        var cell2 = row.insertCell(1) ;
        var cell3 = row.insertCell(2) ;
        
        cell1.innerHTML = two_number_value1[i];
        cell2.innerHTML = two_number_value2[i];
        cell3.innerHTML = two_number_value1[i] || two_number_value2[i] ;
        }
    }
    
    if(elem.id == "pqr_and")
    {
        title_cell_1.innerHTML = "P" ;
        title_cell_2.innerHTML = "Q" ;
        title_cell_3.innerHTML = "R" ;
        title_cell_4.innerHTML = "P &and; Q &and; R" ;

        for(i=0; i<8; i++)
        {
        var row = table.insertRow(1) ;
        var cell1 = row.insertCell(0) ;
        var cell2 = row.insertCell(1) ;
        var cell3 = row.insertCell(2) ;
        var cell4 = row.insertCell(3) ;
        
        cell1.innerHTML = three_number_value1[i];
        cell2.innerHTML = three_number_value2[i];
        cell3.innerHTML = three_number_value3[i];
        cell4.innerHTML = three_number_value1[i] && three_number_value2[i] && three_number_value3[i] ;
        }
    }

    if(elem.id == "pqr_or")
    {
        title_cell_1.innerHTML = "P" ;
        title_cell_2.innerHTML = "Q" ;
        title_cell_3.innerHTML = "R" ;
        title_cell_4.innerHTML = "P &or; Q &or; R" ;

        for(i=0; i<8; i++)
        {
        var row = table.insertRow(1) ;
        var cell1 = row.insertCell(0) ;
        var cell2 = row.insertCell(1) ;
        var cell3 = row.insertCell(2) ;
        var cell4 = row.insertCell(3) ;
        
        cell1.innerHTML = three_number_value1[i];
        cell2.innerHTML = three_number_value2[i];
        cell3.innerHTML = three_number_value3[i];
        cell4.innerHTML = three_number_value1[i] || three_number_value2[i] || three_number_value3[i] ;
        }
    }

    if(elem.id == "pqr_and_or")
    {
        title_cell_1.innerHTML = "P" ;
        title_cell_2.innerHTML = "Q" ;
        title_cell_3.innerHTML = "R" ;
        title_cell_4.innerHTML = "P &and; Q &or; R" ;

        for(i=0; i<8; i++)
        {
        var row = table.insertRow(1) ;
        var cell1 = row.insertCell(0) ;
        var cell2 = row.insertCell(1) ;
        var cell3 = row.insertCell(2) ;
        var cell4 = row.insertCell(3) ;
        
        cell1.innerHTML = three_number_value1[i];
        cell2.innerHTML = three_number_value2[i];
        cell3.innerHTML = three_number_value3[i];
        cell4.innerHTML = three_number_value1[i] && three_number_value2[i] || three_number_value3[i] ;
        }
    }
}

function truth_table_tf(elem)
{
    remove_table() ;
    var two_tf_value1 = [false, false, true, true] ;
                        
    var two_tf_value2 = [false, true, false, true] ;
                        
    var three_tf_value1 = [false, false, false, true, false, true, true, true] ;
                            
    var three_tf_value2 = [false, false, true, false, true, false, true, true] ;
                            
    var three_tf_value3 = [false, true, false, false, true, true, false, true] ;
                            
    
    var table = document.getElementById("truth_table") ;
    
        var title_row = table.insertRow(0) ;
        var title_cell_1 = title_row.insertCell(0) ;
        var title_cell_2 = title_row.insertCell(1) ;
        var title_cell_3 = title_row.insertCell(2) ;
        var title_cell_4 = title_row.insertCell(3) ;
    
    
        if(elem.id == "qp_and")
        {
            title_cell_1.innerHTML = "Q" ;
            title_cell_2.innerHTML = "P" ;
            title_cell_3.innerHTML = "Q &and; P" ;
    
            for(i=0; i<4; i++)
            {
            var row = table.insertRow(1) ;
            var cell1 = row.insertCell(0) ;
            var cell2 = row.insertCell(1) ;
            var cell3 = row.insertCell(2) ;
            
            cell1.innerHTML = two_tf_value1[i];
            cell2.innerHTML = two_tf_value2[i];
            cell3.innerHTML = two_tf_value1[i] && two_tf_value2[i] ;
            }
        }
        
        if(elem.id == "qp_or")
        {
            title_cell_1.innerHTML = "Q" ;
            title_cell_2.innerHTML = "P" ;
            title_cell_3.innerHTML = "Q &or; P" ;
    
            for(i=0; i<4; i++)
            {
            var row = table.insertRow(1) ;
            var cell1 = row.insertCell(0) ;
            var cell2 = row.insertCell(1) ;
            var cell3 = row.insertCell(2) ;
            
            cell1.innerHTML = two_tf_value1[i];
            cell2.innerHTML = two_tf_value2[i];
            cell3.innerHTML = two_tf_value1[i] || two_tf_value2[i] ;
            }
        }
        
        if(elem.id == "rqp_and")
        {
            title_cell_1.innerHTML = "R" ;
            title_cell_2.innerHTML = "Q" ;
            title_cell_3.innerHTML = "P" ;
            title_cell_4.innerHTML = "R &and; Q &and; P" ;
    
            for(i=0; i<8; i++)
            {
            var row = table.insertRow(1) ;
            var cell1 = row.insertCell(0) ;
            var cell2 = row.insertCell(1) ;
            var cell3 = row.insertCell(2) ;
            var cell4 = row.insertCell(3) ;
            
            cell1.innerHTML = three_tf_value1[i];
            cell2.innerHTML = three_tf_value2[i];
            cell3.innerHTML = three_tf_value3[i];
            cell4.innerHTML = three_tf_value1[i] && three_tf_value2[i] && three_tf_value3[i] ;
            }
        }
    
        if(elem.id == "rqp_or")
        {
            title_cell_1.innerHTML = "R" ;
            title_cell_2.innerHTML = "Q" ;
            title_cell_3.innerHTML = "P" ;
            title_cell_4.innerHTML = "R &or; Q &or; P" ;
    
            for(i=0; i<8; i++)
            {
            var row = table.insertRow(1) ;
            var cell1 = row.insertCell(0) ;
            var cell2 = row.insertCell(1) ;
            var cell3 = row.insertCell(2) ;
            var cell4 = row.insertCell(3) ;
            
            cell1.innerHTML = three_tf_value1[i];
            cell2.innerHTML = three_tf_value2[i];
            cell3.innerHTML = three_tf_value3[i];
            cell4.innerHTML = three_tf_value1[i] || three_tf_value2[i] || three_tf_value3[i] ;
            }
        }
    
        if(elem.id == "pqr_or_and")
        {
            title_cell_1.innerHTML = "P" ;
            title_cell_2.innerHTML = "Q" ;
            title_cell_3.innerHTML = "R" ;
            title_cell_4.innerHTML = "P &or; Q &and; R" ;
    
            for(i=0; i<8; i++)
            {
            var row = table.insertRow(1) ;
            var cell1 = row.insertCell(0) ;
            var cell2 = row.insertCell(1) ;
            var cell3 = row.insertCell(2) ;
            var cell4 = row.insertCell(3) ;
            
            cell1.innerHTML = three_tf_value1[i];
            cell2.innerHTML = three_tf_value2[i];
            cell3.innerHTML = three_tf_value3[i];
            cell4.innerHTML = three_tf_value1[i] && three_tf_value2[i] || three_tf_value3[i] ;
            }
        }
}

function remove_table()
{
    for(i=0; i<21; i++)
    {
    document.getElementById("truth_table").deleteRow(-1) ;
    }
}
