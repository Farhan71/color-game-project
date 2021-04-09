var numSquare =6; 
var color = generateRandomColor(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var btnHard = document.querySelector("#btnHard");
var btnEasy = document.querySelector("#btnEAsy");

btnHard.addEventListener("click",function(){
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    numSquare =6;
    color=generateRandomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0 ; i<square.length;i++){
        
        square[i].style.background = color[i];
        square[i].style.display = "block";
       
    }
})

btnEasy.addEventListener("click",function(){
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    numSquare = 3;
    color=generateRandomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0 ; i<square.length;i++){
        if(color[i]){
            square[i].style.background = color[i];
        }
        else{
            square[i].style.display = "none";
        }
    }


})

resetButton.addEventListener("click",function(){
    color = generateRandomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0; i<square.length; i++){
        square[i].style.background = color[i];
    }
    h1.style.background ="#232323"
})

colorDisplay.textContent = pickedColor;
for (var i=0; i< square.length ; i++){
    square[i].style.background = color[i];
    square[i].addEventListener("click",function(){
    var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);

    if (clickedColor === pickedColor) {
        messageDisplay.textContent=  "correct!!!"
        resetButton.textContent = "Play Again!!!"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
        this.style.background="#232323";
        messageDisplay.textContent=  "try again!!!"
    }

    })
    
}

function changeColors(col){
    for (var i=0; i< square.length; i++){
        square[i].style.background = col;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}

function generateRandomColor(num){
    var arr=[];
    for (var i = 0; i< num; i++ ){
       arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
   var r= Math.floor(Math.random()*256) ;
   var g= Math.floor(Math.random()*256) ;
   var b= Math.floor(Math.random()*256) ;
   return "rgb(" + r + ", " + g + ", " + b + ")";

}
