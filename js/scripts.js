$(document).ready(function(){
  $("#first").submit(function(event){
    var questionOne = $("input:radio[name=whichEnd]:checked").val();
    var questionTwo = $("input:radio[name=size]:checked").val();
    var questionThree = $("input:radio[name=work]:checked").val();
    var questionFour = $("input:radio[name=pace]:checked").val();
    var questionFive = $("input:radio[name=important]:checked").val();
    var result = questionTwo + questionThree + questionFour



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

    if ((result === "prr") || (result === "prr") || (result === "rpr") || (result === "rpr") || (result === "rrp") || (result === "rrp") || (result === "crr") || (result === "crr") || (result === "rcr") || (result === "rcr") || (result === "rrc") || (result === "rrc") || (result === "jrr") || (result === "jrr") || (result === "rjr") || (result === "rjr") || (result === "rrj") || (result === "rrj") || r(esult === "rrr")) {
      $(".ruby").show();
    } else if (questionTwo === "r" && questionThree === "r") {
      $(".ruby").show();
    } else if (questionTwo === "p" && questionFour === "p") {
      $(".ruby").show();
    } else if (questionTwo === "j" && questionFive === "j") {
      $(".ruby").show();

    }
});


});
