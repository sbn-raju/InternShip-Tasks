let input = document.querySelector(".ans-display");
let btns = document.querySelectorAll(".btns");
let string = "";
for(let btn of btns){
    btn.addEventListener("click",()=>{
        if(btn.innerText == "C"){
            string = "";
            input.value = string;
        }
        else if(btn.innerText == "<="){
            string = string.slice(0,string.length-1);
            input.value = string;
        }
        else{
        string = string + btn.innerText;
        input.value = string;
        let result = document.querySelector(".orange");
        result.addEventListener("click",()=>{
            string = eval(string);
            input.value = string;
        }) ;
    }   
    });
}