$(document).ready(function() {
  $(".clickable").click(function() {
    $(".sandcastle").slideToggle();
  });

  $(".clickable2").click(function() {
    $("body").removeClass();
    $("body").addClass("lightText");
  });

  $(".clickable3").click(function() {
    $("body").removeClass();
    $("body").addClass("normal");
  });


});
