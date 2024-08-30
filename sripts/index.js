var configJson = {
    row: 5,
    column: 6,
    questions: [
        'Տիմոթեոսը ինչո՞վ պետք է օրինակ լիներ Հավատացյալներին',
'Սուրբ Գրքում ամենաշատը որ վայրի կենդանին է հանդիպում',
'Հովսեփը քանի տարեկանում է եղել Եգիպտոսի կառավարիչ',
'Որ կնոջ անունն է ամենաշատը հանդիպում Սուրբ Գրքում',
'Ով է հարցրեց, կա արդյոք Տիրոջ համար անկարելի բան',
'Որ ծառից կախվեց Աբիսողոմը',
'Որ բառն է Աստվածաշնչում մեկ համարում 8 անգամ նշվում',
'Որն էր առաջին սուտը',
'Հոբը քանի երեխա ուներ',
'Որ համարն է 2 տարբեր գրքերում, բայց նույն գլխում ու նույն խոսքում գրված',
'Ինչ էր այն մարդու անունը ով պիտի պատմեր մեկին այն, ինչ ինքն էլ չգիտեր',
'Ովքեր Հին ուխտում մահացան քամուց',
'Ով ցանկացավ իր մահը ուժգին գլխացավի պատճառով',
'Ինչ էր այն մարգարեի անունը, ով ընդունեց լավ խրատ հեթանոս մարդուց',
'Երբ ստեց Աստված չպատժեց, երբ ճիշտը ասեց պատժվեց',
'Որերորդ օրը Աստված ստեղծեց ծառերը',
'Ո՞վ էր Հռովդեն',
'Ո՞վ ուներ 24 մատ',
'Քանի թագավորների դեմ էր մարտնչում Իսրայելը Հեսուի գլխավորությամբ, երբ արևը կանգ առավ',
'Որ քաղաքում էր ապրում 120000 մարդ, ովքեր չէին տարբերում աջ ձեռքը ձախից?',
'4 ավետարաններից որո՞ւմ առակ չկա',
'Աստվածաշնչի ո՞ր գրքում է հիշատակվում Հնդկաստանի մասին',
'Հակոբի ավագ որդուն անունը',
'Դուք շահում եք "Kit-Kat"',
'Դուք շահում եք "Snickers"',
'Դուք շահում եք "Bounty"',
'Դուք շահում եք "Twix"',
'Ինչու էր Կառլսոնը ապրում տանիքներում',
'Սիրո առաջին հատկանիշը',
'Առաջին սուտ արտահայտությունը'
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
