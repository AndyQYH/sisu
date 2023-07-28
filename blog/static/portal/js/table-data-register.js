$(document).ready(function() {
    var table = $('#edit-employee-reg').DataTable({
        "language": {
            "info": "Showing _END_ of _TOTAL_ employees",
            "lengthMenu":     "Showing: _MENU_ entries",
            "paginate": {
                "next": "<i class='fa-solid fa-arrow-right' style='font-size:24px; transform:translate(0, 5px);'></i>", // or '→'
                "previous":  "<i class='fa-solid fa-arrow-left' style='font-size:24px; transform:translate(0, 5px);'></i>" // or '←' 
            }
        },
        "bFilter":true,
        "dom": "tip"         // This shows just the table
        
    })
    console.log(table)
    $('#search').keyup(function(){
        table.search($(this).val()).draw();
    })

    $('#filter-search').on('change', function(e){
        console.log($(this).val())
        let val = $(this).val()
        table.column(2).search( val ? '\b'+val+'\b' : '',true, false).draw()
    })

})