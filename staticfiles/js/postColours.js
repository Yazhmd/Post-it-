document.addEventListener('DOMContentLoaded', () => {
    const colors = ['bg-color-1', 'bg-color-2', 'bg-color-3']; // Available background classes
    const postElements = document.querySelectorAll('.postholder');

    postElements.forEach(post => {
        // Pick a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        post.classList.add(randomColor); // Assign the random background class
    });
});