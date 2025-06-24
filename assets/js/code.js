// Function to copy the Arduino code to the clipboard
function copyCode() {
    // Get the text field containing the code
    var codeText = document.getElementById("arduinoCode").innerText;

    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(codeText).then(function() {
        // Provide feedback to the user
        var feedback = document.getElementById("copyFeedback");
        feedback.textContent = "Code copied to clipboard!";
        feedback.style.color = 'green';
    }).catch(function(error) {
        // Handle any errors that occur while copying
        console.error("Failed to copy text: ", error);
        var feedback = document.getElementById("copyFeedback");
        feedback.textContent = "Failed to copy code. Please try again.";
        feedback.style.color = 'red';
    });
}