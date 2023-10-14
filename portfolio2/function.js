var tabLink = document.getElementsByClassName("open-tab-link");
var tabContent = document.getElementsByClassName("tab-content");

function opentab(tabName, event) {
    for (var i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove('active-l');
    }

    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active-c')
    }

    event.currentTarget.classList.add('active-l');
    document.getElementById(tabName).classList.add('active-c');
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}