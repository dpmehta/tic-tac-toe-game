console.log("Tic Tac Toe")

let bgMusic = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let gameOver = false;
let turn = "X";
let count = 0;
let line = document.getElementById("line");

const changeTurn = () => {
    
    return turn === "X" ? "0" : "X";
}

//to check winning

const checkWin = () => {

    let boxtexts = document.getElementsByClassName("boxText");

    let wins = [
        [0,1,2,1,5,0],
        [3,4,5,1,15,0],
        [6,7,8,1,25,0],
        [0,3,6,-9,15,90],
        [1,4,7,1,15,90],    
        [2,5,8,11,15,90],
        [0,4,8,2,16,45],
        [2,4,6,2,14,135],
    ];

    wins.forEach((e) => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " won the game ";
            gameOver = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            line.style.left = `${e[3]}vw`;
            line.style.top = `${e[4]}vw`;
            line.style.transform = `rotate(${e[5]}deg)`;
            line.style.width = "28vw";
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {

    let boxtext = element.querySelector(".boxText");

    element.addEventListener("click",() => {
        count++;
        if(count === 9 && gameOver === false){
           document.getElementById("gameOver").style.visibility = "visible";
           gameOverMusic.play();
        }
        if(boxtext.innerText === ""){
            turn === "X" ? boxtext.style.color = "red" : boxtext.style.color = "blue" ;
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            turnMusic.play();
            if(gameOver === false){
                document.getElementsByClassName("info")[0].innerText = " Now Turn for " + turn;
            }
        }
    })

})

//reset logic

let reset = document.getElementById("reset");

reset.addEventListener("click",() => {

    let boxtexts = document.getElementsByClassName("boxText");

    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        document.getElementsByClassName("info")[0].innerText = " Now Turn for X";
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
        line.style.left = "0px";
        line.style.top = "0px";
        line.style.width = "0px";
    });
})

document.getElementById("resetNew").addEventListener(
    "click",() => {

        let boxtexts = document.getElementsByClassName("boxText");
    
        Array.from(boxtexts).forEach(element => {
            element.innerText = "";
            document.getElementsByClassName("info")[0].innerText = " Now Turn for X";
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
            line.style.left = "0px";
            line.style.top = "0px";
            line.style.width = "0px";
            document.getElementById("gameOver").style.visibility = "hidden";
        });
    }
)