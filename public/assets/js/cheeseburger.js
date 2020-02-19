$(document).ready(function () {

    // selecting input area where user writes burger name
    const burgername = $(".burger-name");
 
    $(".submit-btn").on("click", function (e) {
        e.preventDefault();

        let newburger = {
            burger_name: burgername.val()
        }
        console.log(newburger);
        addBurgerToDb(newburger);
    });

    
    function addBurgerToDb(Burger) {
        $.post("/api/burgers/", Burger, function() {
    // Location.reload() method reloads the current URL, like the Refresh button
            location.reload();
        });
      }

    $(".devour").on("click", function () {

    });

});