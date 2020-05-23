$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {

    




    //hint:setting up ajax put
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: ""
    }).then(function() {

        location.reload();
      
    })
  
  });
});
