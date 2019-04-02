$(document).ready(function () {
           $("button").click(function () {
               $("#walkingInformation").load("data/walkingInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#walkingInformation").fadeOut("slow").fadeIn("slow");
       }
