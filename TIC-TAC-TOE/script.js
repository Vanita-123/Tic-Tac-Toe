let box = document.querySelectorAll(".box");
let newgame=document.querySelector("#newgame");
let reset=document.querySelector("#resetgame");
let message=document.querySelector(".message");
let mes= document.querySelector("#mes");
let turnO =true;
let count =0;
//rules of tic-tac-tae
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// two player ̣, player O, playerX;
box.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
    turnO= false;
    }
        else{
        box.innerText ="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner = checkWinner();
    if(count === 9 && !isWinner){
        nowinner();
    }
 
    });
});
// winner is O and X  are condition
const checkWinner= ()=>{
    for(let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText; 
        let pos3Val=box[pattern[2]].innerText;
        if (pos1Val !="" && pos2Val != "" && pos3Val !=""){
        if (pos1Val === pos2Val && pos2Val ===pos3Val){
            showwinner(pos1Val);          
            return true;
        }}
    }
 };
 const nowinner =()=>{
    mes.innerText =`You are try again`;
    message.classList.remove("hide");
    disablebox();
 };
const showwinner=(winner) =>{
    mes.innerText= `congraulation Winner ${winner}`;
    message.classList.remove("hide");
    disablebox();
}; 
// box disable
    const disablebox =()=> {
    for (let show of box) {
        show.disabled=true;
        console.log("disable")
    }   
    };
    // box enable
    const enablebox =()=>
    {
    for (let show of box) {
        show.disabled =false;
        show.innerText= "";
    }   
    };
    //reset game
    const resetgame =()=>{
        turnO=true;
        enablebox();
        message.classList.remove("hide");
    };
    newgame.addEventListener("click",resetgame);
    reset.addEventListener("click",resetgame);
