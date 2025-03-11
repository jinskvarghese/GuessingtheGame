const randomNum = Math.floor(Math.random() * 20 +1);                //generate random number from 1 to 20

var buttonclick= document.querySelector(".check");                  //event listener
buttonclick.addEventListener("click", ()=>{
    var ptext=document.querySelector(".message");
    var input = document.querySelector(".guess").value;
    var number = parseFloat(input);    
    var bgcolour=document.querySelector("body");
    var decscore=document.querySelector(".score");
    var high=document.querySelector(".highscore");
    if (number===randomNum) {                                       //for the correct answer
        ptext.textContent = "Correct Answer";
        bgcolour.style.backgroundColor = 'green';
        high.textContent = decscore.textContent;

    } else if(number>randomNum){                                    //for the higher numbers
        ptext.textContent = "Too High";
        bgcolour.style.backgroundColor = '#222';
        decscore.textContent-=1;
    } else{                                                         //for the lower numbers
        ptext.textContent = "Too Low";
        bgcolour.style.backgroundColor = '#222';
        decscore.textContent-=1;
    }
})
var buttonclick= document.querySelector(".again");                  //for reseting the whole page
buttonclick.addEventListener("click", ()=>{
    location.reload();
})