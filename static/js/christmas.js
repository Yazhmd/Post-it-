document.addEventListener('mousemove', (event) => {
    const faceContainer = document.querySelector('.face-container');
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
    const lightsContainer = document.querySelector('.christmas-lights');
    const colors = ['red', 'green', 'yellow', 'blue', 'orange']; // Array of colors
    
    // Function to determine the number of bulbs based on screen size
    function getBulbCount() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth >= 1024) {
            return 48;  // Desktop: 27 bulbs
        } else if (screenWidth >= 768) {
            return 35;  // Tablet: 18 bulbs
        } else {
            return 19;  // Mobile: 12 bulbs
        }
    }

    // Function to update the bulbs
    function updateBulbs() {
        // Get the appropriate number of bulbs based on the screen width
        const bulbCount = getBulbCount();
        
        // Clear any existing bulbs in the container
        lightsContainer.innerHTML = '';

        // Add the bulbs dynamically based on the screen size
        for (let i = 0; i < bulbCount; i++) {
            const bulb = document.createElement('div');
            bulb.classList.add('bulb');
            
            // Assign a color from the array, cycling through the colors
            const color = colors[i % colors.length]; // Cycle through colors
            bulb.style.backgroundColor = color;

            // Assign a unique animation delay for flickering effect
            bulb.style.animationDelay = `${(i * 0.2) % 1}s`; // Delay ranges from 0s to 0.8s

            lightsContainer.appendChild(bulb);
        }
    }

    // Initialize the bulbs
    updateBulbs();

    // Update bulbs when the window is resized
    window.addEventListener('resize', updateBulbs);
});