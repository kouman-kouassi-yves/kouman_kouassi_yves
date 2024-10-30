/*
 let i = 0;
while (i <= 100)
    {
    
    document.write( " <br>"  + i  );

    i++;

 }

*/

function LaDifference(){

let a = prompt("La valeur de A");
document.write("<br> le premier nombre est : "  + a);
let dif=0
let b = prompt("La valeur de B");"<br>"
document.write("<br> le second nombre est : " + b); 

if( a > b)
    {
        alert("Le 1er nombre est superieure au second.");
        let dif = Number(a-b);
        document.write("<br> La differnce de ces nombres est : " + dif);
    }
     else if (a<b)
        {
        alert("Le Second nombre est superieure au premier.");
        let dif = Number(b-a);
        document.write("<br> La differnce de ces nombres est : " + dif);
     } 
     else{
        alert("Les deux sont egaux.");
        let dif = Number(0);
        document.write(" <br> La differnce de ces nombres est : " + dif );
     };

}

// document.write
// (
//     "Ici, nous voulons chercher la difference de nombre que <br> nous aurons l'occasions de saisir." + LaDifference() 
// );


// if(a<b) {
//     alert("Le 1er nombre est inferieure au second.");
// };

// if (a = b) {
//     alert("Les deux sont egaux.");
// };
