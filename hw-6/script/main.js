
var imageNames = ["image1", "image2", "image3", "image4","image5","image6","image7","image8","image9","image10"];
var blankImagePath = "Images/card.jpg";
var firstNumber = -1;
var secondNumber = -1;
var numberOfMoves =0;
var allDone = 0;
var actualImages = new Array();

//var player = {"firstname":"moves", "lastname":"age"};
// changed the syntax of the JSON so that you have a key:value pair for item
var playerInfo = {"firstname":"", "lastname":"", "age":"", "moves":0};

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageNames.length; i++)
    {

        document.getElementById(imageNames[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{

    var actualImagePath = ["Images/BullShark.jpg", "Images/GreatWhite.jpg", "Images/ThresherShark.jpg", "Images/GoblinShark.jpg", "Images/Tiger_shark.jpg"];
    var count = [0,0,0,0,0];

    while(actualImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }


}

function flipImage(number)
{
  if(firstNumber >= 0)
  {
      secondNumber = number;
      document.getElementById(imageNames[number]).src = actualImages[secondNumber];

  }
  else if(firstNumber < 0)
  {
      firstNumber = number;
      document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];

  }


  if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      // need to keep track of their moves here too
      numberOfMoves = numberOfMoves +1;
      setTimeout(imagesDisappear, 1000);
  }

  else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      firstNumber = -1;
      secondNumber = -1;
      //so you want to keep track when they are correct and when they are wrong.
      numberOfMoves = numberOfMoves +1;
      // need another variable to see if they are done guessing
      allDone +=1;
      // check to see if they have found all the images here
      if(allDone == imageNames.length/2)
      {
        // assign all total number of moves to your moves property
    player.moves = numberOfMoves +1
        // set your local storage again before you to the next page
        var playerInfo = localStorage.getItem("playerInfo");


        // go to the next page
        window.location = "FinalScore.html";
      }
  }




}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}


function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
    //console.log(firstName);
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
    //window.location ="FinalScore.html"
}


function playerInfo()
{
  var playerInfo = document.getElementById("playerInfo").innerHTML = player.firstname+":"+player.lastname+":"+player.age+":"+player.moves+":0";
    player = JSON.stringify(playerInformation);
    //console.log(player.firstname);
    //console.log(player.lastname);
    //console.log(player.age);
    //console.log(player.moves);

}
