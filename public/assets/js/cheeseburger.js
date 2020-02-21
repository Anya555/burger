$(document).ready(function () {

    // selecting input area where user writes burger name
    const burgername = $(".burger-name");
    let newburger;
   
    
    $(".submit-btn").on("click", function (e) {
        e.preventDefault();

        // grabbing burger name written into input field in the DOM
        newburger = {
            burger_name: burgername.val()
        }
        addBurgerToDb(newburger);
        console.log(newburger);
     
    });


    function addBurgerToDb(Burger) {
        $.post("/api/burgers/", Burger).then(function () {
            location.reload();
        })
    }


    $(".devour").on("click", function (e) {
        e.preventDefault();
        // e.stopImmediatePropagation();

        // Getting the burger id 
        let id = $(this).attr("data-id");
        console.log(id);


        $.ajax("/api/burger/" + id, {
            type: "PUT",
        }).then(() => {
            location.reload();
        });

// throws error put is not a function
     // Making api call
        // const url = "/api/burger/" + id;
        // $.put(url).then(function () {
        //     location.reload();
        // });
   
    });

});