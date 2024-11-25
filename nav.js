var button = document.getElementById("nav-button");
var sidenav = document.getElementById("side-nav");

button.addEventListener("click", function open_close_Nav() {
    if (sidenav.classList.contains("active")) {
        sidenav.classList.remove("active");
    } else {
        sidenav.classList.add("active");
    }
});