var cajota = document.getElementById("caja");
var lienzo = cajota.getContext("2d");
//console.log (lienzo);

lienzo.beginPath();
lienzo.strokeStyle = 'pink';

lienzo.moveTo(50,50);
lienzo.lineTo(70,30);

lienzo.moveTo(70,30);
lienzo.lineTo(140,30);

lienzo.moveTo(140,30);
lienzo.lineTo(160,50);

lienzo.moveTo(160,50);
lienzo.lineTo(50,50);

lienzo.moveTo(50,50);
lienzo.lineTo(110,100);

lienzo.moveTo(110,100);
lienzo.lineTo(160,50);

lienzo.moveTo(70,30);
lienzo.lineTo(110,100);

lienzo.moveTo(90,30);
lienzo.lineTo(110,100);

lienzo.moveTo(120,30);
lienzo.lineTo(110,100);

lienzo.moveTo(140,30);
lienzo.lineTo(110,100);

lienzo.stroke();
lienzo.closepath();