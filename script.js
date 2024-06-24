//CREDITS
let counter = 0;

// Beim Laden der Seite prüfen, ob ein Cookie für den Counter vorhanden ist
window.onload = function() {
    if(getCookie("counter")) {
        counter = parseInt(getCookie("counter")); // Den Wert des Cookies in den Counter laden
        updateC(); // Counter auf der Seite aktualisieren
    }
}

function addC(){
    counter += 500;
    updateC();
}

function subC(){
    counter -= 500;
    updateC();
}

function updateC(){
    document.getElementById("counter").textContent = counter;
    document.cookie = "counter=" + counter + "; expires=Wen, 31 Dec 2025 12:00:00 UTC; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i=0;i < cookies.length;i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
        if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length,cookie.length);
    }
    return null;
}


//WEEL
var rand_old = 0;

function random(){
    rand = Math.random() * 360;  //Zahl zwischen 1800 und 2160
    return(Math.round(rand));
}

function win(){
    window.alert("GEWONNEN\n+750💲");
    counter += 750;
    updateC();
}
function loss(){
    window.alert("VERLOREN");
    
}
function jackpot(){
    window.alert("!!!JACKPOT!!!\n+1500💲");
    counter += 1500;
    updateC();
}

function check_win(rotation){   //Checkt ob die random Zahl ein Gewinn ist
    if(rotation < 1845){
        jackpot();
    }
    else if(rotation < 1890){
        loss();
    }
    else if(rotation < 1935){
        win();
    }
    else if(rotation < 1980){
        loss();
    }
    else if(rotation < 2025){
        win();
    }
    else if(rotation < 2070){
        loss();
    }
    else if(rotation < 2115){
        win();
    }
    else if(rotation < 2161){
        loss();
    }
}

var bt_spin = document.getElementById("bt_spin");
document.addEventListener("keydown", function(event) {  //Button mit Leer-/Entertaste drücken
    if (event.keyCode == 13 || event.keyCode == 32) {
        bt_spin.click();
    }
});

function spin() {
    var dur = Math.random() * (4.5 - 3) + 3; //Duration zwischen 3 und 4.5
    var rotation = random();
    if(counter >= 500){
        bt_spin.style.backgroundColor = 'rgb(194, 165, 15)';

        bt_spin.disabled = true;  //Button nicht drücken

        gsap.to("#logospin", {  //Animation spin
            rotation: "+=" + (rotation + 1800 - rand_old),
            duration: dur,
            ease: "power2",
            onComplete: function() {  //Wenn die Animation fertig ist
                bt_spin.style.backgroundColor = 'gold';
                bt_spin.disabled = false;  //Button wieder aktivieren
                check_win(rotation + 1800);
            }
        });

        setTimeout(function() {  //Wartet 4 sec
            bt_spin.disabled = false;
        }, 4000); 
        
        subC();
        rand_old = rotation;
    }
    else{
        window.alert("!!!ACHTUNG!!!\n Nicht genug Credits");
    }
}


//ROULETTE
var clicked = false;  //Checkt ob hover_end funktionieren soll
function hover(x){
    if(clicked == false){
        x.style.opacity = 0.4;   
    }
}
function hover_end(x){
    if(clicked == false){
        x.style.opacity = 0;   
    }
}

var to18_nr = document.getElementsByClassName("to18_nr");
var even_nr = document.getElementsByClassName("even_nr");
var red = document.getElementsByClassName("red_nr");
var black = document.getElementsByClassName("black_nr");
var odd = document.getElementsByClassName("odd_nr");
var to36_nr = document.getElementsByClassName("to36_nr");

function hover_to18(){
    for (var i = 0; i < to18_nr.length; i++) {
        to18_nr[i].style.opacity = 0.4;
    }
}
function hover_end_to18(){
    for (var i = 0; i < to18_nr.length; i++) {
        to18_nr[i].style.opacity = 0;
    }
}

function hover_even(){
    for (var i = 0; i < even_nr.length; i++) {
        even_nr[i].style.opacity = 0.4;
    }
}
function hover_end_even(){
    for (var i = 0; i < even_nr.length; i++) {
        even_nr[i].style.opacity = 0;
    }
}

function hover_red(){
    for (var i = 0; i < red.length; i++) {
        red[i].style.opacity = 0.4;
    }
}
function hover_end_red(){
    for (var i = 0; i < red.length; i++) {
        red[i].style.opacity = 0;
    }
}

function hover_black(){
    for (var i = 0; i < black.length; i++) {
        black[i].style.opacity = 0.4;
    }
}
function hover_end_black(){
    for (var i = 0; i < black.length; i++) {
        black[i].style.opacity = 0;
    }
}

function hover_odd(){
    for (var i = 0; i < odd.length; i++) {
        odd[i].style.opacity = 0.4;
    }
}
function hover_end_odd(){
    for (var i = 0; i < odd.length; i++) {
        odd[i].style.opacity = 0;
    }
}

function hover_to36(){
    for (var i = 0; i < to36_nr.length; i++) {
        to36_nr[i].style.opacity = 0.4;
    }
}
function hover_end_to36(){
    for (var i = 0; i < to36_nr.length; i++) {
        to36_nr[i].style.opacity = 0;
    }
}

//Counter für Einsatz
var einsatz = 0;
var count = document.getElementById("count");

function plus(){
    einsatz += 250;
    count.textContent = einsatz;
}

function minus(){
    if(einsatz > 0){
        einsatz -= 250;
        count.textContent = einsatz;
    }
}


//Check win Roulette
var feld_check = 0;
//var randomR = 0;
var list_red = [1, 3, 5, 7, 9, 10, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var list_black = [2, 4, 6, 8, 11, 12, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35];
var rotR = 0.0; //Rotation von 0 - 360. 1 Feld = 2.7. 37 Felder

function roll(){
    return(Math.round(Math.random() * 36));
}

function Rwin(color, randomR){
    window.alert("GEWONNEN: " + color + " , " + randomR + "\n+" + (einsatz * 36)+"💲");
    counter += einsatz * 36;
    updateC();
}

function Rloss(color, randomR){
    window.alert("VERLOREN: " + color + " , " + randomR +"\n -" + einsatz + "💲")
}

function Rwin_double(color, randomR){
    counter += einsatz * 2;
    window.alert("GEWONNEN: " + color + " , " + randomR  + "\n+" + einsatz * 2 +"💲");
    updateC();
}

function Rloss_double(color, randomR){
    window.alert("VERLOREN: " + color + " , " + randomR +"\n -" + einsatz + "💲")
}

function animate_roulette(callback){
    document.getElementById("rouletteA").style.zIndex = 9999;
    document.getElementById("rouletteA").style.opacity = 1;

    var setzen = document.getElementById("setzen");
    setzen.disabled = true;
    var m = document.getElementById("m");
    m.disabled = true;
    var p = document.getElementById("p");
    p.disabled = true;

    gsap.to("#roulette_inner", {
        rotation: (2160 + (360 - rotR)),
        duration: 10,
        ease: "power2", 
        onComplete: function() {  //Wenn die Animation fertig ist
            document.getElementById("rouletteA").style.zIndex = -1;
            document.getElementById("rouletteA").style.opacity = 0;
            callback();
            //reset
            gsap.to("#roulette_inner", { 
                rotation: 0,
                duration: 0, 
            });
            gsap.to("#roulette_kugel", {
                duration: 0,
                y: 0,
                x: 0
            });
        }
    });
    gsap.to("#roulette_kugel", {
        duration: 9.1,
        ease: "power3.in",
        y: 140,
        x: 21,
    });

    setTimeout(function() {
        setzen.disabled = false;
        m.disabled = false;
        p.disabled = false;
    }, 10000); 
}

function setzen(){
    var color;
    if(einsatz > 0 && counter > 0 && counter >= einsatz){
        counter -= einsatz;
        updateC();
        var randomR = roll();
        var check_red = list_red.includes(randomR);
        var check_black = list_black.includes(randomR);

        if(check_red){
            color = "RED";
        }
        else if(check_black){
            color = "BLACK";
        }
        else{
            color = "GREEN";
        }

        getRot(randomR);

        animate_roulette(function() {
            if(feld_check <= 36){ //Zahlen & 0
                if(randomR == feld_check){
                    Rwin(color, randomR);
                }
                else{
                    Rloss(color, randomR);
                }
            }
            else if(feld_check == 37){ //to18
                if(randomR > 18){
                    Rloss_double(color, randomR);
                }
                else{
                    Rwin_double(color, randomR);
                }
            }
            else if(feld_check == 38){ //even
                if(randomR % 2 == 0){
                    Rwin_double(color, randomR);
                }
                else{
                    Rloss_double(color, randomR);
                }
            }
            else if(feld_check == 39){ //red
                
                if(check_red){
                    Rwin_double(color, randomR);
                } 
                else{
                    Rloss_double(color, randomR);
                }
            }
            else if(feld_check == 41){ //black
                if(check_black){
                    Rwin_double(color, randomR);
                }
                else{
                    Rloss_double(color, randomR);
                }
            }
            else if(feld_check == 42){ //odd
                if(randomR % 2 == 1){
                    Rwin_double(color, randomR);
                }
                else{
                    Rloss_double(color, randomR);
                }
            }
            else if(feld_check == 43){ //to36
                if(randomR >= 19){
                    Rwin_double(color, randomR);
                }
                else{
                    Rloss_double(color, randomR);
                }
            }
            clicked = false;
            document.getElementById(feld_check.toString()).classList.remove("visible");
            document.getElementById(feld_check.toString()).classList.add("hidden");
        });
    }
    else{
        window.alert("FEHLER BEIM EINSATZ!")
    }
}


function getRot(randomR){
    if(randomR == 0){
        rotR = 175.14;
    }
    else if(randomR == 1){
        rotR = 38.92;
    }
    else if(randomR == 2){
        rotR = 233.52;
    }
    else if(randomR == 3){
        rotR = 155.68;
    }
    else if(randomR == 4){
        rotR = 214.06;
    }
    else if(randomR == 5){
        rotR = 0;
    }
    else if(randomR == 6){
        rotR = 272.44;
    }
    else if(randomR == 7){
        rotR = 116.76;
    }
    else if(randomR == 8){
        rotR = 330.82;
    }
    else if(randomR == 9){
        rotR = 77.84;
    }
    else if(randomR == 10){
        rotR = 350.28;
    }
    else if(randomR == 11){
        rotR = 311.36;
    }
    else if(randomR == 12){
        rotR = 136.22;
    }
    else if(randomR == 13){
        rotR = 291.90;
    }
    else if(randomR == 14){
        rotR = 58.38;
    }
    else if(randomR == 15){
        rotR = 194.60;
    }
    else if(randomR == 16){
        rotR = 19.46;
    }
    else if(randomR == 17){
        rotR = 252.98;
    }
    else if(randomR == 18){
        rotR = 97.30;
    }
    else if(randomR == 19){
        rotR = 204.33;
    }
    else if(randomR == 20){
        rotR = 48.65;
    }
    else if(randomR == 21){
        rotR = 223.79;
    }
    else if(randomR == 22){
        rotR = 87.57;
    }
    else if(randomR == 23){
        rotR = 340.55;
    }
    else if(randomR == 24){
        rotR = 9.73;
    }
    else if(randomR == 25){
        rotR = 243.25;
    }
    else if(randomR == 26){
        rotR = 165.41;
    }
    else if(randomR == 27){
        rotR = 282.17;
    }
    else if(randomR == 28){
        rotR = 126.49;
    }
    else if(randomR == 29){
        rotR = 107.03;
    }
    else if(randomR == 30){
        rotR = 321.09;
    }
    else if(randomR == 31){
        rotR = 68.11;
    }
    else if(randomR == 32){
        rotR = 184.87;
    }
    else if(randomR == 33){
        rotR = 29.19;
    }
    else if(randomR == 34){
        rotR = 262.71;
    }
    else if(randomR == 35){
        rotR = 145.95;
    }
    else if(randomR == 36){
        rotR = 301.63;
    }
}

//FELDER CHECK
function show_img(){
    document.getElementById(feld_check.toString()).classList.remove("hidden");
    document.getElementById(feld_check.toString()).classList.add("visible");
}

function f1(){
    feld_check = 1;
}
function f2(){
    feld_check = 2;
}
function f3(){
    feld_check = 3;
}
function f4(){
    feld_check = 4;
}
function f5(){
    feld_check = 5;
}
function f6(){
    feld_check = 6;
}
function f7(){
    feld_check = 7;
}
function f8(){
    feld_check = 8;
}
function f9(){
    feld_check = 9;
}
function f10(){
    feld_check = 10;
}
function f11(){
    feld_check = 11;
}
function f12(){
    feld_check = 12;
}
function f13(){
    feld_check = 13;
}
function f14(){
    feld_check = 14;
}
function f15(){
    feld_check = 15;
}
function f16(){
    feld_check = 16;
}
function f17(){
    feld_check = 17;
}
function f18(){
    feld_check = 18;
}
function f19(){
    feld_check = 19;
}
function f20(){
    feld_check = 20;
}
function f21(){
    feld_check = 21;
}
function f22(){
    feld_check = 22;
}
function f23(){
    feld_check = 23;
}
function f24(){
    feld_check = 24;
}
function f25(){
    feld_check = 25;
}
function f26(){
    feld_check = 26;
}
function f27(){
    feld_check = 27;
}
function f28(){
    feld_check = 28;
}
function f29(){
    feld_check = 29;
}
function f30(){
    feld_check = 30;
}
function f31(){
    feld_check = 31;
}
function f32(){
    feld_check = 32;
}
function f33(){
    feld_check = 33;
}
function f34(){
    feld_check = 34;
}
function f35(){
    feld_check = 35;
}
function f36(){
    feld_check = 36;
}
function f37(){  // to18
    feld_check = 37;
}
function f38(){  // even
    feld_check = 38;
}
function f39(){  // red
    feld_check = 39;
}
function f0(){  // 0
    feld_check = 0;
    clicked = true;
    show_img();
}
function f41(){  // black
    feld_check = 41;
}
function f42(){  // odd
    feld_check = 42;
}
function f43(){  // to36
    feld_check = 43;
}
