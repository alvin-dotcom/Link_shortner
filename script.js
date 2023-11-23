let btn = document.getElementById("shorten");
btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`http://tinyurl.com/api-create.php?url=${longURL}`);
    const data = await result.text();

    console.log(data);
    shortURL.value = data;
}
