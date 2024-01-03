
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendChar(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'error';
    }

}




