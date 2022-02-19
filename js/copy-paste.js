var buttonCopy = document.querySelector("#button-copy");
var buttonPaste = document.querySelector("#button-paste");


buttonCopy.addEventListener("click", function(event) {
    console.log("clic Copy");
    event.preventDefault();

    //copy
    var text = document.getElementById("inputExit");
    text.select();
    document.execCommand('copy');
});

buttonPaste.addEventListener("click", function(event) {
    console.log("clic Paste");
    event.preventDefault();

    //paste 
    var text = document.getElementById("inputExit");
    document.getElementById("input").value = text.value.toString();
});