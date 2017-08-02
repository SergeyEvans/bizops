  $( function() {
    $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );