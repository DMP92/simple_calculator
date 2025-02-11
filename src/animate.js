import gsap from 'gsap';

function getCSSVar(variable) {
    return getComputedStyle(document.body).getPropertyValue(variable);
}

function animateButtonPress(button) {
    let keyDown = gsap.timeline({ defaults: { duration: 0.01, ease: "bounce.out" }})
    
    keyDown.to(button, {
        y: 5,
        filter: `${getCSSVar('--pressed-button-filter')}`
    }).to(button, {
        y: 0,
        filter: `${getCSSVar('--button-filter')}`,
        delay: 0.135
    })
}

function animateDarkModeToggle(toggle) {
    if(toggle.classList.contains('is-active')) {
        gsap.to(toggle, {
            xPercent: 0,
            duration: '250ms',
            ease: 'expo.inOut'
        })
    } else {
        gsap.to(toggle, {
            xPercent: 100,
            duration: '250ms',
            ease: 'expo.inOut'
        })
    }
}


export { animateButtonPress, animateDarkModeToggle }