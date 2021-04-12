const navButton = document.querySelector(".navbar__nav-button");

navButton.addEventListener("click", function(e) {
    const navList = document.querySelector(".navbar__nav-list");

    navList.classList.toggle("navbar__nav-list--open");
});


const toggleChat = document.querySelector('.chat__header');

toggleChat.addEventListener("click", function (e) {
    const chat = document.querySelector(".chat");
    chat.classList.toggle('chat--open');
});
