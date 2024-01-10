function calculate(){
var x = Number(document.getElementById('x').value);
var y = Number(document.getElementById('y').value);
var op = document.getElementById('op').value;

switch (op) {
    case 'a':
        document.getElementById('result').innerText = x + '+' + y + '=' + (x+y);
        break;
    case 's':
        document.getElementById('result').innerText = x + '-' + y + '=' + (x-y);
        break;
    case 'm':
        document.getElementById('result').innerText = x + '*' + y + '=' + (x*y);
        break;
    case 'd':
        document.getElementById('result').innerText = x + '/' + y + '=' + (x/y);
        break;
    case 'e':
        document.getElementById('result').innerText = x + '**' + y + '=' + (x**y);
        break;
    case 'r':
        document.getElementById('result').innerText = x + '%' + y + '=' + (x%y);
        break;
    default:
        document.getElementById('result').innerText = 'Unknown Operation';         
}}

