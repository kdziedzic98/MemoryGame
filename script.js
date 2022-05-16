
const Icons = [
    {
        name: "Monster",
        img: "img/Monster.png"
    },
    {
        name: "Monster",
        img: "img/Monster.png"
    },
    {
        name: "Camera",
        img: "img/Camera.png"
    },
    {
        name: "Camera",
        img: "img/Camera.png"
    },
    {
        name: "Gamepad",
        img: "img/Gamepad.png"
    },
    {
        name: "Gamepad",
        img: "img/Gamepad.png"
    },
    {
        name: "Ipod",
        img: "img/Ipod.png"
    },
    {
        name: "Ipod",
        img: "img/Ipod.png"
    },
    {
        name: "Painting",
        img: "img/Painting.png"
    },
    {
        name: "Painting",
        img: "img/Painting.png"
    },
    {
        name: "Painting2",
        img: "img/Painting2.png"
    },
    {
        name: "Painting2",
        img: "img/Painting2.png"
    },
    {
        name: "SecurityCamera",
        img: "img/SecurityCamera.png"
    },
    {
        name: "SecurityCamera",
        img: "img/SecurityCamera.png"
    },
    {
        name: "VideoCamera",
        img: "img/VideoCamera.png"
    },
    {
        name: "VideoCamera",
        img: "img/VideoCamera.png"
    }
]

Icons.sort(() => Math.random() - .5);

let grid = document.querySelector(".grid");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let reset = document.querySelector("input");
let click = new Audio("sound/click.wav");
let selectedCards = [];
let selectedCardsId = [];
let foundedPairs = [];
let lock = false;
let numberOfMoves = 0;

const addGrid = () => {
    for(i=0; i<Icons.length; i++){
        let icon = document.createElement("img");
        icon.setAttribute("src", "img/QuestionMark.png");
        icon.setAttribute("data-id", i);
        grid.appendChild(icon);

        icon.addEventListener("click", reverseCard); 
    }
}

function reverseCard(){
    if(lock == false){
        let selectedCard = this.getAttribute("data-id");
        selectedCards.push(Icons[selectedCard].name);
        selectedCardsId.push(selectedCard);

        this.setAttribute("src", Icons[selectedCard].img);

        if(selectedCards.length == 2){
            setTimeout(checkMatch,500);
            lock = true;
        }
        click.play();
    }
}

const checkMatch = () => {
    let allIcons = document.querySelectorAll("img");
    const option1 = selectedCardsId[0];
    const option2 = selectedCardsId[1];

    if(selectedCards[0] === selectedCards[1]){
        foundedPairs.push(selectedCards);
        score.textContent = `Moves: ${numberOfMoves += 1}`;
    }
    else{
        allIcons[option1].setAttribute("src", "img/QuestionMark.png");
        allIcons[option2].setAttribute("src", "img/QuestionMark.png");
        score.textContent = `Moves: ${numberOfMoves += 1}`;
    }
    selectedCards = [];
    selectedCardsId = [];
    lock = false;

    if(foundedPairs.length === Icons.length/2){
        result.textContent = `Congratulations, you found all pairs in ${numberOfMoves} tries!`;
        reset.style.display = "inline-block";
    }
}


reset.addEventListener("click", () => window.location.reload());



addGrid();