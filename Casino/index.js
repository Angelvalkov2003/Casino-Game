const cells = document.querySelectorAll(".cell");
const winStatus = document.querySelector("#winStatus");
const rollBtn = document.querySelector("#rollBtn");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const eleven = document.querySelector("#eleven");
const twelve = document.querySelector("#twelve");
const thirteen = document.querySelector("#thirteen");
const fourteen = document.querySelector("#fourteen");


const ListOfCells = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen];


const cherryImg = "background-image: url('./images/Cherry.jpg')"
const lemonImg = "background-image: url('./images/lemon.jpg');"
const grapeImg = "background-image: url(./images/Grape.jpeg);"
const sevenImg = "background-image: url(./images/7.jpg);"


const winConditions = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [0, 6, 12, 8, 4],
    [10, 6, 2, 8, 14],
];

let winWaysCherry = [];
let winWaysGrape = [];
let winWaysLemon = [];
let winWaysSeven = [];

let priceWin = 0;


rollBtn.addEventListener("click",Roll);

function Roll(){
    winWaysCherry = [];
    winWaysGrape = [];
    winWaysLemon = [];
    winWaysSeven = [];
    

    LoadingAnimationWhite()

    setTimeout(() => {
        LoadingAnimationBlack();
    }, 500);

    setTimeout(() => {
        LoadingAnimationWhite();
    }, 1000);

    setTimeout(() => {
        LoadDisplay();
    }, 1500);

    setTimeout(() => {
        checkWin();
    }, 2000);

}
function  LoadingAnimationWhite(){
    for(let i=0; i< ListOfCells.length; i++)
    {
        ListOfCells[i].style = "background-color: white;";
    }
}

function  LoadingAnimationBlack(){
    for(let i=0; i< ListOfCells.length; i++)
    {
        ListOfCells[i].style = "background-color: black;";
    }
}


function LoadDisplay(){

    for(let i=0; i< ListOfCells.length; i++)
    {
        let Random = Math.floor((Math.random()*4))

        switch(Random){
            case 0:
                ListOfCells[i].style = cherryImg;
                winWaysCherry.push(i);
                break;
            case 1:
                ListOfCells[i].style = grapeImg;
                winWaysGrape.push(i);
                break;
            case 2:
                ListOfCells[i].style = lemonImg;
                winWaysLemon.push(i);
                break;
            case 3:
                ListOfCells[i].style = sevenImg;
                winWaysSeven.push(i);
                break;
        }

        
    }
}

    

function checkWin(){

    let winnings = 0;
    for (const winCondition of winConditions) {
    let winStreak = 0;
    for (const winningPosition of winCondition) {
        if (!winWaysCherry.includes(winningPosition)) {
            break;
        }
        winStreak++;
    }

    winnings += getMoneyForWinStreakCherry(winStreak);
}

for (const winCondition of winConditions) {
    let winStreak = 0;
    for (const winningPosition of winCondition) {
        if (!winWaysGrape.includes(winningPosition)) {
            break;
        }
        winStreak++;
    }

    winnings += getMoneyForWinStreakGrape(winStreak);
}
for (const winCondition of winConditions) {
    let winStreak = 0;
    for (const winningPosition of winCondition) {
        if (!winWaysLemon.includes(winningPosition)) {
            break;
        }
        winStreak++;
    }

    winnings += getMoneyForWinStreakLemon(winStreak);
}
for (const winCondition of winConditions) {
    let winStreak = 0;
    for (const winningPosition of winCondition) {
        if (!winWaysSeven.includes(winningPosition)) {
            break;
        }
        winStreak++;
    }

    winnings += getMoneyForWinStreakSeven(winStreak);
}
    

    let winStreakGrape = 0;
    let winStreakLemon = 0;
    let winStreakSeven = 0;

    winStatus.textContent = `Your win is: ${winnings}`;
}

const getMoneyForWinStreakCherry = (winStreakCherry) => {
    switch (winStreakCherry) {
        case 3:
            return 10;
        case 4:
            return 15;
        case 5:
            return 25;
        default:
            return 0;
    };
};

const getMoneyForWinStreakGrape = (winStreakGrape) => {
    switch (winStreakGrape) {
        case 3:
            return 15;
        case 4:
            return 20;
        case 5:
            return 30;
        default:
            return 0;
    };
};

const getMoneyForWinStreakLemon = (winStreakLemon) => {
    switch (winStreakLemon) {
        case 3:
            return 12;
        case 4:
            return 17;
        case 5:
            return 27;
        default:
            return 0;
    };
};

const getMoneyForWinStreakSeven = (winStreakSeven) => {
    switch (winStreakSeven) {
        case 3:
            return 30;
        case 4:
            return 50;
        case 5:
            return 80;
        default:
            return 0;
    };
};

