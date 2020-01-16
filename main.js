$("i.fas.fa-bars").click(function() {
  $(".hamburger-menu").fadeIn(500);
  $("#icona-uscita").removeClass("rotate-center");
});

$("i.fas.fa-times").click(function() {
  $(".hamburger-menu").fadeOut("3000");
  $("#icona-uscita").addClass("rotate-center");
});


// ALTRO MEDOTO
//
// $( "i.fas.fa-bars" ).click(function() {
//   $(".hamburger-menu").show(500);
// });
//
// $("i.fas.fa-times").click( function() {
//   $(".hamburger-menu").hide("fast");
// });
