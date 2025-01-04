const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".name"),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),
    synth = speechSynthesis;

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent("https://favqs.com/api/qotd")}&timestamp=${new Date().getTime()}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const result = JSON.parse(data.contents); 
            if (result && result.quote) {
                quoteText.innerText = result.quote.body;
                authorName.innerText = result.quote.author || "Unknown";
            } else {
                throw new Error("Unexpected API response structure");
            }
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteText.innerText = "Oops! Couldn't fetch a quote.";
            authorName.innerText = "";
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "Try Again";
        });
}

speechBtn.addEventListener("click", () => {
    if (!quoteBtn.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", () => {
    console.log("Copy button clicked!"); 
    navigator.clipboard.writeText(quoteText.innerText)
        .then(() => {
            alert("Quote copied to clipboard!");
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error);
            alert("Failed to copy the quote. Please try again!");
        });
});

twitterBtn.addEventListener("click", () => {
    // let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText)}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

randomQuote();
