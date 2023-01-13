const board = 
[
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

let bábuhelye = function (Id) 
{
    let parsolt = parseInt(Id);
    return board.indexOf(parsolt);
};

const cellák = document.querySelectorAll("td");
let pirosbábuk = document.querySelectorAll("p");
let feketebábuk = document.querySelectorAll("span")
const osztó = document.querySelector("#osztó")

let kör = true;
let pirospontok = 12;
let feketepontok = 12;
let játszóbábuk;

let választotthely = 
{
    Id: -1,
    táblaindex: -1,
    királye: false,
    hetedikhely: false,
    kilencedikhely: false,
    tizennegyedikhely: false,
    tizennyolcadikhely: false,
    mínuszhetedikhely: false,
    mínuszkilencedikhely: false,
    mínusztizennegyedikedikhely: false,
    mínusztizennyolcadikhely: false
}

function klikkevent() 
{
    if (kör) {
        for (let i = 0; i < pirosbábuk.length; i++) {
            pirosbábuk[i].addEventListener("click", játszóbábukállása);
        }
    } else {
        for (let i = 0; i < feketebábuk.length; i++) {
            feketebábuk[i].addEventListener("click", játszóbábukállása);
        }
    }
}

function játszóbábukállása() 
{
    if (kör) {
        játszóbábuk = pirosbábuk;
    } else {
        játszóbábuk = feketebábuk;
    }
    klikkeltávolít();
    körvonalvissza();
}

function klikkeltávolít() 
{
    for (let i = 0; i < cellák.length; i++) {
        cellák[i].removeAttribute("onclick");
    }
}

function körvonalvissza() 
{
    for (let i = 0; i < játszóbábuk.length; i++) {
        játszóbábuk[i].style.border = "1px solid white";
    }
    kiválasztottbáburesi();
    kiválasztottbábu();
}

function kiválasztottbáburesi() 
{
    választotthely.Id = -1;
    választotthely.Id = -1;
    választotthely.királye = false;
    választotthely.hetedikhely = false;
    választotthely.kilencedikhely = false;
    választotthely.tizennegyedikhely = false;
    választotthely.tizennyolcadikhely = false;
    választotthely.mínuszhetedikhely = false;
    választotthely.mínuszkilencedikhely = false;
    választotthely.mínusztizennegyedikedikhely = false;
    választotthely.mínusztizennyolcadikhely = false;
}

function kiválasztottbábu() 
{
    választotthely.Id = parseInt(event.target.id);
    választotthely.táblaindex = bábuhelye(választotthely.Id);
    királye();
}

function királye() 
{
    if (document.getElementById(választotthely.Id).classList.contains("king")) {
        választotthely.királye = true;
    } else {
        választotthely.királye = false;
    }
    ürescellák();
}

function ürescellák() 
{
    if (board[választotthely.táblaindex + 7] === null && 
        cellák[választotthely.táblaindex + 7].classList.contains("üres") !== true) {
        választotthely.hetedikhely = true;
    }
    if (board[választotthely.táblaindex + 9] === null && 
        cellák[választotthely.táblaindex + 9].classList.contains("üres") !== true) {
        választotthely.kilencedikhely = true;
    }
    if (board[választotthely.táblaindex - 7] === null && 
        cellák[választotthely.táblaindex - 7].classList.contains("üres") !== true) {
        választotthely.mínuszhetedikhely = true;
    }
    if (board[választotthely.táblaindex - 9] === null && 
        cellák[választotthely.táblaindex - 9].classList.contains("üres") !== true) {
        választotthely.mínuszkilencedikhely = true;
    }
    validlépés();
}

function validlépés() 
{
    if (kör) 
    {
        if (board[választotthely.táblaindex + 14] === null 
        && cellák[választotthely.táblaindex + 14].classList.contains("üres") !== true
        && board[választotthely.táblaindex + 7] >= 12) 
        {
            választotthely.tizennegyedikhely = true;
        }
        if (board[választotthely.táblaindex + 18] === null 
        && cellák[választotthely.táblaindex + 18].classList.contains("üres") !== true
        && board[választotthely.táblaindex + 9] >= 12) 
        {
            választotthely.tizennyolcadikhely = true;
        }
        if (board[választotthely.táblaindex - 14] === null 
        && cellák[választotthely.táblaindex - 14].classList.contains("üres") !== true
        && board[választotthely.táblaindex - 7] >= 12) 
        {
            választotthely.mínusztizennegyedikedikhely = true;
        }
        if (board[választotthely.táblaindex - 18] === null 
        && cellák[választotthely.táblaindex - 18].classList.contains("üres") !== true
        && board[választotthely.táblaindex - 9] >= 12) 
        {
            választotthely.mínusztizennyolcadikhely = true;
        }
    } else 
    {
        if (board[választotthely.táblaindex + 14] === null 
        && cellák[választotthely.táblaindex + 14].classList.contains("üres") !== true
        && board[választotthely.táblaindex + 7] < 12 && board[választotthely.táblaindex + 7] !== null) 
        {
            választotthely.tizennegyedikhely = true;
        }
        if (board[választotthely.táblaindex + 18] === null 
        && cellák[választotthely.táblaindex + 18].classList.contains("üres") !== true
        && board[választotthely.táblaindex + 9] < 12 && board[választotthely.táblaindex + 9] !== null) 
        {
            választotthely.tizennyolcadikhely = true;
        }
        if (board[választotthely.táblaindex - 14] === null && cellák[választotthely.táblaindex - 14].classList.contains("üres") !== true
        && board[választotthely.táblaindex - 7] < 12 
        && board[választotthely.táblaindex - 7] !== null) 
        {
            választotthely.mínusztizennegyedikedikhely = true;
        }
        if (board[választotthely.táblaindex - 18] === null && cellák[választotthely.táblaindex - 18].classList.contains("üres") !== true
        && board[választotthely.táblaindex - 9] < 12
        && board[választotthely.táblaindex - 9] !== null) 
        {
            választotthely.mínusztizennyolcadikhely = true;
        }
    }
    bábukondíciók();
}

function bábukondíciók() {
    if (választotthely.királye) 
    {
        bábukörvonal();
    } else {
        if (kör) 
        {
            választotthely.mínuszhetedikhely = false;
            választotthely.mínuszkilencedikhely = false;
            választotthely.mínusztizennegyedikedikhely = false;
            választotthely.mínusztizennyolcadikhely = false;
        } else 
        {
            választotthely.hetedikhely = false;
            választotthely.kilencedikhely = false;
            választotthely.tizennegyedikhely = false;
            választotthely.tizennyolcadikhely = false;
        }
        bábukörvonal();
    }
}

function bábukörvonal() 
{
    if (választotthely.hetedikhely || választotthely.kilencedikhely || választotthely.tizennegyedikhely || választotthely.tizennyolcadikhely
    || választotthely.mínuszhetedikhely || választotthely.mínuszkilencedikhely || választotthely.mínusztizennegyedikedikhely || választotthely.mínusztizennyolcadikhely) 
    {
        document.getElementById(választotthely.Id).style.border = "3px solid green";
        cellaklikk();
    } else 
    {
        return;
    }
}

function cellaklikk() 
{
    if (választotthely.hetedikhely) 
    {
        cellák[választotthely.táblaindex + 7].setAttribute("onclick", "lépés(7)");
    }
    if (választotthely.kilencedikhely) 
    {
        cellák[választotthely.táblaindex + 9].setAttribute("onclick", "lépés(9)");
    }
    if (választotthely.tizennegyedikhely) 
    {
        cellák[választotthely.táblaindex + 14].setAttribute("onclick", "lépés(14)");
    }
    if (választotthely.tizennyolcadikhely) 
    {
        cellák[választotthely.táblaindex + 18].setAttribute("onclick", "lépés(18)");
    }
    if (választotthely.mínuszhetedikhely) 
    {
        cellák[választotthely.táblaindex - 7].setAttribute("onclick", "lépés(-7)");
    }
    if (választotthely.mínuszkilencedikhely) 
    {
        cellák[választotthely.táblaindex - 9].setAttribute("onclick", "lépés(-9)");
    }
    if (választotthely.mínusztizennegyedikedikhely) 
    {
        cellák[választotthely.táblaindex - 14].setAttribute("onclick", "lépés(-14)");
    }
    if (választotthely.mínusztizennyolcadikhely) 
    {
        cellák[választotthely.táblaindex - 18].setAttribute("onclick", "lépés(-18)");
    }
}

function lépés(szám) 
{
    document.getElementById(választotthely.Id).remove();
    cellák[választotthely.táblaindex].innerHTML = "";
    if (kör) 
    {
        if (választotthely.királye) 
        {
            cellák[választotthely.táblaindex + szám].innerHTML = `<p class="piroskirály" id="${választotthely.Id}"></p>`;
            pirosbábuk = document.querySelectorAll("p");
        } else 
        {
            cellák[választotthely.táblaindex + szám].innerHTML = `<p class="piros" id="${választotthely.Id}"></p>`;
            pirosbábuk = document.querySelectorAll("p");
        }
    } else 
    {
        if (választotthely.királye) 
        {
            cellák[választotthely.táblaindex + szám].innerHTML = `<span class="feketekirály" id="${választotthely.Id}"></span>`;
            feketebábuk = document.querySelectorAll("span");
        } else 
        {
            cellák[választotthely.táblaindex + szám].innerHTML = `<span class="fekete" id="${választotthely.Id}"></span>`;
            feketebábuk = document.querySelectorAll("span");
        }
    }

    let abábuindexe = választotthely.táblaindex
    if (szám === 14 || szám === -14 || szám === 18 || szám === -18) 
    {
        adatváltozás(abábuindexe, abábuindexe + szám, abábuindexe + szám / 2);
    } else 
    {
        adatváltozás(abábuindexe, abábuindexe + szám);
    }
}

function adatváltozás(táblaindex, újindex, bábule) 
{
    board[táblaindex] = null;
    board[újindex] = parseInt(választotthely.Id);
    if (kör && választotthely.Id < 12 && újindex >= 57) 
    {
        document.getElementById(választotthely.Id).classList.add("piroskirály")
    }
    if (kör === false && választotthely.Id >= 12 && újindex <= 7) 
    {
        document.getElementById(választotthely.Id).classList.add("feketekirály");
    }
    if (bábule) 
    {
        board[bábule] = null;
        if (kör && választotthely.Id < 12) 
        {
            cellák[bábule].innerHTML = "";
            feketepontok--
        }
        if (kör === false && választotthely.Id >= 12) 
        {
            cellák[bábule].innerHTML = "";
            pirospontok--
        }
    }
    kiválasztottbáburesi();
    klikkeltávolít();
    eventlistenerekoff();
}

function eventlistenerekoff() 
{
    if (kör) 
    {
        for (let i = 0; i < pirosbábuk.length; i++) 
        {
            pirosbábuk[i].removeEventListener("click", játszóbábukállása);
        }
    } else {
        for (let i = 0; i < feketebábuk.length; i++) 
        {
            feketebábuk[i].removeEventListener("click", játszóbábukállása);
        }
    }
    nyertese();
}

function nyertese() 
{
    if (feketepontok === 0) 
    {
        osztó.style.display = "none";
        alert("A piros játékos nyert!")
    } else if (pirospontok === 0) 
    {
        osztó.style.display = "none";
        alert("A fekete játékos nyert!")
    }
    játékosváltás();
}

function játékosváltás() 
{
    if (kör) 
    {
        kör = false;
    } else 
    {
        kör = true;
    }
    klikkevent();
}

klikkevent();