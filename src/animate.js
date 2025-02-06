import gsap from 'gsap';

function animateButtonPress(button) {
    console.log(button, 'animation works')
    gsap
        .to(button, {
            backgroundColor: 'coral',
            ease: 'power1.inOut',
            duration: '150ms'
        })
}

export { animateButtonPress }