let levelAr = ["green", "red", "yellow", "blue"];
let level = 1;
let gameAr = [];
let inputAr = [];

function startGame(){
    loadBtn();
    $("body").keypress(function(){
        $("h1").html("Level "+ level)
        randomLevel();
    })
    }
function loadBtn(){
    $("button").click(function(){
        
        let curr = $(this).attr("id")
        var audio = new Audio("/sounds/"+curr+".mp3");
        audio.play();
        // first we want btns to be disabled.
        inputAr.push(curr)
        console.log(inputAr)
        if(gameAr.length>= 1){
           
            if(gameAr.toString() === inputAr.toString()){
                console.log("passed");
                // flushRestart();

                randomLevel();
            }else{
                console.log("go");
                gameOver();
                setTimeout(function(){
                    $("body").removeClass("go");
                    gameAr = []
                    inputAr = []
                },"1000")

            }
        }
    })
}
// checkForWin()
// function flushRestart(){
//     inputAr = [];
//     let i = 0;
//     while(gameAr.toString() === inputAr.toString()){
//         $("button").click(function(){
//         let curr = $(this).attr("id")
//         var audio = new Audio("/sounds/"+curr+".mp3");
//         audio.play();

//         inputAr.push(curr)
//         console.log(inputAr)

//         })
//         i++;
//     }
// }

function randomLevel(){
    let randomC = levelAr[Math.floor(Math.random()*4)];
    $("#"+randomC).addClass("onP");
    gameAr.push(randomC);
    console.log(gameAr)
    setTimeout(function(){
        $("#"+randomC).removeClass("onP");
    },"1000")
}
function updateLevel(){
    // event thru
}
function wrongPlay(){
    $("body").css("background-color" , "red");
    var audio = new Audio("/sounds/wrong.mp3");
    audio.play();
}



function gameOver(){
   
        $("h1").html("Game Over, Press Any Key to Restart")
        $("body").addClass("go")
        var audio = new Audio("/sounds/wrong.mp3");
        audio.play();
    
}