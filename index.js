const textArea = document.querySelector("#textbox");
const userTranslateButton = document.querySelector("#btn-translate");
const displayMessage = document.querySelector("#output");

// const serverUrl =
//   "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const serverUrl = "https://api.funtranslations.com/translate/minion.json";
console.log(encodeURI(serverUrl));

const getTranslateUrl = (text) => {
  return serverUrl + "?" + "text=" + text;
};

function errorHandler(error) {
  console.log("error occured " + error);
  alert("something wrong with server try again after some time");
}

userTranslateButton.addEventListener("click", () => {
  /* taking input */
  const inputText = textArea.value;

  /* calling server for processing */
  fetch(getTranslateUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedUrl = json.contents.translated;
      displayMessage.innerText = translatedUrl;
    })

    .catch(errorHandler);
});
