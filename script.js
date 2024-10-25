// logos slider

const carouselContainer = document.getElementById('carouselContainer');

const carouselItems = carouselContainer.innerHTML;
carouselContainer.innerHTML += carouselItems;

let scrollLeft = 0;
const scrollSpeed = 4;


const animateCarousel = (timestamp) => {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    scrollLeft += scrollSpeed * deltaTime / 60;
    if (scrollLeft >= carouselContainer.scrollWidth / 2) {
        scrollLeft = 0;
    }
    carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;

    requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);


// members slider


document.addEventListener("DOMContentLoaded", function () {
    const memberCardsContainer = document.querySelector(".member-cards");
    const memberCards = Array.from(document.querySelectorAll(".member-card"));
    const cardWidth = memberCards[0].offsetWidth + 48;
    const visibleCardsCount = 3;
    let currentIndex = 0;

    const updatePosition = () => {
        if (window.innerWidth > 768) {  // Only apply transform on larger screens
            memberCardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
        updateButtonStates(); 
    }

    const updateButtonStates = () => {
        if (window.innerWidth <= 768) return; // Skip button state updates on mobile

        const leftButton = document.getElementById("left");
        const rightButton = document.getElementById("right");

        leftButton.disabled = currentIndex === 0;
        rightButton.disabled = currentIndex >= memberCards.length - visibleCardsCount;
    }

    const slideRight = () => {
        if (currentIndex < memberCards.length - visibleCardsCount) {
            currentIndex++;
            updatePosition();
        }
    }

    const slideLeft = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition();
        }
    }

    if (window.innerWidth > 768) {  // Only add button event listeners on larger screens
        document.getElementById("right").addEventListener("click", slideRight);
        document.getElementById("left").addEventListener("click", slideLeft);
    }

    updateButtonStates();
});



// burger menu


document.getElementById("burger").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");

    menu.classList.toggle("active");

    // Toggle the display of the burger and close icons
    if (menu.classList.contains("active")) {
        burgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        burgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});

// Toggle About Menu
const aboutMoreBtn = document.getElementById("about-plus");
const aboutMenus = document.querySelectorAll(".about-menu");
const aboutCloseIcon = aboutMoreBtn.querySelector(".close");
const aboutMoreIcon = aboutMoreBtn.querySelector("img:not(.close)");

// Event listener for the "more" icon
aboutMoreIcon.addEventListener("click", function () {
    console.log('clicl');
    // Show the about menu items
    aboutMenus.forEach(menu => {
        menu.style.setProperty("display", "flex", "important");
    });
    
    // Toggle visibility of icons
    aboutMoreIcon.style.display = "none";
    aboutCloseIcon.style.display = "block";
});

// Event listener for the "close" icon
aboutCloseIcon.addEventListener("click", function () {
    // Hide the about menu items
    aboutMenus.forEach(menu => {
        menu.style.setProperty("display", "none", "important");
    });
    
    // Toggle visibility of icons
    aboutCloseIcon.style.display = "none";
    aboutMoreIcon.style.display = "block";
});

// Toggle Service Menu
const serviceMoreBtn = document.getElementById("service-plus");
const serviceMenus = document.querySelectorAll(".service-menu");
const serviceCloseIcon = serviceMoreBtn.querySelector(".close");
const serviceMoreIcon = serviceMoreBtn.querySelector("img:not(.close)");

// Event listener for the "more" icon
serviceMoreIcon.addEventListener("click", function () {
    // Show the service menu items
    serviceMenus.forEach(menu => {
        menu.style.setProperty("display", "flex", "important");
    });
    
    // Toggle visibility of icons
    serviceMoreIcon.style.display = "none";
    serviceCloseIcon.style.display = "block";
});

// Event listener for the "close" icon
serviceCloseIcon.addEventListener("click", function () {
    // Hide the service menu items
    serviceMenus.forEach(menu => {
        menu.style.setProperty("display", "none", "important");
    });
    
    // Toggle visibility of icons
    serviceCloseIcon.style.display = "none";
    serviceMoreIcon.style.display = "block";
});
