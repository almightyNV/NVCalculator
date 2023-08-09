let result = '';

function dis() {
    result = eval(result)
    document.getElementById('result').innerHTML = result;
}

function clr() {
    result = '';
    document.getElementById('result').innerHTML = '';
}

function add(val) {
    if (val == 0 || val == 1 || val == 2 || val == 3 ||
        val == 4 || val == 5 || val == 6 || val == 7 ||
        val == 8 || val == 9 || val == '.' || val == '+' ||
        val == '-' || val == '*' || val == '/' || val == '%') {
        result += val;
    }
    document.getElementById('result').innerHTML = result;
}

function remove() {
    document.getElementById('result').innerHTML = result;
}