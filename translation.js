var Translatebtn = document.querySelector("#translate-btn");
var Inputtextarea = document.querySelector("#input-textarea");
var Outputtextarea = document.querySelector("#output-textarea");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function clickHandler() {
    var inputtext = Inputtextarea.value;
    fetch(getTranslationURL(inputtext))
        .then(response => response.json())
        .then(json => {
            var Translatedtxt = json.contents.translated
            Outputtextarea.innerText = Translatedtxt; 
        })
        .catch(e => console.log(e));
}


Translatebtn.addEventListener("click", clickHandler);