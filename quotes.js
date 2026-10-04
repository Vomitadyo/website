// List of quotes. To add one, copy a line and edit the text and author.
const quotes = [
    { text: "If I have seen further, it is by standing on the shoulders of giants.", author: "Isaac Newton" },
    { text: "The important thing is not to stop questioning.", author: "Albert Einstein" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "Research is formalized curiosity. It is poking and prying with a purpose.", author: "Zora Neale Hurston" },
    { text: "Essentially, all models are wrong, but some are useful.", author: "George Box" },
    { text: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
	{ text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "I am, somehow, less interested in the weight and convolutions of Einstein's brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops.", author: "Stephen Jay Gould" },
    { text: "Research is to see what everybody else has seen, and to think what nobody else has thought.", author: "Albert Szent-Gyorgyi" }
];

const textEl = document.getElementById("quote-text");
const authorEl = document.getElementById("quote-author");
const blockEl = document.getElementById("quote-block");
let last = -1;

const DELAY = 20000;   // time each quote stays on screen, in milliseconds

// Pick a random quote, never the same one twice in a row
function showQuote() {
    let i;
    do {
        i = Math.floor(Math.random() * quotes.length);
    } while (i === last && quotes.length > 1);
    last = i;

    textEl.textContent = "\u201C" + quotes[i].text + "\u201D";
    authorEl.textContent = "\u2014 " + quotes[i].author;
}

// Fade out, swap the quote, fade back in
function changeQuote() {
    blockEl.classList.add("fade-out");
    setTimeout(function () {
        showQuote();
        blockEl.classList.remove("fade-out");
    }, 2000);   // matches the 0.5s transition in the CSS
}

showQuote();                        // show one when the page loads
setInterval(changeQuote, DELAY);    // then change automatically