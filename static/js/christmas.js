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
