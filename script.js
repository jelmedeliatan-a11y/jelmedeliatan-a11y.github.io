function Randomizes() {
    // Get the paragraph element
    const text = document.querySelector('p');
    
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply the color to the text
    text.style.color = randomColor;
    
    // Optional: Add a little "wit" to the text change
    const phrases = ["Hello World!"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    text.innerText = randomPhrase;
}