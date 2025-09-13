var configJson = {

    row: 5,

    column: 6,

    questions: [

        'Քանի՞ զավակ ուներ Հակոբը',
'Ո՞ր թռչունը ստիպեց քարին լացել:',
'Քանի՞ տարեկան էր Աբրահամը, երբ որ ծնվեց Իսահակը',
'Ո՞ւմ էին ուզում առաջինը սպանել Հիսուսի պատճառով',
'Քանի՞ արդար էր պետք Սոդոմը չկործանելու համար',
'Ո՞րն էր Հովսեփի հաջողությունների պատճառը',
'Ո՞ր մարգարեի անունն է վերջից սկիզբ նույն ձև կարդացվում',
'Փարավոնն ի՞նչ դրեց Հովսեփի անունը, ի՞նչ էր նշանակում',
'Ի՞նչ համ ուներ Մանանան',
'Քանի՞ օր մնաց Նոյը Տապանում',
'Որքա՞ն էր Տապանի երկարությունը',
'Որտե՞ղ դնենք Աստծո Խոսքը և ինչի՞ վրա կապենք',
'Ո՞ր քաղաքում աշակերտներն առաջին անգամ կոչվեցին քրիստոնյա',
'Ի՞նչ էր նշանակում Հակոբ անունը',
'Ո՞վ մի զարկով ջարդեց հազար',
'Ո՞ր քարոզիչը տխրեց, որ իր քարոզից ապաշխարեցին մարդիկ',
'Կենդանի էր խոտ էր ուտում, սատկեց արյուն էր խմում',
'Հիսուսի նահատակված առաջին առաքյալը',
'Ո՞ւմ մեղք սիրող աչքերը հանեցին փղշտացիները',
'Վերջին դատավորը',
'Ո՞ւմ էին ուղղված Ղուկաս և Գ. Առաքելոց գրքերը',
'Ամենաշատ անձրևը',
'Ամենափոքր նավաստին',
'Տիմոթեոսը ինչո՞վ պետք է օրինակ լիներ Հավատացյալներին',
'Երբ ստեց Աստված չպատժեց, երբ ճիշտը ասեց պատժվեց',
'Որ համարն է 2 տարբեր գրքերում, բայց նույն գլխում ու նույն խոսքում գրված',
'Քանի թագավորների դեմ էր մարտնչում Իսրայելը Հեսուի գլխավորությամբ, երբ արևը կանգ առավ',
'4 ավետարաններից որո՞ւմ առակ չկա',
'Սիրո առաջին հատկանիշը',
'Ո՞ր ավետարանում է գրված «Անառակ որդու առակը»'

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
