// This is part of the navbar minimize animation
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


// this part is for the div scroll into view

function scrollToElement(elementId) {
    const navbarHeight = $('.navbar-layout').outerHeight();
    const element = $('#' + elementId);
    const offsets = element.offset().top - navbarHeight;
  
    $('html, body').animate({
        scrollTop: offsets  
    }, {
        duration: 400, 
        easing: 'swing' 
    });
}

scrollToElement("hero");

// This part is for the form