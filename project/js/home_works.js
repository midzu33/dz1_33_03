const EMAIL_REGEXP = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

const input = document.querySelector('input');
input.addEventListener('input', onInput);

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

//move block

const block = document.getElementById(1);

function move(element, from, to, step, delay) {
    let position = parseInt(element.style.left, 10);
    position = isNaN(position) ? from : position;
    if (position >= to) {
        position = from;
    } else {
        position += step;
    }
    element.style.left = position + "px";
    setTimeout(function () {
        move(element, from, to, step, delay);
    }, delay)
}

move(block, 1, 445, 1, 5);