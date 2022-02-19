var buttonClean = document.querySelector("#button-clean");

buttonClean.addEventListener("click", function(event) {
    console.log("clic Clean")
    event.preventDefault();

    document.getElementById("input").value = "";
    document.getElementById("inputExit").value = "";
});