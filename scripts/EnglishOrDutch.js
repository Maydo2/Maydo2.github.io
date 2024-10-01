let englishText = false;

function changeLanguage(language){
    if (language === "english"){
        englishText = true;
    }
    else if(language === "dutch"){
        englishText = false;
    }
    console.log(englishText);
}