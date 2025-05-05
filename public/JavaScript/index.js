$(function () {
    const navbarContainer = $(".navbar-container");

    // Minimize on scroll
    $(document).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            navbarContainer.addClass("minimized");
        } 
        else {
            navbarContainer.removeClass("minimized");
        }
    });

    // Minimize on link click
    $(".navbar-items").on("click", function () {
      navbarContainer.addClass("minimized");
    });
});