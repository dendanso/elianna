$(document).ready(main_function)

function main_function(){
    //variables
    var mini_nav = $(".mini_navigation");
    var hidden_nav = $(".hidden_navigation");

    mini_nav.on("click",show_Nav);

    function show_Nav(){
        hidden_nav.toggleClass("show_nav");
    }


}