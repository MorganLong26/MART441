var myViewFinderArray = new Array();
//var actualImages= new Array();

class ViewFinder
{
constructor(title,image,description,author,year){
  this.title=title;
  this.image=image;
  this.description=description;
  this.author=author;
  this.year=year;

}
toString(){
  return"Title:"+this.title;
  return"Image:"+this.image;
  return"Description:"+this.description;
  return"Author:"+this.author;
  return"Year:"+this.year;
}
  get theTitle(){
    return this.title;
  }
  get theImage(){
    return this.image;
  }
  get theDescription(){
    return this.description;
  }
  get theAuthor(){
    return this.author;
  }
  get theYear(){
      return this.year;
  }




}
function initializeArray(){
  var myViewFinder = new ViewFinder("Starry Night","Images/StarryNigt.jpg","Famous Van Gough oil painting", "Van Gough","1889");
  var myViewFinder1= new ViewFinder("Mona Lisa","Images/Monalisa.jpg","Famous Italian Renaissance painting","Leonardo da Vinci","1503");
  var myViewFinder2= new ViewFinder("Girl With The Pearl Earring","Images/GirlEarring.jpg","Famous Dutch Golden Age oil painting","Johannes Vermeer","1665");
  var myViewFinder3= new ViewFinder("Water Lilies","Images/Waterlilies.jpg","One of 250 oil paitings in French Impressions style","Claude Monet","1840");
  var myViewFinder4= new ViewFinder("Sunday In The Park","Images/Sunday.jpg","A leading example of the pointillist technique","George Seurat","1884");
  myViewFinderArray.push(myViewFinder);
  myViewFinderArray.push(myViewFinder1);
  myViewFinderArray.push(myViewFinder2);
  myViewFinderArray.push(myViewFinder3);
  myViewFinderArray.push(myViewFinder4);

  function createRandomImageArray()
  {
  var actualImages = ["Images/StarryNight.jpg", "Images/Monalisa.jpg", "Images/GirlEarring.jpg", "Images/Waterlilies.jpg", "Images/Sunday.jpg"];
  var count = [0,0,0,0,0];

  while(myViewFinder.length < 4)
  {

      var randomNumber = Math.floor(Math.random() * myViewFinder.length)
}
}
}
function accessInformation(){
  //var myViewFinder = new ViewFinder("Pug");
  //console.log(myViewFinder.toString());
  //console.log (myViewFinder.theTitle);
  document.getElementById("title").innerHTML= myViewFinderArray[0].theTitle;
  document.getElementById("images").src= myViewFinderArray[0].theImage;
  document.getElementById("description").innerHTML= myViewFinderArray[0].theDescription;
  document.getElementById("author").innerHTML= myViewFinderArray[0].theAuthor;
  document.getElementById("year").innerHTML= myViewFinderArray[0].theYear;
}
