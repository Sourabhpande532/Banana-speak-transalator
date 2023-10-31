const userName = prompt("What's your Name ?");
const userWelcomeMessage = "Hey! Welcome, " + userName;

alert(userWelcomeMessage);
const userButton = document.querySelector(".btn");
userButton.addEventListener("click", ()=>{
    alert("user is clicking")
}) 