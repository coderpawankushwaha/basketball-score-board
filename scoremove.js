let count1=0
// for home score board.
let change=document.getElementById("board1")

function homeincrement1(){
    count1+=1
    change.textContent=count1
}
function homeincrement2(){
    count1+=2
    change.textContent=count1
}
function homeincrement3(){
    count1+=3
    change.textContent=count1
}
// for guest score board.
let count2=0
let change1=document.getElementById("board2")

function guestincrement1(){
    count2+=1
    change1.textContent=count2
}
function guestincrement2(){
    count2+=2
    change1.textContent=count2
}
function guestincrement3(){
    count2+=3
    change1.textContent=count2
}