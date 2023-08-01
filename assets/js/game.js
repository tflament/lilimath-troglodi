var maps = [
    `EEEEEEEEEEEEE
EEEEEEEEEEEEE
EMEEEMEMEEEME
EMEEEMEMEEEME
EMMMEMEMMMEME
EEEEEEEEEEEEE
EEEEEEEEEEEEE
EMMMMMMMMMMME
EM T C    PME
EMMMMMMMMMMME
EEEEEEEEEEEEE`,
    `EEEEEEEEEEEEE
EEEEMMMEEEEEE
EEEEMPMMMMMEE
EEEEM MM  MEE
EEMMMC C  MEE
EEMP CTMM MEE
EEMMMMCMM MEE
EEEEM  MM MEE
EEEEM  PMPMEE
EEEEMMMMMMMEE
EEEEEEEEEEEEE`,
`MMMMMMMMMMMMM
M          PM
M M M M M M M
M CCM M M M M
MTC   M M M M
M M     M M M
M M M     M M
M M M M     M
M M M M M M M
MPM M M M MPM
MMMMMMMMMMMMM`,
`EEEEEEEEEEEEE
EMMMMMMMMMMME
EMP       PME
EM M MCMMM ME
EM MMM M M ME
EM C  T  C ME
EM MMM M M ME
EM  MMCM M ME
EMMP      PME
EEMMMMMMMMMME
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEMMMMMEEEEEE
EEMT  MEEEEEE
EEM CCMEMMMEE
EEM C MEMPMEE
EEMMM MMMPMEE
EEEMM    PMEE
EEEM   M  MEE
EEEM   MMMMEE
EEEMMMMMEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEMMMMMMMEEE
EEEM     MMME
EEMMCMMM   ME
EEM T C  C ME
EEM PPM C MME
EEMMPPM   MEE
EEMMMMMMMMMEE
EEEEEEEEEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEEMMMMEEEE
EEEEMM  MEEEE
EEEEMTC MEEEE
EEEEMMC MMEEE
EEEEMM C MEEE
EEEEMPC  MEEE
EEEEMPP PMEEE
EEEEMMMMMMEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEMMMMEEEEE
EEEEMT MMMEEE
EEEEM C  MEEE
EEEMMM M MMEE
EEEMPM M  MEE
EEEMPC  M MEE
EEEMP   C MEE
EEEMMMMMMMMEE
EEEEEEEEEEEEE`,
`EEEMMMMMMMEEE
MMMM     MEEE
M   PMMM MEEE
M M M    MMEE
M M C CMP MEE
M M  PC M MEE
M PMC C M MEE
MM    M M MMM
EM MMMP    TM
EM     MM   M
EMMMMMMMMMMMM`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEEMMMMMMME
EEEEMM  M TME
EEEEM   M  ME
EEEEMC C C ME
EEEEM CMM  ME
EEMMM C M MME
EEMPPPPP  MEE
EEMMMMMMMMMEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEMMMMMMEEE
EEMMM    MEEE
EMMP CMM MMEE
EMPPC C  TMME
EMPP C C MMEE
EMMMMMM  MEEE
EEEEEEMMMMEEE
EEEEEEEEEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEMMMMMMMMMEE
EEM  MM   MEE
EEM   C   MEE
EEMC MMM CMEE
EEM MPPPM MEE
EMM MPPPM MME
EM C  C  C ME
EM     M T ME
EMMMMMMMMMMME
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEMMMMMMEEE
EEEEM    MEEE
EEMMMCCC MEEE
EEMT CPP MEEE
EEM CPPPMMEEE
EEMMMM  MEEEE
EEEEEMMMMEEEE
EEEEEEEEEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEMMMMEEMMMMM
EMM  MMMM   M
EM C MMMMC  M
EM  CPPPP C M
EMM    M T MM
EEMMMMMMMMMME
EEEEEEEEEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEMMMMMEEEE
EEMMM  TMEEEE
EEM  CP MMMEE
EEM  PCP MMEE
EEMMM KC MMEE
EEEEM   MMMEE
EEEEMMMMMMEEE
EEEEEEEEEEEEE
EEEEEEEEEEEEE`,
`EEEEEEEEEEEEE
EEEEEEEEEEEEE
EEEEEMMMMEEEE
EEEEEMPPMEEEE
EEEEMM PMMEEE
EEEEM  CPMEEE
EEEMM C  MMEE
EEEM  MCC MEE
EEEM  T   MEE
EEEMMMMMMMMEE
EEEEEEEEEEEEE`,
`EMMMMMMEEMMME
EMPP  MEMMTMM
EMPP  MMM   M
EMPP     CC M
EMPP  M M C M
EMPPMMM M C M
EMMMM C MC  M
EEEEM  CM C M
EEEEM C  C  M
EEEEM  MM   M
EEEEMMMMMMMMM`,
`EEEEEEEMMMMEE
EMMMMMMM  MEE
EM     C TMEE
EM   CMM CMEE
EMMCMPPPM MEE
EEM CPPP  MEE
EEM MP PM MME
EEM   M MC ME
EEMC  C    ME
EEM  MMMMMMME
EEMMMMEEEEEEE`,
`MMMMMMMMMMMMM
M          TM
M   P C P   M
M    PM     M
M   C  C    M
M  P     C  M
M           M
M           M
M           M
M           M
MMMMMMMMMMMMM`,
`EEEMMMMMEMMMM
EEEM   MEMPPP
EEEMC  MEMPPP
EMMM  CMMM   
EM  C C MM   
MM M MM MMM M
   M MM MMM M
 C  C       M
MMMM MMM M TM
EEEM     MMMM
EEEMMMMMMMEEE`,
`EEEEEEEEEEEEE
MMMMMMMMMMMEE
PP  M     MMM
PP  M C  C  M
PP  MCMMMM  M
PP    T MM  M
PP  M M  C MM
MMMMM MMC C M
EM C  C C C M
EM    M     M
EMMMMMMMMMMMM`,
`MMMMMEEEEEEEE
MPMPMMMMMMMME
MPPPM     TME
MPPPM CMC MME
MPPPM C  CMEE
M   MMC C MEE
M   M C M MMM
MM MM C  C  M
EM   C  C   M
EM  MMMMMMMMM
EMMMMEEEEEEEE`,
`{#23
EMMMMMMM   MM
MM M TMM CC M
M    C      M
M  C  MMM   M
MMM MMMMMCMMM
M C  MMM PPME
M C C C PPPME
M    MMMPPPME
M CC MEMPPPME
M  MMMEMMMMME
MMMMEEEEEEEEE`,
`M  M  MMMMMEE
M  M  MPPPMMM
  CM  MPPP  M
 C MCC PPP  M
  CM  MPPP PM
   M CMMMMMMM
MC       C C 
M  M  CC M   
MMMMMM  MMCCT
EEEEEM      M
EEEEEMMMMMMMM`,
`EEMMMMMM  MEE
EEM C C   MME
MMM  C C C MM
 C C   CC    
  M  C   C C 
M MMMMM MMMMM
M   MPPP MEEE
M  C PPPPMEEE
M C MPPPPMEEE
MM CMPPPPMEEE
EMMTMMMMMMEEE`
];

var CUBE_SIZE = 48;

var url = new URL(window.location.href);
var cheat = url.searchParams.get("cheat");
var levelIndicator = document.getElementById("level")

var canvas = document.getElementById('troglodi');
var ctx = canvas.getContext('2d');

/* Current level */
if (cheat !== null) {
    var level = parseInt(cheat);
} else {
    var level = 1;
}
var map = null;
var inter;
/* End current level */

/* Assets */
var eau = document.getElementById("eau");
var mur = document.getElementById("mur");
var boite = document.getElementById("boite");
var boite_place = document.getElementById("boite_place");
var trouglou = document.getElementById("trouglou");
var cible = document.getElementById("cible");

var t1 = document.getElementById("trouglou_1");
var t2 = document.getElementById("trouglou_2");
var t3 = document.getElementById("trouglou_3");
var t4 = document.getElementById("trouglou_4");
/* End Assets */

/* Start mapping */
var mapping = {
    "M": mur,
    "E": eau,
    "C": boite,
    "T": trouglou,
    "P": cible,
    "K": boite_place
};
var trouglou_mapping = [t1, t2, t3, t4]
/* End mapping */


/* Start functions */
function mapToArray(map) {
    var map_split = map.split(/\r\n|\r|\n/)

    var width = map_split[0].length
    var height = map_split.length

    var array = new Array(height);
    for (let i = 0; i < height; i++) {
        array[i] = new Array(width);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (map_split[i][j] === 'T') {
                var pos = {
                    "i": i,
                    "j": j
                };
                array[i][j] = ' ';
            } else {
                array[i][j] = map_split[i][j];
            }
        }
    }

    return {
        "width": width,
        "height": height,
        "map": array,
        "pos": pos
    }
}

function drawBaseMap() {
    /* Set Canvas size */
    canvas.width = map.width * CUBE_SIZE;
    canvas.height = map.height * CUBE_SIZE;
    /* End Canvas size */

    /* Set levelIndicator */
    levelIndicator.innerHTML = level.toString();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < map.height; i++) {
        for (let j = 0; j < map.width; j++) {
            let c = map.map[i][j];
            if (c === " ") {
                ctx.fillStyle = "white";
                ctx.fillRect(j * CUBE_SIZE, i * CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
            }
            if (c !== " " && c !== "T") {
                ctx.drawImage(mapping[c], j * CUBE_SIZE, i * CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
            }
            if (map.pos.i == i && map.pos.j == j) {
                let random = Math.floor(Math.random() * 4)
                ctx.drawImage(trouglou_mapping[random], j * CUBE_SIZE, i * CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
            }
        }
    }
}

function verifyEndLevel() {
    var finished = true;

    for (let i = 0; i < map.height; i++) {
        for (let j = 0; j < map.width; j++) {
            if (map.map[i][j] == 'C') {
                finished = false;
            }
        }
    }

    if (finished === true) {
        alert("Niveau " + level + " terminé !");
        level += 1;
        map = mapToArray(maps[level - 1]);
        drawBaseMap();
    }
}

function startInter() {
    inter = setInterval(function () {
        if (map !== null) {
            drawBaseMap();
            verifyEndLevel();
        }
    }, 500);
}

function stopInter() {
    clearInterval(inter);
}
/* End functions */


document.onkeydown = keydown; /* Event register */
function keydown(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up
        ival = -1;
        jval = 0;
    } else if (e.keyCode == '40') {
        // down
        ival = 1;
        jval = 0;
    } else if (e.keyCode == '37') {
        // left
        ival = 0;
        jval = -1;
    } else if (e.keyCode == '39') {
        // right 
        ival = 0;
        jval = 1;
    } else if (e.keyCode == '32') {
        // space bar
        ival = 0;
        jval = 0;
        restartLevel();
    } else {
        // default
        ival = 0;
        jval = 0;
    }

    ipos = map.pos.i + ival;
    jpos = map.pos.j + jval;
    ipos2 = map.pos.i + 2*ival;
    jpos2 = map.pos.j + 2*jval;

    /* 
    var mapping = {
    "M": mur,
    "E": eau,
    "C": boite,
    "T": trouglou,
    "P": cible,
    "K": boite_place
    };
    */

    if (ipos < 0 || jpos < 0) {
        console.log("PREEMPTIVE RETURN")
        return ;
    }
    if (ipos >= map.height || jpos >= map.width) {
        console.log("PREMPTIVE RETURN 2")
        return ;
    }
    if (map.map[ipos][jpos] === ' ' || map.map[ipos][jpos] == 'P') {
        map.pos.i = ipos; /* pos update */
        map.pos.j = jpos; /* pos update */
    } else if (map.map[ipos][jpos] === 'C' || map.map[ipos][jpos] === 'K') {
        if (map.map[ipos2][jpos2] === ' ' || map.map[ipos2][jpos2] === 'P') {

            if (map.map[ipos][jpos] === 'K') {
                map.map[ipos][jpos] = 'P';
            } else { // Implicit case was 'C'
                map.map[ipos][jpos] = ' ';
            }

            if (map.map[ipos2][jpos2] === ' ') {
                map.map[ipos2][jpos2] = 'C';
            } else { // Implicit case was 'P'
                map.map[ipos2][jpos2] = 'K';
            }

            map.pos.i = ipos; /* pos update */
            map.pos.j = jpos; /* pos update */
        }
    }

    drawBaseMap();
}

function restartLevel() {
    map = mapToArray(maps[level - 1]);
}

map = mapToArray(maps[level - 1]);
startInter();