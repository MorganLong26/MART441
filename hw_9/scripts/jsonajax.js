$(document).ready(function () {
           $("button").click(function () {
               $("#walkingInformation").load("data/walkiing.json", function(responseText){
                   var walking = JSON.parse(responseText);
                   $("#walkingInformation").html("Title: " + walking.title
                   + "<br>Type:" + walking.type + "<br>Language:" + walking.language +"<br>Genres:<br>" +
                   walking.genres[0] + "<br>" + walking.genres[1] + "<br>" + walking.genres[2]);
               });
           });
       });
