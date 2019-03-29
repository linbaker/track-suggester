$(document).ready(function(){
  $("#first").submit(function(event){
    var questionOne = $("input:radio[name=whichEnd]:checked").val();
    var questionTwo = $("input:radio[name=size]:checked").val();
    var questionThree = $("input:radio[name=work]:checked").val();
    var questionFour = $("input:radio[name=pace]:checked").val();
    var questionFive = $("input:radio[name=important]:checked").val();

    // var iceCream = parseInt($("input:radio[name=iceCream]:checked").val());
    // var vacation = parseInt($("input:radio[name=vacation]:checked").val());
    // var total = add(time, iceCream, vacation);
    // alert(total)

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


});

// // var add = function(time, iceCream, vacation) {
// //   return time + iceCream + vacation;
//   };
//
});
