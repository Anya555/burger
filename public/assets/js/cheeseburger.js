$(document).ready(function () {

    // selecting input area where user writes burger name
    const burgername = $(".burger-name");
    let newburger;
   

    $(".submit-btn").on("click", function (e) {
        e.preventDefault();
        newburger = {
            burger_name: burgername.val()
        }
        addBurgerToDb(newburger);
        console.log(newburger);
     
    });




    function addBurgerToDb(Burger) {
        $.post("/api/burgers/", Burger).then(function () {
            location.reload();
            /*
             console.log(newburger);

            var addToList = [];

            for (let i = 0; i < newburger.length; i++) {
                    addToList.push(newburger[i]);
            }
            notDevoured.append(addToList);
            console.log(addToList);
            */

            // location.reload();
        })
    }




    $(".devour").on("click", function (e) {
        e.preventDefault();
        // e.stopImmediatePropagation();

        // Get the burger id 
        const id = $(this).attr("data-id");
        console.log(id);

        // Make api call
        const url = "/api/burger/" + id;
        $.put(url).then(function () {
            location.reload();
        });
    });

});