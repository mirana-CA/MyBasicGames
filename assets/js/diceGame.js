let diceImg = document.querySelector(".diceImg")
let player1TotalPoint = document.querySelector(".player1Point")
let player2TotalPoint = document.querySelector(".player2Point")
let player1CurrentPoint = document.querySelector(".player1CurrentPoint")
let player2CurrentPoint = document.querySelector(".player2CurrentPoint")
let rollDiceBtn = document.querySelector(".rollDiceBtn")
let holdBtn = document.querySelector(".holdBtn")
let player1CurrentPointValue = 0
let player2CurrentPointValue = 0
let player1TotalPointValue = 0
let player2TotalPointValue = 0


let one  =  "./assets/imgs/dice-one.png"
let two = "./assets/imgs/dice-two.png"
let three =   "./assets/imgs/dice-three.png"
let four = "./assets/imgs/dice-four.png"
let five =  "./assets/imgs/dice-five.png"
let six =  "./assets/imgs/dice-six.png"
let diceArr = [ 
    {
        src:one,
        value:1
    },
    {
        src:two,
        value:2
    },
    {
        src:three,
        value:3
    },
    {
        src:four,
        value:4
    },
    {
        src:five,
        value:5
    },
    {
        src:six,
        value:6
    }
]
let index = null
let src = null
let player1 = true

rollDiceBtn.addEventListener("click",function () {
    if (player1) {
        index = Math.floor(Math.random()*6)
        diceImg.src  = diceArr[index].src
        if (diceArr[index].value!=1) {
           
            player1CurrentPointValue+=diceArr[index].value
            player1CurrentPoint.innerHTML=player1CurrentPointValue
            holdBtn.addEventListener("click",function () {
                player1TotalPointValue=player1CurrentPointValue
                player1TotalPoint.innerHTML=player1TotalPointValue
                console.log(player1TotalPointValue);
                turnPlayer2()

            })
        }else{
            turnPlayer2()
        }

    }else{
        index = Math.floor(Math.random()*6)
        diceImg.src  = diceArr[index].src
        if (diceArr[index].value!=1) {
           
            player2CurrentPointValue+=diceArr[index].value
            player2CurrentPoint.innerHTML=player2CurrentPointValue
            holdBtn.addEventListener("click",function () {
                player2TotalPointValue=player2CurrentPointValue
                player2TotalPoint.innerHTML=player2TotalPointValue
                turnPlayer1()
            })
        }else{
            turnPlayer1()
        }
    }

   
})
function turnPlayer2() {
    player1CurrentPointValue = 0
    player1CurrentPoint.innerHTML=player1CurrentPointValue
    player1 = false  
}
function turnPlayer1() {
    player2CurrentPointValue = 0
    player2CurrentPoint.innerHTML=player2CurrentPointValue
    player1 = true 
}