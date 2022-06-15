// 1. feladat
//függvénnyel nem tudom 

function diakINFO(nev:string, csoport:number, tipus:boolean):void{
    
    return nev;
}
diakINFO("Fulajtár Mónika")


document.write("<br>")

var diakInfo = { nev:"Fulajtár Mónika", csoport: 10, aktiv:true}
document.write("<br>A diák neve:  " + diakInfo.nev);
document.write("<br>")

document.write("<hr>")


//   2. feladat



document.write("<hr>");


var szovegesErtekeles:[number, string, string];
szovegesErtekeles5=[5, "Példás" ,"Példás"]
szovegesErtekeles4=[4, "Példás" ,"Példás"]
szovegesErtekeles3=[3, "Példás" ,"Példás"]
szovegesErtekeles2=[2, "Példás" ,"Példás"]

function SzovegesErtekeles(jegy){
    
    return jegy;
        
    }
   szovegesErtekeles[szovegesErtekeles2[1,2]]


// 3. feladat

function HarommalOsztahtokSzama(ertek:number):number[]{
    var harmasTomb:[] =[];
    var haromSzam:number = Math.round(Math.random())
    if(ertek%3==0){
document.write("A szám osztható hárommal"+ haromSzam)

    }
    return harmasTomb;
}
HarommalOsztahtokSzama(10);




// 4. feladat



function nyeroSzamok(mennyiseg:number, alsoHatar:number, felsoHatar:number,):number {
    var generaltTomb = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam:number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var befutoSzam = nyeroSzamok(5, 1,90);
document.write("<br>A nyerőszámok:" + befutoSzam);
