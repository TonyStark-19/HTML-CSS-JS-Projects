//  js logic

const quote = document.getElementById("quote");
const author = document.getElementById("author");

// quote API
const API_URL = "https://quotes-api-self.vercel.app/quote";

// fetch quote
async function getQuote(url) {

    // fetch response
    const response = await fetch(url);
    var data = await response.json();

    // display the quote + author
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

// call api function
getQuote(API_URL);

// tweet function
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +
        " ---- by" + author.innerHTML, "Tweet Window", "width=600, height=300");
}