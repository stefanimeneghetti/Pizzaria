const navButton = document.querySelector(".navbar__nav-button");

navButton.addEventListener("click", function(e) {
    const navList = document.querySelector(".navbar__nav-list");

    navList.classList.toggle("navbar__nav-list--open");
});


