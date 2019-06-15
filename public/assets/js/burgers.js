// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // $(".eatenOrNot").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newBurger = $(this).data("newburger");
  
    //   var newBurgerEntered = {
    //     burger_name: newBurger
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: newBurgerEntered
    //   }).then(
    //     function() {
    //       console.log("new burger added", newBurger);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();


      var newBurger = {
        name: $("#burg").val().trim(),
        // devour: $("[burger_name=devour]:submit").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
        //   var deleteBtn = ('<button>')
        //   $("#burg").append(deleteBtn);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  