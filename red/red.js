// Text that will be typed

// Function to simulate typing effect
function typeText(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ''; // Clear any previous content

    // Function to add one character at a time
    function addCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(addCharacter, speed); // Calls itself recursively with delay
        }
    }
    // Start the typing effect
    addCharacter();
}

let myAudio = document.querySelector('audio')

// Call the typeText function when the page loads
function a() {
    text = "Knock, Knock."
    typeText("typedText", text, 0); // Adjust 100 for typing speed (ms between characters) 
    myAudio.play()
};

setTimeout(a);
