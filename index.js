const textArea = document.querySelector("#textbox")
const userTranslateButton = document.querySelector("#btn-translate");
const displayMessage = document.querySelector("#output")
displayMessage.innerHTML = "<h1>Hey,This is sourabh</h1>"

userTranslateButton.addEventListener("click", ()=>{
    // console.log(textArea.value);
    displayMessage.innerText = "Done! fdjfdkf dfdjf " + textArea.value;
}) 