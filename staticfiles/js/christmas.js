/* jshint esversion: 6 */
/* global bootstrap */
document.addEventListener('mousemove', (event) => {
    const faceContainer = document.getElementById('face-container');
    const eyes = document.querySelectorAll('.eye');

    // Get the face container’s bounding box
    const faceRect = faceContainer.getBoundingClientRect();

    eyes.forEach((eye) => {
        // Get eye center
        const eyeCenterX = faceRect.left + faceRect.width / 2;
        const eyeCenterY = faceRect.top + faceRect.height / 2;

        // Calculate the angle based on mouse position
        const angleX = event.clientX - eyeCenterX;
        const angleY = event.clientY - eyeCenterY;
        const angle = Math.atan2(angleY, angleX);

        // Calculate eye movement within a limited radius
        const moveRadius = 5; // Limit the movement to fit within the socket
        const moveX = Math.cos(angle) * moveRadius;
        const moveY = Math.sin(angle) * moveRadius;

        // Move the eye
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    
});

document.addEventListener('DOMContentLoaded', () => {
    const lightsContainers = document.querySelectorAll('.christmas-lights');
    const colors = ['red', 'green', 'yellow', 'blue', 'orange']; // Array of colors

    // Function to determine the number of bulbs based on screen size
    function getBulbCount() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024) {
            return 48; // Desktop: 48 bulbs
        } else if (screenWidth >= 768) {
            return 35; // Tablet: 35 bulbs
        } else {
            return 19; // Mobile: 19 bulbs
        }
    }

    // Function to update the bulbs for a single container
    function updateBulbs(container) {
        // Get the appropriate number of bulbs based on the screen width
        const bulbCount = getBulbCount();

        // Clear any existing bulbs in the container
        container.innerHTML = '';

        // Add the bulbs dynamically based on the screen size
        for (let i = 0; i < bulbCount; i++) {
            const bulb = document.createElement('div');
            bulb.classList.add('bulb');

            // Assign a color from the array, cycling through the colors
            const color = colors[i % colors.length]; // Cycle through colors
            bulb.style.backgroundColor = color;

            // Assign a unique animation delay for flickering effect
            bulb.style.animationDelay = `${(i * 0.2) % 1}s`; // Delay ranges from 0s to 0.8s

            container.appendChild(bulb);
        }
    }

    // Function to update bulbs for all containers
    function updateAllBulbs() {
        lightsContainers.forEach(container => {
            updateBulbs(container);
        });
    }

    // Initialize the bulbs
    updateAllBulbs();

    // Update bulbs when the window is resized
    window.addEventListener('resize', updateAllBulbs);
});
