var configJson = {
    row: 6,
    column: 6,
    questions: [
        'Ի՞նչ էին անում իսրայելացիները ստրկության ժամանակ Եգիպտոսում',
        'Ո՞ր քաղաքներն են կառուցել իսրայելացիները Եգիպտոսում',
        'Ինչպե՞ս փրկվեց մահից Մովսեսը',
        'Ո՞ւր փախավ Մովսեսը Եգիպտոսից',
        'Տիրոջ հրեշտակը մորենիի միջից կրակի բոցով որտե՞ղ երևաց Մովսեսին',
        'Որտե՞ղ հանդիպեցին Մովսեսն ու Ահարոնը',
        'Իսրայելացիները որտեղի՞ց չվեցին և որտե՞ղ իջևանեցին',
        'Ո՞ր ճանապարհով տարավ Տերը Իսրայելացիներին և ինչո՞ւ',
        'Ո՞ր մասում էին իսրայելացիները, երբ բացվեց Կարմիր ծովը',
        'Որտե՞ղ դառը ջրերը դարձան քաղցր',
        'Որտե՞ղ էին 12 ջրի աղբյուրները և 70 արմավենիները',
        'Որտե՞ղ էին իսրայելացիները, երբ ստացան մանանան ու լորամարգիները',
        'Որտե՞ղ Տերը ասեց․ <<ժայռին զա՛րկ և ջուր կգա>>',
        'Որտե՞ղ տեղի ունեցավ պատերազմ Ամաղեկի հետ',
        'Որտե՞ղ տեղի ունեցավ Մովսեսի հանդիպումը Հոթորին և իր ընտանիքին',
        'Որտե՞ղ Տերը Մովսեսին տվեց 10 պատվիրանները',
        'Որտեղի՞ց ուղարկեցին լրտեսներին',
        'Քանի՞ լրտես ուղարկեցին',
        'Որտե՞ղ մահացավ և թաղվեց Մարիամը',
        'Որտե՞ղ մահացավ Ահարոնը',
        'Որտե՞ղ մահացավ Մովսեսը',
        'Նշեք ո՞ր վայրում Մովսեսը և Ահարոնը մեղք գործեցին',
        'Դուք շահում եք Bounty',
        'Դուք շահում եք Twix',
        'Դուք շահում եք Snickers',
        'Դուք շահում եք Mars',
        'Քանի՞ ավետարան կա Նոր Կտակարանում և որո՞նք են',
        'Նշեք Նոր Կտակարանի ընդհանրական թղթերը',
        'Նոր Կտակարանի մարագարեական գրքերը',
        'Նոր Կտակարանի պատմական գրքերը',
        'Թվեք Պողոսի թղթերը',
        'Թվարկեք Եգիպտոսի 10 հարվածները հերթականությամբ',
        'Ասեք 10 պատվիրանները հերթականությամբ',
        'Ինչպե՞ս էին հրեաները հայտվել Եգիպտոսում',
        'Քանի՞ օր պետք է հավաքեին մանանան',
        'Ինչքա՞ն ժամանակ մենք պետք է ուտենք հոգևոր հաց'
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
