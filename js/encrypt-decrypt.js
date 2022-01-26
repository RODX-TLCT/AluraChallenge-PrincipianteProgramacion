var buttonEncrypt = document.querySelector("#button-encrypt");
var buttonDecrypt = document.querySelector("#button-decrypt");
var formInput = document.querySelector("#add-text");

let text

// capture click
buttonEncrypt.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("clic encrpt");
    encryptText(formInput);
});

buttonDecrypt.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("clic Decrpt");
    decryptText(formInput);
});

// capture form info to apply encrypt and decrypt
function encryptText(formInput) {
    text = formInput.input.value.toLowerCase();

    text = text.replace(new RegExp("e", 'g'), "enter");
    text = text.replace(new RegExp("i", 'g'), "imes");
    text = text.replace(new RegExp("a", 'g'), "ai");
    text = text.replace(new RegExp("o", 'g'), "ober");
    text = text.replace(new RegExp("u", 'g'), "ufat");
    text = text.replace(new RegExp("[àáâãäå\æçèéêëìíîïñòóôõöœùúûüýÿ\1234567890]", 'g'), "");

    document.getElementById("inputExit").value = text.toLowerCase();
    console.log(text);
}

function decryptText(formInput) {
    text = formInput.input.value.toLowerCase();

    text = text.replace(new RegExp("enter", 'g'), "e")
    text = text.replace(new RegExp("imes", 'g'), "i")
    text = text.replace(new RegExp("ai", 'g'), "a")
    text = text.replace(new RegExp("ober", 'g'), "o")
    text = text.replace(new RegExp("ufat", 'g'), "u")

    document.getElementById("inputExit").value = text.toLowerCase();
    console.log(text);
}