

var randomNumber1=Math.floor(Math.random()*6)+1;

var randimg1= 'images/dice'+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randimg1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randimg2= 'images/dice'+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randimg2);

if(randimg1>randimg2)
{
    var title=document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
if(randimg2>randimg1)
{
    var title=document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}
if(randimg2==randimg1)
{
    var title=document.querySelector("h1").innerHTML="Draw!";
}
