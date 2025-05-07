import { animateDarkModeToggle } from '../utils/animate.js';

/**
 * Dark mode
 */

// Update classes
function handleLightAndDarkMode() {
    const chosenMode = document.querySelector('.toggle');
    const body = document.body;
    
    chosenMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    })
    
    window.onload = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            chosenMode.classList.toggle('is-active')
            animateDarkModeToggle(chosenMode)
        }
    }
}

// Dark mode toggle event listener
function handleDarkModeToggle() {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('is-active')
        animateDarkModeToggle(toggle)
    })
}

export { handleLightAndDarkMode, handleDarkModeToggle }