const apiURl = "https://api.quotable.io/random";
const quote = document.getElementById("quoteMessage");
const author = document.getElementById("quoteAutor");


async function getQuote(url) {
    const response  =await fetch(url);
    var data = await response.json();
    console.log(data);

    
    quote.textContent = data.content;

    
    author.textContent = data.author;
    
}
getQuote(apiURl);

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} ` + "  -----by  "+author.innerHTML,"Tweet window", "width=600" , "height=300");
}
