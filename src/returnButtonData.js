const calcButtons = document.querySelectorAll('.calc_button');
let clickedButtonData;


function fetchClickedButtonData() {
    // Print to screen
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            let type = button.getAttribute('button-type');
            let textContent = button.textContent;
            if(type == 'num') {
                clickedButtonData = parseInt(textContent);
            } else if (type == 'math') {
                clickedButtonData = textContent;
            } else {
                clickedButtonData = textContent;
            }
        })
    })
}
fetchClickedButtonData()

export  { clickedButtonData };