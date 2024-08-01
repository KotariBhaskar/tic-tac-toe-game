let boxs=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector(".msg");
let wmsg=document.querySelector("#w-msg");


let turnO=true;
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    checkwinner();
    });  
});

const showWinner=(winner)=>{
    wmsg.innerText=`CONGRATULATIONS!!!...., Winner is ${winner}`;
    boxs.disabled=true;
    if(count==9){
        wmsg.innerText=`Match draw!!`;
    }
    msg.classList.remove("hide");

}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}


const checkwinner=() =>{
    for(pattern of winPatterns){
        let posval1=boxs[pattern[0]].innerText;
        let posval2=boxs[pattern[1]].innerText;
        let posval3=boxs[pattern[2]].innerText;
        
        if(posval1!=""&&posval2!=""&&posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                disableBoxes();
                showWinner(posval1);
            } 
            else if (count==9) {
                console.log("match draw");
            }  

        }
        
    } 
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
