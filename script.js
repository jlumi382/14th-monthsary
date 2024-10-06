document.addEventListener('DOMContentLoaded', () => {
    const trickyButton = document.querySelector('.tricky-button');

    if (!trickyButton) {
        console.error("Button not found!");
        return;
    }

    trickyButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - trickyButton.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - trickyButton.clientHeight));

        trickyButton.style.position = 'absolute';
        trickyButton.style.left = `${randomX}px`;
        trickyButton.style.top = `${randomY}px`;
    });
});
