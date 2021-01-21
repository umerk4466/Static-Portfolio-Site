// auto close navbar on click outside
// $(document).ready(function() {
//     $("section").click(function(event) {
//         $('.navbar-collapse').collapse('hide');
//     });
// });

// add active class dynamically
$(document).ready(function() {
    $(".nav-link[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});


// set percentage automatically by given percentage in about page's skills
$(document).ready(function() {
    $(".bar").each(function() {
        var percentage = $(this).children("span").attr("percentage");
        $(this).children("span").css("width", percentage + "%");
    });
});