function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const result = document.getElementById('result');
    const modal = document.getElementById('myModal');

    if (isPalindrome(inputText)) {
        result.textContent = `${inputText} is a palindrome!`;
    } else {
        result.textContent = `${inputText} is not a palindrome.`;
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
