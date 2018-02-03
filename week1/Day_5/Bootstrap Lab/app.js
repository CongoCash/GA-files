$(document).ready(function() {
   $(document).on('keyup', function(event) {
       console.log("hellos")
       if (event.which === 13) {
           $("#exampleModal").modal("show")
       }
   })
});