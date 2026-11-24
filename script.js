console.log("hello world")

function changeLetter(letter) {
    tester.textContent = letter;
}

let currentSize = 15
function changeFontSize(delta){
    currentSize = currentSize + delta;

    if (currentSize < 5) {
        currentSize = 5;
    }
    tester.style.fontSize = `${currentSize}px`;

    console.log(currentSize);
}