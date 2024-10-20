
// Access All buttons ,id and class and intialize the value of turn(player)
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let turnO= true;
let newbtn =document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//ther are sime winning pattern in array form
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 // access all the boxes(button) for playing the game and disabled same button after each click and 
 //check who is winner
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText ="X";
            turnO =false;  
        }
        else{
            box.innerText ="O";
            turnO =true;
        }
        box.disabled = true;  
        checkWinner();
    });
});
// after wining no any player click the button 
const disableBoxes =()=>{
    for( let box of boxes){
        box.disabled= true;
    }
}
// after reset and newGame this is enabled all button for click 
const enableBoxes =()=>{
      for(let box of boxes){
        box.disabled =false;
        box.innerText="";
      }
}
 // when we try to reset game after some time 
const resetGame= ()=>{
    turn0  =true;
    enableBoxes();
    msgcontainer.classList.add("hide");    //hide class active after add
}
// this is show which player is winner
const showWinner =(winner)=>{
    msg.innerHTML =`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
//// this is check which player is winner
  const checkWinner =()=>{
    for(let pattern of winPatterns){
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val =  boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
          
           if(pos1val !="" && pos2val !="" && pos3val !=""){   //check all postion is not empty
             if(pos1val === pos2val  && pos2val ===pos3val){    // if not empty the check value is same or not 
                console.log("you are winner");
                showWinner(pos1val);
            }
        }         
    }
}
newbtn.addEventListener("click",resetGame);  // click in newgame button after winning
resetbtn.addEventListener("click",resetGame); //click in resetbutton 