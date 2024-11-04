function updateCountdown() {
    const targetDate = new Date("2025-06-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

// Get the modal
var modal = document.getElementById("photo-modal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-img");
var galleryItems = document.querySelectorAll(".gallery-item img");
var currentIndex = 0;

galleryItems.forEach(function(item, index) {
    item.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the next and previous buttons
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];

// Show the next photo
next.onclick = function() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

// Show the previous photo
prev.onclick = function() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuButton.addEventListener('click', function () {
        console.log("asdasdasdas");
        dropdownMenu.classList.toggle('show');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const forWomenLink = document.querySelector('.service-link[href="#"]');
    const forWomenSubmenu = document.getElementById('for-women-submenu');
    const firstLevel = document.querySelector(".first-level .submenu");

    const subMenu = document.querySelector('.root-submenu');
    subMenu.addEventListener('click', function() {
        console.log("submenu open first");
        subMenu.querySelector('.first-level').classList.add('open');
    });

    firstLevel.addEventListener('click', function() {
        console.log("submenu open second");
        subMenu.querySelector('.first-level').classList.add('open');
        firstLevel.querySelector('.second-level').classList.toggle('open');
    });

    // For Men
    const forMenLink = document.querySelector('.service-link[href="#men"]');
    const forMenSubmenu = document.getElementById('for-men-submenu');
    const menFirstLevel = document.querySelector(".men-first-level .submenu");

    const menSubMenu = document.querySelector('.men-root-submenu');
    menSubMenu.addEventListener('click', function() {
        console.log("men submenu open first");
        menSubMenu.querySelector('.men-first-level').classList.add('open');
    });

    menFirstLevel.addEventListener('click', function() {
        console.log("men submenu open second");
        menSubMenu.querySelector('.men-first-level').classList.add('open');
        menFirstLevel.querySelector('.men-second-level').classList.toggle('open');
    });
});








