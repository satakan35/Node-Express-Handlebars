$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
event.preventDefault();
var burgerId= $(this).children(".burger_id").val()
    

    //hint:setting up ajax put
    
    $.ajax({
      url:"/burgers/" + burgerId, 
      type: "PUT",
      
    }).then(function(data) {

        location.reload();
      
    })
  
  });
});
