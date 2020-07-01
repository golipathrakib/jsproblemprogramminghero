/*var business = 250;
var minister = 350;
var sochib = 750;
if (business > minister){
    console.log("Business is Bigger.");
}else{
    console.log("Minister is bigger.");
}*/
/*var business = 450;//850
var minister = 650;
var sochib = 550;//750
if (business > minister){
    if( business > sochib){
        console.log("Business is Bigger.");
    }else{
        console.log("Sochib is bigger.");
    }
}else{
    if(minister > sochib){
        console.log("Minister is bigger.");
    }else{
        console.log ("Sochib is bigger.");
    }
}*/

var business = 850;
var minister = 650;
var sochib = 950;
var Rakib = 1200;

var max = Math.max(business, minister, sochib, Rakib);
console.log(max, "Crore");