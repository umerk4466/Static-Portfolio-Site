// show animation until page is not loaded
$(window).on("load", function() {
    $(".loader").fadeOut();
});

// scroll down smooth buttom
$(document).ready(function() {
    $(".custom-button").click(function() {
        $("html, body").animate({ scrollTop: $("#my_projects_page").offset().top + 10 },
            "slow"
        );
    });
});

// Add smooth scrolling on all links inside the navbar
$(document).ready(function() {
    $(".navbar-nav a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate({
                    scrollTop: $(hash).offset().top + 5
                },
                800
                //   function() {
                //     // Add hash (#) to URL when done scrolling (default click behavior)
                //     window.location.hash = hash;
                //   }
            );
        } // End if
    });
});

// set percentage with animaton on scroll
$(document).ready(function() {
    $(window).on("scroll", function() {
        var position = $("#skill_page").offset().top;
        if ($("body").scrollTop() >= position - 300) {
            // set percentage of the skill from their given value
            $(".skill-percentage").each(function() {
                var percentage = $(this).text();
                $(this).animate({ width: parseInt(percentage) + "%" }, 3000);
            });
        }
    });
});


// show message on IE browser for not sporting style functionality
if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
    alert("Please Change your browser, Internet Explorer might not display this Website correctly.");
}