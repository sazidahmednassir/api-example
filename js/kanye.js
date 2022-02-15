const loadQuotes =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote=>{
const qelement= document.getElementById('quote');
qelement.innerText= quote.quote;
}