/*---------------- SMOOTH SCROOL ANCHORS -----------------*/
var logo = document.getElementById("logo"),
    about = document.getElementById("btnAbout"),
    work = document.getElementById("btnWork"),
    contact = document.getElementById("btnContact");

logo.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:{y:"header", offsetY:400}});
}

about.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#about"});
}

work.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#work"});
}

contact.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#socials"});
}