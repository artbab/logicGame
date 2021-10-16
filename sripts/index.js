var configJson = {
    row: 5,
    column: 7,
    questions: [
        'Դուք շահում եք "Bounty"',
'Դուք շահում եք "Snickers"',
'Դուք շահում եք "Twix"',
'Հակոբի ավագ որդուն անունը',
'Ո՞վ էր Կիսը, ներկայացրեք մի դրվագ նրա կյանքից',
'Ինչ էր Սողոմոնի երկրորդ անունը և ինչ էր այն նշանակում',
'Քանի թագավորների դեմ էր մարտնչում Իսրայելը Հեսուի գլխավորությամբ, երբ արևը կանգ առավ',
'Որ քաղաքում էր ապրում 120000 մարդ, ովքեր չէին տարբերում աջ ձեռքը ձախից?',
'4 ավետարաններից որո՞ւմ առակ չկա',
'Աստվածաշնչի ո՞ր գրքում է հիշատակվում Հնդկաստանի մասին',
'Քանի մասի բաժանեցին Հիսուսի հանդերձները խաչին գամելուց հետո',
'Ո՞ր ավետարանում էր նշված Ղազարոսի մահը (ո՞ր գյուղից էր, ի՞նչ գիտեք իր մասին)',
'Քանի՞ «Ես եմ» է ասել Հիսուսը',
'Ո՞ւմ օրերում բաժանվեց երկիրը, ո՞ւմ սերունդից էր՝',
'Եգիպտոսի 10 պատուհասները',
'Ի՞նչ գիտեք Պենտեկոստեի մասին, ի՞նչ 50 օրվա մասին է խոսքը',
'Ո՞վ ուներ 24 մատ',
'Ո՞ր երկրի մայրաքաղաքն է Շուշանը, ո՞ր գրքերում է հիշատակվում այդ քաղաքի մասին',
'Ինչպես թագավոր օծվեց Սողոմոնը։',
'Ո՞ր երկրում էր ապրում Հոբը, որտեղի՞ց  ծանոթ այդ անունը։',
'Սիրո հատկանիշները',
'Հոգու պտուղը ․․․',
'Ի՞նչ է Աստծո արքայությունը։',
'Ի՞նչ տեսք ուներ մանանան և ի՞նչ ասեցին Իսրայելի որդիները, երբ տեսան այն',
'Քանի՞ գլուխ ունի Մարկոսի ավետարանը',
'Ո՞ր ավետարանում է նշվում, որ Հիսուսի գերեզմանի մոտ պահապաններ դրեցին',
'Ո՞ր ավետարանում է գրված «Անառակ որդու առակը»',
'Ո՞րն է նոր պատվիրանքը',
'Ի՞նչ են ապաստանի քաղաքները',
'Ասել Նոր Կտակարանի ցանկը',
'Ո՞վ էր Հռովդեն',
'Ո՞վ է մեծ երկնքի արքայության մեջ',
'Դուք շահում եք "Kit-Kat"',
'Ասեք Հիսուսի աշակերտների անունները',
'Տիմոթեոսը ինչո՞վ պետք է օրինակ լիներ Հավատացյալներին'
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
