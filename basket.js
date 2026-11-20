let zeroEl = document.getElementById("zero-el")
let zero2EL = document.getElementById("zero2-el")

let count = 0
let countEl = 0


function one(){
    count+=1
    zeroEl.textContent = count
}

function two(){
    count +=2
     zeroEl.textContent = count
}

function three(){
    count+=3
     zeroEl.textContent = count
}
function one1(){
    countEl+=1
    zero2EL.textContent = countEl
    
}

function two2(){
    countEl+=2
     zero2EL.textContent = countEl
   
}

function three3(){
    countEl+=3
     zero2EL.textContent = countEl
   
}

function newgame(){
    count = 0
    countEl = 0

    zeroEl.textContent = count
     zero2EL.textContent = countEl

}