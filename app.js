let operate = document.querySelector("#operation")
let operate1 = document.querySelector("#operation1")
let result = document.getElementById("result")

window.addEventListener("load", () => {
    sessionStorage.setItem("operation", operate)
    sessionStorage.setItem("result", result)
})

let numbersDiv = document.querySelector(".container")

numbersDiv.addEventListener("click", (event) => {
    console.log();
    if (result.innerHTML.length <= 8) {

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
                    operate1.innerHTML += " *"
                    result.innerHTML = ""
                }
                else if (operator.target.innerText == "÷") {
                    console.log(operator.target.innerText);
                    operate.innerText = result.innerText
                    operate1.innerHTML += " /"
                    result.innerHTML = ""
                }else if(operator.target.innerText == "."){
                    result.innerHTML = result.innerHTML + "."
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
                    if (operate1.innerHTML == " *") {
                        operate1.innerHTML += result.innerText
                        result.innerHTML = Number(operate.innerHTML) * Number(result.innerText)
                        operate.innerHTML = ""
                        operate1.innerHTML = ""
                        result.style.fontSize = "2rem"
                    }
                    if (operate1.innerHTML == " /") {
                        operate1.innerHTML += result.innerText
                        result.innerHTML = Number(operate.innerHTML) / Number(result.innerText)
                        operate.innerHTML = ""
                        operate1.innerHTML = ""
                        result.style.fontSize = "2rem"
                    }
                    document.onclick = changer => {
                        symbols(changer)
                    }
                }
            }
        } else if (event.target.classList.contains("top3")) {
            document.onclick = changer => {
                symbols(changer)
            }
        }
    }
})

console.log(document.querySelectorAll(".contai").innerHTML)
const symbols = changer => {
    if (changer.target.innerText == "±") {
        result.innerHTML = -result.innerHTML
        if (operate.innerHTML) {
            operate.innerHTML = - operate.innerHTML
        }
    }
    else if (changer.target.innerText == "AC") {
        console.log(changer.target.innerText);
        document.getElementById("result").innerHTML = ""
        changer.target.innerText = "C"

    } else if (changer.target.innerText == "C") {
        document.getElementById("operation1").innerHTML = ""
        document.getElementById("operation").innerHTML = ""
        changer.target.innerText = "AC"
    } else if (changer.target.innerText == "%") {
        result.innerHTML /= 100;
    }
}

