var numSquare=6;
var colors=randomColor(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var heading = document.getElementById("heading");
//var gameOver=false;
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function()
{
hardBtn.classList.remove("mode");
easyBtn.classList.add("mode");
numSquare=3;
colors=randomColor(numSquare);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
if(colors[i])
{
squares[i].style.background=colors[i];
}
else
{
squares[i].style.display="none";
}
}
// for(var j=3;j<colors.length;j++)
// {
// squares[j].style.display="none";
// }

});
hardBtn.addEventListener("click",function()
{
hardBtn.classList.add("mode");
easyBtn.classList.remove("mode");
numSquare=6;
colors=randomColor(numSquare);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];
squares[i].style.display="block";
}
});


reset.addEventListener("click",function()
{
colors=randomColor(numSquare);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];
}
heading.style.background="steelblue";
message.textContent="";
reset.textContent="New Colors?";

});

for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];

squares[i].addEventListener("click",function()
{
var colorClicked=this.style.background;
console.log(colorClicked,pickedColor)
if(colorClicked===pickedColor)
{
//alert("win");
message.textContent="Correct!!!";
heading.style.background=colorClicked;
//squares[i].style.background=pickedColor;
for(var j=0;j<squares.length;j++)
{
squares[j].style.background=colorClicked;
}
reset.textContent="Play Again?";
}
else
{
this.style.background="#232323";
message.textContent="Try Again!!";
}
});
}

colorDisplay.textContent=pickedColor;
function pickColor()
{
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}

function randomColor(num)
{
var arr=[];
for(var i=0;i<num;i++)
{
arr.push(generateRandomColor());
}
return arr;
}
function generateRandomColor()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";

//rgb(255, 255, 255)
}