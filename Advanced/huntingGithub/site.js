$(function(){
  $("#sbt").on("click", function(){
    var userName = $("#userInput").val();

    $.get("https://api.github.com/users/"+userName, function(res){
      $("#name").text(res.name);
    });
  });
});
