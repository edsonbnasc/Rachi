const headerlinks = document.querySelector(".nav_bar")
document.getElementById("handleNavbar").addEventListener("click",()=>{headerlinks.classList.toggle("open")})

(function () {
    headerlinks.classList.remove("open");
}());