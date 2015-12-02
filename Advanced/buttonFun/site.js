$(function(){

  $("#btn").on("click", function(){
    $(this).removeClass("green");
    $(this).addClass("red");
    $(this).toggleClass("blue");

  });

  $("#btn").hover(function(){
    $(this).removeClass("red");
    $(this).addClass("blue");
    $(this).toggleClass('green');
  });
});
