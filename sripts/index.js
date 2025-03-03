var configJson = {
    row: 1,
    column: 11,
    questions: ['Արթուր Բաբայան',
'Ալվարդ Դալլաքյան',
'Վահե Պետրոսյան',
'Միսակ Մանուկյան',
'Արմեն Գասպարյան',
'Երանուհի Տեր-Մովսիսյան',
'Սուրեն Խաչատրյան',
'Անուշ Դոլուխանյան',
'Արեն Կարապետյան',
'Գոհար Գրիգորյան',
'Լիաննա Խաչատրյան'
    ]
}
var draw = function () {
    configJson.questions = shuffle(configJson.questions);
    let wrapper = document.getElementsByClassName("wrapper")[0].classList.remove("hide");
    let board = document.getElementById("board");
    for (let i = 0; i < configJson.row; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for (let j = 0; j < configJson.column; j++) {
            div.innerHTML += "<button class='button' id='i_" + (i*configJson.column+j) + "' onclick='getQuastion(" + (i*configJson.column+j) + ", this)'>" + (i*configJson.column+j+1) + "</button>";
        }
        board.append(div);        
    }
    let newGameButton = document.getElementById("newGame");
    newGameButton.classList.add("hide");
}
var getQuastion = function (i, el) {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.replace("jq-hide", "jq-show");
    console.log(el);
    el.classList.add("clicked");
    el.setAttribute("disabled",true);
    let question = document.getElementById("question");
    question.innerText = configJson.questions[i];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function closeDialog() {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.replace("jq-show", "jq-hide");
}
