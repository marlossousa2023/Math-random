const buttonClick = document.querySelector("button")

function randomSort(){
    const inputMin = Math.ceil(document.querySelector(".min-input").value)
    const inputMax = Math.floor(document.querySelector(".max-input").value)

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin

    alert(result)


}




buttonClick.addEventListener('click', randomSort)