// 1. feladat
//fügvénnyel 
document.write("<br>");
var diakInfo = { nev: "Fulajtár Mónika", csoport: 10, aktiv: true };
document.write("<br>A diák neve:  " + diakInfo.nev);
document.write("<br>");
document.write("<hr>");
/*   2. feladat



document.write("<hr>");


var SzovegesErtekeles;
function SzovegesErtekeles():void{
SzovegesErtekeles = [5, "Példás" , "Példás"];
SzovegesErtekeles = [4, "Jó" , "Jó"];
SzovegesErtekeles = [3, "Változó" , "Változó"];
SzovegesErtekeles = [2, "Hanyag" , "Hanyag"];
}

*/
// 3. feladat
function HarommalOsztahtokSzama(ertek) {
    var harmasTomb = [];
    var haromSzam = Math.round(Math.random());
    if (ertek % 3 == 0) {
        document.write("A szám osztható hárommal" + haromSzam);
    }
    return harmasTomb;
}
HarommalOsztahtokSzama(10);
// 4. feladat
function nyeroSzamok(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var befutoSzam = nyeroSzamok(5, 1, 90);
document.write("<br>A nyerőszámok:" + befutoSzam);
