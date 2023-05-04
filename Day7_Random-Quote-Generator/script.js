//  get the element from the DOM 
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");


//Array of the quote

const quote =[
    {
        text:"The only way to do great work is to love what you do",
        author: "Steve Jobs"
    },
    {
        text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy dean"
    },
    {
        text: "The two most important days in your life are the day you born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        text: "Success is not final, failure is not fatal; It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "You miss 100% of the shots you don't take",
        author: "Wayne Gretzky"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    }
    ,
    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
        author:"James Cameron" 
    }
    ,
    {
        text:"Live as if you were to die tomorrow. Learn as if you were to live forever." ,
        author:"Mahatma Gandhi" 
    }
    ,
    {
        text: "Let none find fault with others; let none see the omissions and commissions of others. But let one see one’s own acts, done and undone.",
        author: "Buddha"
    }
    ,
    {
        text:"The greatest religion is to be true to your own nature. Have faith in yourselves." ,
        author:"Swami Vivekananda" 
    }
    ,
    {
        text:"For One Who Has Conquered His Mind, A Mind Is Best Of Friends, But For One Who Has Failed To Do So, A Mind Is The Greatest Enemy." ,
        author: "Lord Krishna"
    }
    ,
    {
        text:"Start where you are. Use what you have. Do what you can." ,
        author: "Arthur Ashe"
    }
    ,
    {
        text:"Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. Let the brain, the body, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success, and this is the way great spiritual giants are produced." ,
        author: "Swami Vivekananda"
    }
];

// generate the random quotes
function getRandomQuote(){
    return quote[Math.floor(Math.random()*quote.length)]
}

//update and display quote and the author
function displayQuote(){
    const {text, author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent =author;
}

//Tweet the current quote
function tweetQuote(){
    const tweetText =`${quoteText.textContent} - ${quoteAuthor.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeuRLComponenet(tweetText)}`;
    window.open(tweetUrl);
}

//Event Listener
newQuoteButton.addEventListener("click", displayQuote);
tweetQuoteButton.addEventListener("click", tweetQuote);

//Initial Quote Display
displayQuote();
