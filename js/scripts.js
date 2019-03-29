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

    if ((result === "prr") || (result === "rpr") || (result === "rrp") || (result === "crr") || (result === "rcr") || (result === "rrc") || (result === "rjr") || (result === "rrr")) {
      $(".type").hide();
      $(".ruby").show();
    } else if ((result === "cjp") || (result === "cjr") || (result === "cjc")) {
      $(".type").hide();
      $(".java").show();
    } else if ((result === "ccp") || (result === "cpc") || (result === "pcc") || (result === "ccr") || (result === "rcc") || (result === "crc") || (result === "cjc") || (result === "ccc")) {
      $(".type").hide();
      $(".c").show();
    } else if ((result === "jpp") || (result === "pjp") || (result === "ppc") || (result === "cpp") || (result === "pcp") || (result === "ppr") || (result === "rpp") || (result === "prp") || (result === "rpp") || (result === "ppp") ) {
      $(".type").hide();
      $(".php").show();
    // } else (questionFive === p) {
    //   $(".type").hide();
    //   $(".php").show();
    // } else (questionFive === j) {
    //   $(".type").hide();
    //   $(".java").show();
    // } else (questionFive === r) {
    //   $(".type").hide();
    //   $(".ruby").show();
    }
});


});
