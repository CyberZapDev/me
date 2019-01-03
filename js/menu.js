$(document).ready(function() {
    $(".container .mobilenav").hide();
    $(".menuicon").click(function() {
        $(".menuicon .menuline1").toggleClass("line1");
        $(".menuicon .menuline2").toggleClass("line2");
        $(".container .mobilenav").slideToggle(500);
    });
});