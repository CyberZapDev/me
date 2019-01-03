$(function() {
    var boxDraw = $(".skill2");
    var boxDrawTop = boxDraw.offset().top;
    var windowHeight = $(window).height();
    var item1 = $(".skill1");
    var item2 = $(".skill2");
    var item3 = $(".skill3");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if ( scroll >= ( boxDrawTop - windowHeight )) {
            item1.animate({
                width: "86%"
            }, 1000);
            
            item2.animate({
                width: "90%"
            }, 1000);
            
            item3.animate({
                width: "72%"
            }, 1000);
        } 
    });
});