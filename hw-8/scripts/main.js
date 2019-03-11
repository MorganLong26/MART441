var placeSelector = "#Budapest";
var allPlaces = new Array();
var square = "#square";
class PlaceInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var place = new PlaceInfo("#Budapest", "images/Budapest.jpg","images/London.jpg","images/Postsdam.jpg");
    allPlaces.push(place);

}
$(document).ready(function(){
    console.log(allPlaces[0].toString());
    console.log(allPlaces[0].theSelector);
    console.log(allPlaces[0].theImagePath);

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allPlaces[0].theSelector).attr("src", allPlaces[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();

        $("#Budapest").on({
      'click': function() {
           var src = ($(this).attr('src') === 'images/Budapest.jpg')
              ? 'images/London.jpg'
              : 'images/Budapest.jpg';
           $(this).attr('src', src);
      }
  });
});
          // setInterval(moveSquare, 1000);

        $(allPlaces[0].theSelector).fadeOut().fadeIn();
        $("button").click(function(){
          $("#square").animate({left:250});
          $("#square").animate({top:400});

        });

        $("button").click(function(){
          $("#square2").animate({left:250});
          $("#square2").animate({top:400});

        });

        $("button").click(function(){
          $("#square3").animate({left:250});
          $("#square3").animate({top:400});

        });

        $("button").click(function(){
          $("#square4").animate({left:250});
          $("#square4").animate({top:400});

        });
    });
