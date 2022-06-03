let operate = document.querySelector("#operation")
let operate1 = document.querySelector("#operation1")
let result = document.getElementById("result")

window.addEventListener("load", () => {
    sessionStorage.setItem("operation", operate)
    sessionStorage.setItem("result", result)
})

let numbersDiv = document.querySelector(".container")

numbersDiv.addEventListener("click", (event) =>{
    if(event.target.classList.contains("numbers")){
        operate.innerHTML += event.target.innerText
        console.log(event.target.innerHTML);

    }else if(event.target.classList.contains("symbols")){
            document.onclick = operator =>{
                if(operator.target.innerText == "-"){
                    console.log("yaklaşıyoruz");
                    operate1.innerHTML += operator.target.innerText
                    console.log(operate.innerHTML);
                    console.log(operate1.innerHTML);
                }
                else if(operator.target.innerText == "+"){
                    console.log(operator.target.innerText);
                    operate.innerHTML += operator.target.innerText
                    console.log(document.getElementById("operation").innerHTML);
                }
                else if(operator.target.innerText == "x"){
                    console.log(operator.target.innerText);
                    operate.innerHTML += operator.target.innerText
                }
                else if(operator.target.innerText == "÷"){
                    console.log(operator.target.innerText);
                    operate.innerHTML += operator.target.innerText
                }
                else if(operator.target.innerText == "="){
                    console.log(operator.target.innerText);
                    operate.innerHTML += operator.target.innerText
                }
            }

    }else if(event.target.classList.contains("top3")){
        console.log("extra işlemler");
        document.onclick = changer =>{
            if(changer.target.innerText == "AC"){
                console.log(changer.target.innerText);
                document.getElementById("operation").innerHTML = ""
                document.getElementById("operation1").innerHTML = ""
            }
        }
    }
    
})

console.log(document.querySelectorAll(".contai").innerHTML)