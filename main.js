let navMenu = document.getElementById("nav-items");
let navMenuIcon = document.getElementById("hamburger");
let closeMenu = document.getElementById("closeMenu");
navMenuIcon.onclick = function(){

    navMenu.style.display = "block";
    navMenuIcon.style.display = "none";
    closeMenu.style.display = "block";
    console.log("Menu Clicked");
}


closeMenu.onclick = function(){

    navMenu.style.display = "none";
    navMenuIcon.style.display = "block";
    closeMenu.style.display = "none";
    console.log("Close Menu Clicked");
}
