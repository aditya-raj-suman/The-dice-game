
var randomnumber1= Math.floor((Math.random()*6))+1;
var randomImageNo1="images/dice"+randomnumber1+".png";

var randomnumber2=  Math.floor((Math.random()*6))+1;
var randomImageNo2="images/dice"+randomnumber2+".png";

document.querySelector(".img1").setAttribute("src",randomImageNo1);
document.querySelector(".img2").setAttribute("src",randomImageNo2);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="Player2 wins";
}
else
{
  document.querySelector("h1").innerHTML="Draw!!";
}
//document.querySelector("h1").
