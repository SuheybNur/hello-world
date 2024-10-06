// Select the paragraph and buttons
const paragraph = document.querySelector('#text');
const changeButton = document.querySelector('#change-btn');
const resetButton = document.querySelector('#reset-btn');

// Store the original text
const originalText = paragraph.textContent;

// Function to change the paragraph text
function changeText() {
    paragraph.textContent = "Hello, World!";
}

// Function to reset the paragraph text
function resetText() {
    paragraph.textContent = originalText;
}

// Add event listeners to the buttons
changeButton.addEventListener('click', changeText);
resetButton.addEventListener('click', resetText);
