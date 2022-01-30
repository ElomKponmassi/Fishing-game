let win = 0;
var parat = document.getElementById('bigpic');
var message = document.getElementById('para');
let scoree = 0;
let first = true;

let myArray = ["Bass","Bluefish","Buffalo Fish","Butterfish","Carp","Catfish","Clam","Cod","Crab", "Crayfish","Croaker", "Flounder","Golden Snapper","Grouper","Haddock","Hake","Halibut","Herring","Jack", "Jacksmelt","King Mackerel","Lobster", "Mackerel", "Dolphin","Marlin","Mullet","Perch", "Pickerel","Plaice","Pollock","Pompano", "Rainbow Trout", "Sablefish","Salmon","Sardine","Scallop","Scorpion Fish","Sea Trout","Shad", "Shark","Shrimp","Snapper","Sole","Spanish Mackerel","Squid" ,"Swordfish","Tilapia","Tilefish" ,"Tuna" ,"Walleye" ,"Weakfish","White roaker", "Whitefish","Whiting"];

function start(){        
    setTimeout(function() { activate(); }, Math.floor(Math.random() * 8000) + 2000 );

    if(first==true){
        var message = document.getElementById('para');
        message.innerHTML = "The game has started!";
        var scoremsg = document.getElementById('score');
        scoree = 0;
        scoremsg.innerHTML = "SCORE: ";
        var btn = document.getElementById('strtbtn');
        btn.innerHTML="RESTART";
        first=false;
    }
    else{
        location.reload();
    }
    
}
function activate(){
    var parat = document.getElementById('bigpic');
    parat.src = "jsgame/alert.JPG";
    win = 1;
    setTimeout(function() { deactivate(); }, 380);
}
function deactivate(){
    var parat = document.getElementById('bigpic');
    parat.src = "jsgame/stand.JPG";
    win = 0;
    setTimeout(function() { activate(); }, Math.floor(Math.random() * 10000) + 1000 );
}

function vava(){
    const random = Math.floor(Math.random() * myArray.length);
    hello = myArray[random];

    if (win == 1){
        var message = document.getElementById('para');
        var scoremsg = document.getElementById('score');
        scoree  += 1;
        message.innerHTML = "You caught a " + hello + "!"; 
        scoremsg.innerHTML = "SCORE: "+String(scoree); 

    } else {
        var message = document.getElementById('para');
        message.innerHTML = "You missed it!"
    }

}