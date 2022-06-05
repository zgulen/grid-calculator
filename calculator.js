let operation = document.getElementById("operation")
let result = document.getElementById("result")

let numbersDiv = document.querySelector(".container")
const calculator = numbersDiv.addEventListener("click", (calculate) =>{   
    console.log(calculate.target.innerText);
    if(calculate.target.innerText == "AC"){
        document.getElementById("result").innerText = ""
        document.getElementById("operation").innerText = ""
    }
    if(calculate.target.innerText == "="){
        let z = eval(document.getElementById("result").innerText)
        document.getElementById("result").innerText = z
    }else{
        if(!calculate.target.innerText.includes("AC")){
            document.getElementById("result").innerText += calculate.target.innerText
        }
    }
})

// function numbersDiv.addEventListener("click", (condition) =>{
    
// })