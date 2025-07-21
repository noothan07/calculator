let expression = '';

function press(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    fetch('/calculate', {
        method: 'POST',
        body: JSON.stringify({ expression }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('display').value = data.result;
        expression = '';
    })
    .catch(err => {
        document.getElementById('display').value = 'Error';
        expression = '';
    });
}
