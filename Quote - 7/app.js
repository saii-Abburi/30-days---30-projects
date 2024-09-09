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
function copyQuote(){
    let quoteText = document.getElementById("quoteMessage").innerText;
    navigator.clipboard.writeText(quoteText);
    let copymessage = document.getElementById("alert");
    copymessage.innerHTML = "Copied";
    copymessage.style.display = "block";

    setTimeout(() => {
        copymessage.style.display = "none"
    }, 2000);
}