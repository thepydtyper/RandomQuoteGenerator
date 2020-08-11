/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * An array containing objects consisting of quotes and their properties.
***/
const quotes = [
    {quote: "I'm your Huckleberry.",
    source: "Doc Holliday",
    citation: "Tombstone",
    year: 1993,
    actor: "Val Kilmer"},

    {quote: "Game Over, man! It's Game Over!",
    source: "Private Hudson",
    citation: "Aliens",
    year: 1986,
    actor: "Bill Paxton"},

    {quote: "Second star to the right and straight on 'til morning.",
    source: "Capt Kirk",
    citation: "Star Trek: The Undiscovered Country",
    year: 1991,
    actor: "William Shatner"},

    {quote: "My friends.. you bow to no one.",
    source: "Aragorn",
    citation: "The Lord of the Rings: The Return of the King",
    year: 2003,
    actor: "Viggo Mortensen"},

    {quote: "I am a Jedi, like my father before me.",
    source: "Luke Skywalker",
    citation: "Star Wars: Return of the Jedi",
    year: 1983,
    actor: "Mark Hammill"},

    {quote: "Clever girl..",
    source: "Robert Muldoon",
    citation: "Jurassic Park",
    year: 1993,
    actor: "Bob Peck"},

    {quote: "You're gonna need a bigger boat..",
    source: "Brody",
    citation: "Jaws",
    year: 1975,
    actor: "Roy Scheider"},

    {quote: "Boy is she gullible! Everybody knows Buddy Holly runs a bait and tackle shop in Phoenix.",
    source: "Alf",
    citation: "Alf Season 3",
    year: 1989,
    actor: "self"},

    {quote: "It's like in the great stories, Mr. Frodo. The ones that really mattered. " +
            "Full of darkness and danger they were. And sometimes you didn't want to know the end… " +
            "because how could the end be happy? How could the world go back to the way it was when so much bad had happened? " +
            "But in the end, it’s only a passing thing… this shadow. Even darkness must pass.",
    source: "Samwise Gamgee",
    citation: "The Lord of the Rings: The Two Towers",
    year: 2002,
    actor: "Sean Astin"}
];

/***
 * Generates a random number from a range based upon the length of the quotes array.
 * Returns the quote object at that index.
***/
function getRandomQuote()
{
    const quotesLength = quotes.length;
    let randomNum = Math.floor(Math.random() * Math.floor(quotesLength));

    return quotes[randomNum];
}

/***
 * Generates random RGB values to create a new background color.
 * Changes the background color property of index.html's body tag.
***/
function changeBackgroundColor()
{
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
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
    let quote = getRandomQuote();
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