function chooseLanguage(language){
    if (language === "english"){
        localStorage.setItem("language", "en");
    }
    else if(language === "dutch"){
        localStorage.setItem("language", "nl");
    }
}

function changeLanguage(){
    if (localStorage.getItem("language") === "en"){
        localStorage.setItem("language", "nl");
    }
    else if(localStorage.getItem("language") === "nl"){
        localStorage.setItem("language", "en");
    }
}

function setTopBarTextAboutMe() {
    //const topBarContent = document.getElementById("topBarContent");
    const topBarContentAboutMe = document.getElementById("topBarContentAboutMe");

    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        topBarContentAboutMe.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> About Me </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projects </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> Resume </a>`
    }
    else{
        topBarContentAboutMe.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> Over Mij </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projecten </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> CV </a>`
    }
}

function setTopBarTextProject() {
    //const topBarContent = document.getElementById("topBarContent");
    const topBarContentProjects = document.getElementById("topBarContentProjects")

    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        topBarContentProjects.innerHTML = `
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> About Me </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projects </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> Resume </a>`
    }
    else{
        topBarContentProjects.innerHTML = ` 
        <a class="aboutMeBtn topBtn" href="englishAboutMe.html"> Over Mij </a>
        <a class="projectsBtn topBtn" href="englishProjects.html"> Projecten </a>
        <a class="resumeBtn topBtn" href="../CV/CV Jacques Raaijmakers 2022.pdf" target="_blank"> CV </a>`
    }
}

function setAboutMeText() {
    const aboutMeContent = document.getElementById("aboutMeContent");

    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        aboutMeContent.innerHTML = `<p class="topText">About me</p>
            Welcome to my portfolio page. <br> 
            My name is Jacques Raaijmakers, I'm studying as a software developer. 
            I'm currently in my second year at SintLucas Eindhoven.`;
    }
    else{
        aboutMeContent.innerHTML = `<p class="topText">Over mij</p>
            Welkom op mijn portfolio site. <br>
            Mijn naam is Jacques Raaijmakers, ik ben in opleiding als software developer.
            Ik zit momenteel in mijn tweede jaar op het SintLucas Eindhoven.`;
    }
}

function setProjectText() {
    const projectContent = document.querySelector(".content");
    console.log(localStorage.getItem("language"));

    if (localStorage.getItem("language") === "en"){
        projectContent.innerHTML = `<h1>Projects</h1>
        <div class="projects">
            <a href="ProjectPages/TopDownGame_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>2D Game</h2>
                        <img src="../images/TopDownGame/TopDownEditor.jpg" alt="TopDownGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                        For this project I created a top-down game to challenge myself
                        twith a new aspect in the gaming world.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/ShoppingCart_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>JS Shopping Cart</h2>
                        <img src="../images/JS_ShoppingCart/JS_ShoppingCart.jpg" alt="JavaScript Assignment" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            For this project we had te learn the basics of Javascript. 
                            With this basic understanding of JS we had a foundation to build upon.
                        </p>
                        <ul class="languages">
                            <li>JavaScript</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/2D_PVP_Game_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>2D Game</h2>
                        <img src="../images/2DGame/2DGameMenu.jpg" alt="2DGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            I had to make a 2D game for a school project.
                            This game is made in unity and coded in C#.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/ProjectPlay_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>Play Project</h2>
                        <img src="../images/PlayProject/PlayMenu.jpg" alt="PlayProject" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            This was the first group project to make a game.
                            We were a group of three digital designers and 2 software developers.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="./ProjectPages/ZombieGameEnglish.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>Project Zombie Game</h2>
                        <img src="../images/ZombieGame/EditorInGame.jpg" alt="ZombieGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            My self-made 3D zombie game, in which I used C# to code the game within Unity.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="./ProjectPages/First_3D_Game_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>XYZ</h2>
                        <img src="../images/XYZ/XYZBattle.jpg" alt="XYZGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            This was the first 3D project I got to make during my first year. 
                            It is made in Unity and coded in C#.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>`;
    }
    else{
        projectContent.innerHTML = `<h1>Projecten</h1>
        <div class="projects">
            <a href="ProjectPages/TopDownGame_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>2D Game</h2>
                        <img src="../images/TopDownGame/TopDownEditor.jpg" alt="TopDownGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            For this project I created a top-down game to challenge myself
                            twith a new aspect in the gaming world.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/ShoppingCart_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>JS Shopping Cart</h2>
                        <img src="../images/JS_ShoppingCart/JS_ShoppingCart.jpg" alt="JavaScript Assignment" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            For this project we had te learn the basics of Javascript. 
                            With this basic understanding of JS we had a foundation to build upon.
                        </p>
                        <ul class="languages">
                            <li>JavaScript</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/2D_PVP_Game_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>2D Game</h2>
                        <img src="../images/2DGame/2DGameMenu.jpg" alt="2DGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            I had to make a 2D game for a school project.
                            This game is made in unity and coded in C#.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="ProjectPages/ProjectPlay_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>Play Project</h2>
                        <img src="../images/PlayProject/PlayMenu.jpg" alt="PlayProject" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            This was the first group project to make a game.
                            We were a group of three digital designers and 2 software developers.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="./ProjectPages/ZombieGameEnglish.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>Project Zombie Game</h2>
                        <img src="../images/ZombieGame/EditorInGame.jpg" alt="ZombieGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            My self-made 3D zombie game, in which I used C# to code the game within Unity.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
            <a href="./ProjectPages/First_3D_Game_English.html">
                <div class="project">
                    <div class="project-image-block">
                        <h2>XYZ</h2>
                        <img src="../images/XYZ/XYZBattle.jpg" alt="XYZGame" />
                    </div>
                    <div class="project-text-block">
                        <p>
                            This was the first 3D project I got to make during my first year. 
                            It is made in Unity and coded in C#.
                        </p>
                        <ul class="languages">
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>`;
    }
}