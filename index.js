const serverUrl = "https://api.funtranslations.com/translate/minion.json";

const textArea = document.querySelector("#textbox");
const userTranslateButton = document.querySelector("#btn-translate");
const displayOutputMessage = document.querySelector("#output");

// Construct & generate the translation API URL with the provided text
const getTranslateUrl = (text) => {
  return serverUrl + "?" + "text=" + text;
};

function errorHandler(error) {
  console.log("error occured " + error);
  alert("something wrong with server try again after some time");
}

// Event listener for the translation button click
userTranslateButton.addEventListener("click", () => {
// Get the input text from the textarea
const inputText = textArea.value;

  // Perform a fetch request to the translation API
fetch(getTranslateUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
     if(!json.contents || !json.contents.translated) {
        throw new Error("Invalid response format from the server");
      }

      let translatedUrl = json.contents.translated;
      displayOutputMessage.innerText = translatedUrl;
    })

    .catch(errorHandler);
});
