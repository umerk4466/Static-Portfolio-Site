// show animation until page is not loaded
$(window).on("load", function() {
    $(".loader").fadeOut();
});

// scroll down smooth buttom
$(document).ready(function() {
    $(".go-down-btn").click(function() {
        $("html, body").animate({ scrollTop: $("#about-me-section").offset().top },
            "slow"
        );
    });
});

// set percentage automatically by given percentage
$(document).ready(function() {
    $(".bar").each(function() {
        var percentage = $(this).children("span").attr("percentage");
        $(this).children("span").css("width", percentage + "%");
    });
});

// change navbar menu icon on nave open/show
$(document).ready(function() {
    $("#menu-btn").click(function() {
        let is_open = $(this).attr("aria-expanded");
        if (is_open == "true") {
            $("#menu-icon").addClass("menu-bar");
            $("#menu-icon").removeClass("menu-close");
        } else {
            $("#menu-icon").addClass("menu-close");
            $("#menu-icon").removeClass("menu-bar");
        }
    });
});