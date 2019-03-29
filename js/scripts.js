$(document).ready(function(){
  $("#first").submit(function(event){
    var questionOne = $("input:radio[name=whichEnd]:checked").val();
    var questionTwo = $("input:radio[name=size]:checked").val();
    var questionThree = $("input:radio[name=work]:checked").val();
    var questionFour = $("input:radio[name=pace]:checked").val();
    var questionFive = $("input:radio[name=important]:checked").val();


    event.preventDefault();


    if (questionOne === "frontEnd"){
      $(".design").show();
      $("#questionReveal").hide();
      $(".idk").hide();
    } else if (questionOne === "backEnd"){
      $("#questionReveal").show();
      $(".design").hide();
      $(".idk").hide();
    } else if (questionOne === "idk"){
      $(".idk").show();
      $(".design").hide();
      $("#questionReveal").hide();
    };

    if (questionTwo === "r" && questionThree === "r" && questionFour === "r" && questionFive === "r") {
      $(".ruby").show();
    }
});


});
