let start=0;
let value=document.querySelector(".value")
let bodyColor=document.querySelector("body")
let btn=document.querySelector("button")




let incement=document.querySelector(".increment")
incement.addEventListener("click", ()=>{
    start++;
    // if(start==2){
    //     bodyColor.style.backgroundColor="red"
    // }
    // else  if(start==3){
    //     bodyColor.style.backgroundColor="green"
    // }
    // else  if(start==4){
    //     bodyColor.style.backgroundColor="yellow"
    // }
    // else  if(start==5){
    //     bodyColor.style.backgroundColor="orange"
    // }
    // else  if(start){
    //     bodyColor.style.backgroundColor=""
    // }
    

    if(start==5){
        incement.style.backgroundColor="rgb(10, 206, 193)"
        incement.style.border="none"
        incement.style.color="white"
    }
    else if(start==10){
        incement.style.backgroundColor="rgb(10, 206, 193)"
        incement.style.border="none"
        incement.style.color="white"

    }
    else{
        incement.style.backgroundColor=""
        incement.style.border="none"
        incement.style.color="white"
    }
   
    if(start==10){
        value.style.color="blue"
    }

    else{
        value.style.color="black"
    }
value.innerHTML=start;

})

let Reset=document.querySelector(".reset")
Reset.addEventListener("click", ()=>{
    start=0
    if(start==0){
        value.style.color="red"
    }
    bodyColor.style.backgroundColor="rgb(84, 121, 121)"
value.innerHTML=start;
})

let desriment=document.querySelector(".desriment")
desriment.addEventListener("click", ()=>{
    if(start>0){
        start--;

    //     if(start==2){
    //     bodyColor.style.backgroundColor="red"
    // }
    // else  if(start==3){
    //     bodyColor.style.backgroundColor="green"
    // }
    // else  if(start==4){
    //     bodyColor.style.backgroundColor="yellow"
    // }
    // else  if(start==5){
    //     bodyColor.style.backgroundColor="orange"
    // }
    // else  if(start){
    //     bodyColor.style.backgroundColor=""
    // }

    if(start==5){
        desriment.style.backgroundColor="rgb(63, 63, 118)"
        desriment.style.border="none"
    }
    else if(start==10){
        desriment.style.backgroundColor="rgb(63, 63, 118)"
        desriment.style.border="none"

    }
    else{
        desriment.style.backgroundColor=""
        desriment.style.border="none"
    }
   
        if(start==0){
            value.style.color="red"
        } 
        else if(start==10){
            value.style.color="blue"
        }
        else{
            value.style.color="black"
        }
         
    }
value.innerHTML=start;
})




