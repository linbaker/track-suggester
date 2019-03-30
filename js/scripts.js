$(document).ready(function(){
  $("#first").submit(function(event){
    var questionOne = $("input:radio[name=whichEnd]:checked").val();
    var questionTwo = $("input:radio[name=size]:checked").val();
    var questionThree = $("input:radio[name=work]:checked").val();
    var questionFour = $("input:radio[name=pace]:checked").val();
    var questionFive = $("input:radio[name=important]:checked").val();
    var result = questionTwo + questionThree + questionFour



    event.preventDefault();

// If front end return .java, if not ask further questions

    if (questionOne === "frontEnd"){
      $(".design").show();
      $(".idk").hide();
      $("#questionReveal").hide();
    } else if (questionOne === "backEnd"){
      $(".type").hide();
      $("#questionReveal").show();
    } else if (questionOne === "idk"){
      $(".idk").show();
      $(".design").hide();
      $("#questionReveal").hide();

// If user selects similar results in 2 or more responses in questionTwo, questionThree or questionFour return the repested results

    } if ((questionOne === "backEnd") && ((result === "prr") || (result === "rpr") || (result === "rrp") || (result === "crr") || (result === "rcr") || (result === "rrc") || (result === "rjr") || (result === "rrr"))) {
      $(".type").hide();
      $(".ruby").show();
    } else if ((questionOne === "backEnd") && ((result === "cjp") || (result === "cjr") || (result === "cjc"))) {
      $(".type").hide();
      $(".java").show();
    } else if ((questionOne === "backEnd") && ((result === "ccp") || (result === "cpc") || (result === "pcc") || (result === "ccr") || (result === "rcc") || (result === "crc") || (result === "cjc") || (result === "ccc"))) {
      $(".type").hide();
      $(".c").show();
    } else if ((questionOne === "backEnd") && ((result === "jpp") || (result === "pjp") || (result === "ppc") || (result === "cpp") || (result === "pcp") || (result === "ppr") || (result === "rpp") || (result === "prp") || (result === "rpp") || (result === "ppp")) ) {
      $(".type").hide();
      $(".php").show();

// If user does not select similar results in 2 or more responses in questionTwo, questionThree or questionFour use value from questionFive

    } else if (!((result === "prr") || (result === "rpr") || (result === "rrp") || (result === "crr") || (result === "rcr") || (result === "rrc") || (result === "rjr") || (result === "rrr") || (result === "cjp") || (result === "cjr") || (result === "cjc") || (result === "jpp") || (result === "pjp") || (result === "ppc") || (result === "cpp") || (result === "pcp") || (result === "ppr") || (result === "rpp") || (result === "prp") || (result === "rpp") || (result === "ppp")) && questionFive === "p") {
      $(".type").hide();
      $(".php").show();
    } else if (!((result === "prr") || (result === "rpr") || (result === "rrp") || (result === "crr") || (result === "rcr") || (result === "rrc") || (result === "rjr") || (result === "rrr") || (result === "cjp") || (result === "cjr") || (result === "cjc") || (result === "jpp") || (result === "pjp") || (result === "ppc") || (result === "cpp") || (result === "pcp") || (result === "ppr") || (result === "rpp") || (result === "prp") || (result === "rpp") || (result === "ppp")) && questionFive === "j") {
      $(".type").hide();
      $(".java").show();
    } else if (!((result === "prr") || (result === "rpr") || (result === "rrp") || (result === "crr") || (result === "rcr") || (result === "rrc") || (result === "rjr") || (result === "rrr") || (result === "cjp") || (result === "cjr") || (result === "cjc") || (result === "jpp") || (result === "pjp") || (result === "ppc") || (result === "cpp") || (result === "pcp") || (result === "ppr") || (result === "rpp") || (result === "prp") || (result === "rpp") || (result === "ppp")) && questionFive === "r") {
      $(".type").hide();
      $(".ruby").show();
    }
});


});
