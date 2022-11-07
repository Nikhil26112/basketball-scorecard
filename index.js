// const homescore = document.getElementById("home-score")
// const awayscore = document.getElementById("away-score")

let hsc = 0
let asc = 0
function increment1home() {
    hsc += 1
    document.getElementById("home-score").innerText = hsc
}
function increment2home() {
    hsc += 2

    document.getElementById("home-score").innerText = hsc
}
function increment3home() {

    hsc += 3
    document.getElementById("home-score").innerHTML = hsc
}

function increment1away() {
    asc += 1
    document.getElementById("away-score").innerHTML = asc

}
function increment2away() {
    asc += 2
    document.getElementById("away-score").innerHTML = asc

}
function increment3away() {
    asc += 3
    document.getElementById("away-score").innerHTML = asc
} 

function newgame(){
    asc=0
    hsc=0
    document.getElementById("away-score").innerHTML = asc
    document.getElementById("home-score").innerText = hsc
}