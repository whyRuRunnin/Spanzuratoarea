document.getElementById("add").onclick = function() {
    var text = document.getElementById("inputWord").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("list").innerHTML = li;
}
var counterLose = 0;
var counterWin = 0;
var cond = 0;

document.getElementById("guess").onclick = function() {
    let textWord = document.getElementById("inputWord").value;
    let textGuess = document.getElementById("inputGuess").value;
    if (counterWin < textWord.length && counterLose < 15) {
        cond = 0;
        for (var i = 0; i < textWord.length; ++i) {
            if (textGuess === textWord[i]) {
                ++counterWin;
                cond = 1;
                console.log("You got it right!")
                console.log(counterWin);
            }
        }
        if (cond == 0) {
            ++counterLose;
            console.log("You have", 15 - counterLose, "more chances");
        }
    }
    if (counterWin == textWord.length) {
        console.log("you won");
    } else if (counterLose == 15) {
        console.log("you lost");
    }
}