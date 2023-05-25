let btn = document.getElementById("Sbutton");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("inputurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}
let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("Cbutton");

copyButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}
let Curl = document.getElementById("shorturl");
let Cicon= document.getElementById("icon");
Cicon.onclick = ()=>{
    Curl.select();

    window.navigator.clipboard.writeText(Curl.value);
}


