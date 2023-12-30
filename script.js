
function exit() {
    var nav = document.getElementById("nav");
    nav.style.display = ('none');
    document.getElementById('menu').style.display = ('block');
    document.getElementById('menu').style.opacity = ('0.5');
}
function reOpen() {
    var nav = document.getElementById("nav");
    nav.style.display = ('flex');
    document.getElementById('menu').style.display = ('none');
}
function openMenu(e) {
    for (let i = 1; i < 5; i++) {
        var ids = "dialog" + i;
        document.getElementById(ids).style.display =("none");
    }
    var id = e.className;
    document.getElementById(id).style.display = ("flex");
}
function closeMenu(e) {
    e.style.display = ("none");
}
function formating(e) {
    format = e;
}
function fullScreen() {
    if (fullS == false) {
        var el = document.getElementById('html');
        el.requestFullscreen();
        document.getElementById('full').src = "Assets/exitFS.png";
        fullS = true;
    } else {
        document. exitFullscreen();
        fullS = false;
        document.getElementById('full').src = "Assets/fullscreen.png";
    }
    
}
function chooseColor(e) {
    var color = e.value;
    document.getElementById("clock").style.color = (color);
    document.getElementById("nav").style.backgroundColor = ("white");
}
function chooseBGColor(e) {
    var color = e.value;
    document.getElementById("html").style.backgroundColor = (color);
}

function showMenu1() {
    document.getElementById('hide1').style.display = ("block");
}
function showMenu2() {
    document.getElementById('hide2').style.display = ("block");
}
function hideMenu1() {
    document.getElementById('hide1').style.display = ("none");
}
function hideMenu2() {
    document.getElementById('hide2').style.display = ("none");
}
function setColor(BG,C) {
    document.getElementById('html').style.backgroundColor = (BG);
    document.getElementById('clock').style.color = (C);
    document.getElementById('nav').style.backgroundColor =('white');
}
