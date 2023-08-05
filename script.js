let levelAr = ["green", "red", "yellow", "blue"];
let level = 0;
let gameAr = [];
let inputAr = [];
var started = false;

$("body").keypress(function(){
    if(!started){
        $("h1").html("Level "+ level)
        randomLevel();
        started = true;
        }
    })
    
 $("button").click(function(){
        let curr = $(this).attr("id")
        inputAr.push(curr)

        //play
        playSound(curr);

        //animate

        //check
        checkRes(inputAr.length-1);
})

function checkRes(currLevel){
    if(gameAr[currLevel] === inputAr[currLevel]){
        if(inputAr.length === gameAr.length){
            setTimeout(function () {
                randomLevel();
              }, 1000);
        }
    }else{
        //play sound
        playSound("wrong");
        $("body").addClass("go");
        $("h1").text("Game Over, Press S Key to Restart");
        $("h3").addClass("kpop")
        $("h3").text("Your Score: "+level)
        //setTIme
        setTimeout(function () {
            $("body").removeClass("go");
            $("h3").removeClass("kpop")

          }, 2000);
        //startOver
        gameOver();
    }
}

function randomLevel(){
    inputAr=[];
    level++;
    $("h1").html("Level "+ level)

    let randomC = levelAr[Math.floor(Math.random()*4)];
    $("#"+randomC).addClass("onP");
    gameAr.push(randomC);

    setTimeout(function(){
        $("#"+randomC).removeClass("onP");
    },"1000")

    playSound(randomC);
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function gameOver(){
   
     level = 0;
     gameAr = []
     started = false;
    
}