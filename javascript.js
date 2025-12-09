let you_won=0;
let comp_won=0;

const choices=document.querySelectorAll(".image-box");
let msg=document.querySelector("#msg");
let winner=document.querySelector(".winner");
let score=document.querySelector("#score");
let s_com=document.querySelector("#s_com");

const comp_choice=()=>{
   let option=["rock","paper","scissors"];
   let idx=Math.floor(Math.random()*3);
   return option[idx];
}
const showWinner=(user_win,user_choice,computer_choice)=>{
    if(user_win){
        console.log("you won");
        msg.innerText=`You Win! Your ${user_choice} beats ${computer_choice}`;
        winner.style.backgroundColor="green";
        you_won++;
        score.innerText=you_won;
    }
    else{
        console.log("you lose")
        msg.innerText=`You Lose. ${computer_choice} beats Your ${user_choice}`;
        comp_won++;
        winner.style.backgroundColor="#081b31";
        s_com.innerText=comp_won;
    }
}

const playgame=(user_choice)=>{
   console.log("user-choice",user_choice);
   const computer_choice=comp_choice();
   console.log("computer-choice",computer_choice);
   
   if(user_choice === computer_choice){
    console.log("draw");
    msg.innerText="Game was Draw. Play Again.";
    winner.style.backgroundColor="red";
   }else{
    let user_win=true;
    if(user_choice==="rock"){
        user_win=computer_choice==="paper"? false:true;
    }else if(user_choice==="paper"){
        user_win=computer_choice==="scissors"? false:true;
    } else{
        user_win=computer_choice==="rock"? false:true;
    }
    showWinner(user_win,user_choice,computer_choice);

   }
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        playgame(user_choice);
    })
})