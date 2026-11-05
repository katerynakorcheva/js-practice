function showTextLater(text, delay) {
    setTimeout(function () {
        console.log(text);
    }, delay);
}
showTextLater("You can show it after 3s", 3000);
