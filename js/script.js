/***
 * Generates a random number from a range based upon the length of the quotes array.
 * Returns the quote object at that index.
***/
function getRandomQuote()
{
    const quotesLength = quotes.length;
    const randomNum = Math.floor(Math.random() * Math.floor(quotesLength));

    return quotes[randomNum];
}

/***
 * Generates random RGB values to create a new background color.
 * Changes the background color property of index.html's body tag.
***/
function changeBackgroundColor()
{
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    document.body.style.backgroundColor =  `rgb( ${red}, ${blue}, ${green} )`;
}

/***
 * Calls the getRandomQuote function to get a quote object.
 * Creates an HTML string incorporating the quote, source, and other optional properties of that object.
 * Also calls the changeBackgroundColor function to set a new random color.
 * Returns a call to update the HTML of the quote-box element on the index.html page.
***/
function printQuote()
{
    const quote = getRandomQuote();
    let html = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

    if (quote.actor)
    {
        html += `<span class="actor"> (${quote.actor})`;
    }

    if ( quote.citation )
    {
        html += `<span class="citation">${quote.citation}</span>`;
    }

    if (quote.year)
    {
        html += `<span class="year">${quote.year}</span>`;
    }


    html += '</p>';

    changeBackgroundColor();

    return document.getElementById('quote-box').innerHTML = html;
}

/***
 * Uses the setInterval method to call the printQuote function every 10 seconds
***/
const refreshTimer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);