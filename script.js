const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.getElementById("question")

questionEl.innerText = `What is ${num1} multiply by ${num2}`

const scoreEl = document.getElementById("score")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const correctAns = num1*num2;

let scor = JSON.parse(localStorage.getItem("scor"))
if(!scor){
    scor = 0
}
scoreEl.innerText = `score: ${scor}`



formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value
    if(userAns ===correctAns ){
        scor++;
        updateLocalStorage()
    }
    else{
        scor--;
        updateLocalStorage()
    }

});

function updateLocalStorage(){
    localStorage.setItem("scor",JSON.stringify(scor))
}

function clearResult(){
    document.getElementById("restart").value=''
    scoreEl.innerText = `score: ${0}`
    scor = 0
    // window.location.reload()
}