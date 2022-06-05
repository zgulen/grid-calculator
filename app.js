let operate = document.querySelector("#operation")
let operate1 = document.querySelector("#operation1")
let result = document.getElementById("result")

window.addEventListener("load", () => {
    sessionStorage.setItem("operation", operate)
    sessionStorage.setItem("result", result)
})

let numbersDiv = document.querySelector(".container")

numbersDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("numbers")) {
        result.innerHTML += event.target.innerText
        console.log(event.target.innerHTML);

    } else if (event.target.classList.contains("symbols")) {
        document.onclick = operator => {
            if (operator.target.innerText == "-") {
                console.log("yaklaşıyoruz");
                operate.innerText = result.innerText
                operate1.innerHTML += " -"
                result.innerHTML = ""
            }
            else if (operator.target.innerText == "+") {
                console.log(operator.target.innerText);
                operate.innerText = result.innerText
                operate1.innerHTML += " +"
                result.innerHTML = ""

            }
            else if (operator.target.innerText == "x") {
                console.log(operator.target.innerText);
                operate.innerText = result.innerText
                operate1.innerHTML += " x"
                result.innerHTML = ""
            }
            else if (operator.target.innerText == "÷") {
                console.log(operator.target.innerText);
                operate.innerText = result.innerText
                operate1.innerHTML += " ÷"
                result.innerHTML = ""
            }
            else if (operator.target.innerText == "=") {
                console.log(operator.target.innerText);
                if (operate1.innerHTML == " -") {
                    operate1.innerHTML += result.innerText
                    result.innerHTML = operate.innerHTML - result.innerText
                    operate.innerHTML = ""
                    operate1.innerHTML = ""
                    result.style.fontSize = "2rem"
                }
                if (operate1.innerHTML == " +") {
                    operate1.innerHTML += result.innerText
                    result.innerHTML = Number(operate.innerHTML) + Number(result.innerText)
                    operate.innerHTML = ""
                    operate1.innerHTML = ""
                    result.style.fontSize = "2rem"
                }
                if (operate1.innerHTML == " x") {
                    operate1.innerHTML += result.innerText
                    result.innerHTML = Number(operate.innerHTML) * Number(result.innerText)
                    operate.innerHTML = ""
                    operate1.innerHTML = ""
                    result.style.fontSize = "2rem"
                }
                if (operate1.innerHTML == " ÷") {
                    operate1.innerHTML += result.innerText
                    result.innerHTML = Number(operate.innerHTML) / Number(result.innerText)
                    operate.innerHTML = ""
                    operate1.innerHTML = ""
                    result.style.fontSize = "2rem"
                }
            }
        }

    } else if (event.target.classList.contains("top3")) {
        console.log("extra işlemler");
        symbols()

    }

})

console.log(document.querySelectorAll(".contai").innerHTML)
const symbols = document.onclick = changer => {
    if (changer.target.innerText == "±") {
        result.innerHTML = -result.innerHTML
        if (operate.innerHTML){
            operate.innerHTML = -operate.innerHTML
        }
    }
    if (changer.target.innerText == "AC") {
        console.log(changer.target.innerText);
        document.getElementById("operation").innerHTML = ""
        document.getElementById("operation1").innerHTML = ""
        document.getElementById("result").innerHTML = ""
    }
}

