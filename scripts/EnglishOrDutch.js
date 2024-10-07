function changeLanguage(language){
    if (language === "english"){
        localStorage.setItem("language", "en");
    }
    else if(language === "dutch"){
        localStorage.setItem("language", "nl");
    }
}

function setTopBarText() {
    //const topBarContent = document.getElementById("topBarContent");
    let topBarContentAboutMe = document.querySelector(".topBarContentAboutMe")
    let topBarContentProjects = document.querySelector(".topBarContentProjects")

    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        topBarContentAboutMe.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> About Me </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projects </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> Resume </a>`

        topBarContentProjects.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> About Me </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projects </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> Resume </a>`

    }
    else{
        topBarContentAboutMe.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> Over Mij </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projecten </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> CV </a>`

        topBarContentProjects.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> About Me </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projects </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> Resume </a>`

    }
}

function setAboutMeText() {
    const aboutMeContent = document.getElementById("aboutMeContent");

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

function setProjectText() {
    const projectContent = document.getElementById("projectContent");
    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        projectContent.innerHTML = `<p class="topText">About Me</p>
            Welcome to my portfolio page. <br> 
            My name is Jacques Raaijmakers, I'm studying as a software developer. 
            I'm currently in my second year at Sintlucas Eindhoven.`;
    }
    else{
        projectContent.innerHTML = `<p class="topText">Over mij</p>
            Welkom op mijn portfolio site. <br>
            Mijn naam is Jacques Raaijmakers, ik ben in opleiding als software developer.
            Ik zit momenteel in mijn tweede jaar op het Sintlucas Eindhoven.`;
    }
}