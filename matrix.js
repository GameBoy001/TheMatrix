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

// Call the typeText function when the page loads
function a() {
    text = "Wake up."
    typeText("typedText", text, 320); // Adjust 100 for typing speed (ms between characters) 
};

function b() {
    text = "The Matrix Has You."
    typeText("typedText", text, 100); // Adjust 100 for typing speed (ms between characters) 
};

function c() {
    text = "The Red Pill."
    typeText("typedText", text, 200); // Adjust 100 for typing speed (ms between characters) 
};

function d() {
    text = "or..."
    typeText("typedText", text, 600); // Adjust 100 for typing speed (ms between characters) 
};

function e() {
    text = "The Blue Pill."
    typeText("typedText", text, 200); // Adjust 100 for typing speed (ms between characters) 
};

function f() {
    text = "You Choose."
    typeText("typedText", text, 0); // Adjust 100 for typing speed (ms between characters) 
    
    button = document.createElement('button');
    // Set button properties (optional)
    button.classList.add("button");
    button.textContent = "Red Pill"

    // Add an event listener (optional)
    button.addEventListener('click', function() {
    alert('Red Pill');
    });

    button1 = document.createElement('button1');
    // Set button properties (optional)
    button1.classList.add("buttonone");
    button1.textContent = "Blue Pill"

    // Add an event listener (optional)
    button1.addEventListener('click', function() {
    alert('Blue Pill');
    });

    // Append the button to the document body
    document.body.appendChild(button);
    document.body.appendChild(button1);
};

setTimeout(a);

setTimeout(b, 5000);

setTimeout(c, 9000);

setTimeout(d, 14000);

setTimeout(e, 19000);

setTimeout(f, 24000);
