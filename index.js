    const menuIcon = document.getElementById("menuicon");
    const sideNav = document.getElementById("sidenav");
    const closeNav = document.getElementById("close-nav");

    menuIcon.addEventListener("click", function () {
        sideNav.style.right = "0";
    });

    closeNav.addEventListener("click", function () {
        sideNav.style.right = "-50%";
    });

