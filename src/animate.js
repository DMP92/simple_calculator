import gsap from 'gsap';

function getCSSVar(variable) {
    return getComputedStyle(document.body).getPropertyValue(variable);
}

function animateButtonPress(button) {
    let keyDown = gsap.timeline({ defaults: { duration: 0.01, ease: "bounce.out" }})
    keyDown.to(button.children[0], {
        justifySelf: 'start',
        width: '100%',
        duration: '250ms'
    }).to(button.children[0], {
        justifySelf: 'end',
        width: '0%',
        delay: 0.25,
        duration: '250ms',
        onComplete () {
            button.children[0].style = '';
        }
    })
}

function animateDarkModeToggle(toggle) {
    if(toggle.classList.contains('is-active')) {
        gsap.to(toggle, {
            xPercent: 100,
            duration: '250ms',
            ease: 'expo.inOut'
        })
    } else {
        gsap.to(toggle, {
            xPercent: 0,
            duration: '250ms',
            ease: 'expo.inOut'
        })
    }
}


export { animateButtonPress, animateDarkModeToggle }