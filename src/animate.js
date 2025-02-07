import gsap from 'gsap';

function animateButtonPress(button) {
    let keyDown = gsap.timeline({ defaults: { duration: 0.01, ease: "power1" }})
    let buttonFilterStyle = getComputedStyle(button).filter;
    let filterColor = buttonFilterStyle.match(/rgb\(\d+,\s*\d+,\s*\d+\)/gi)

    keyDown.to(button, {
        y: 5,
        filter: `drop-shadow(0px 0px 0px ${filterColor})`
    }).to(button, {
        y: 0,
        filter: `drop-shadow(0px 5px 0px ${filterColor})`,
        delay: 0.135
    })
}

export { animateButtonPress }