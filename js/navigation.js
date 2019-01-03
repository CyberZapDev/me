$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    var $links = $(".container nav a");
    $links.toggleClass("scrolledlinks", $(this).scrollTop() > $nav.height());
    var $linkimage = $(".container nav .navcontainer a:first-of-type");
    $linkimage.toggleClass("scrolledimage", $(this).scrollTop() > $nav.height());
    var $move = $(".fa-arrow-up");
    $move.toggleClass("moveupanimate", $(this).scrollTop() > $nav.height());
  });
});