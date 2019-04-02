let walking = {
               "title" : "The Walking Dead",
               "type" : "Scripted",
               "language" : "English",
               "genres" : [
                   "Drama",
                   "Action",
                   "Horror"
               ]
           }

       $(function () {
           $("button").click(function () {
               showWalkingInfo();
           });

       });

       function showWalkingInfo()
           {
               $("#walkingInformation").html("Title: " + walking.title
               + "<br>Type:" + walking.type + "<br>Language:" + walking.language +"<br>Genres:<br>" +
               walking.genres[0] + "<br>" + walking.genres[1] + "<br>" + walking.genres[2]);
           }
