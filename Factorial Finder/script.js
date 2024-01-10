function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

function calculateFactorial() {
    var userInput = document.getElementById("numberInput").value;
    var number = parseInt(userInput);

    if (!isNaN(number)) {
        var result = factorial(number);
        document.getElementById("resultMessage").innerHTML = "Factorial of " + number + " is: " + result;
    } else {
        document.getElementById("resultMessage").innerHTML = "Invalid input. Please enter a valid number.";
    }
}