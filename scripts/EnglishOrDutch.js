function changeLanguage(language){
    if (language === "english"){
        localStorage.setItem("language", "en");
    }
    else if(language === "dutch"){
        localStorage.setItem("language", "nl");
    }
}

function setAboutMeText() {
    const aboutMeContent = document.getElementById("content");

    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        aboutMeContent.innerHTML = `<p class="topText">About Me</p>
            Welcome to my portfolio page. <br> 
            My name is Jacques Raaijmakers, I'm studying as a software developer. 
            I'm currently in my second year at Sintlucas Eindhoven.`;
    }
    else{
        aboutMeContent.innerHTML = `<p class="topText">Over mij</p>
            Welkom op mijn portfolio site. <br>
            Mijn naam is Jacques Raaijmakers, ik ben in opleiding als software developer.
            Ik zit momenteel in mijn tweede jaar op het Sintlucas Eindhoven.`;
    }
}