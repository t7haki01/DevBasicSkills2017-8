

        function hide_table()
        {
            document.getElementById("output_table").style.visibility = "hidden" ;
            document.getElementById("scroll_table").style.visibility = "hidden" ;
        }
        
        function show_table()
        {
            document.getElementById("output_table").style.visibility = "visible" ;
            document.getElementById("scroll_table").style.visibility = "visible" ;
        }
 
        function clear_table()
        {
            var i = 1;
            var j = 0;
            
            while (i<52)
            {
                var cell_row_elements = document.getElementById("output_table").rows[i].cells;
                    
                while (j<4)
                {
                    cell_row_elements[j].innerHTML = "0" ;
                    j++; // here is the index for the data cell
                }

                i++; // here is the index for the rows
                j = 0;
            }            
        }

        function make_table()
        {
            var i = 1;
            var j = 0;
            
            while (i<52)
            {
                var cell_row_elements = document.getElementById("output_table").rows[i].cells;
               
                while (j<4)
                {
                    cell_row_elements[j].innerHTML = Number(i-1).toString(10)
                    j++;
                    cell_row_elements[j].innerHTML = Number(i-1).toString(2)
                    j++;
                    cell_row_elements[j].innerHTML = Number(i-1).toString(8)
                    j++;
                    cell_row_elements[j].innerHTML = Number(i-1).toString(16) ;
                    j++;
                }

                i++;
                j = 0;
            }
        }