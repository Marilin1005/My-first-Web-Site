var cajones = document.getElementById("cajon");
var lienzo = cajones.getContext("2d");
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = 'black';

//Plano Cartesiano
lienzo.moveTo(150,150);
lienzo.lineTo(150,0);

lienzo.moveTo(20,75);
lienzo.lineTo(260,75);

//Rayas lado A
lienzo.moveTo(140,80);
lienzo.lineTo(140,70);
lienzo.moveTo(130,80);
lienzo.lineTo(130,70);
lienzo.moveTo(120,80);
lienzo.lineTo(120,70);
lienzo.moveTo(110,80);
lienzo.lineTo(110,70);
lienzo.moveTo(100,80);
lienzo.lineTo(100,70);
lienzo.moveTo(90,80);
lienzo.lineTo(90,70);
lienzo.moveTo(80,80);
lienzo.lineTo(80,70);

//Rayas lado B
lienzo.moveTo(160,80);
lienzo.lineTo(160,70);
lienzo.moveTo(170,80);
lienzo.lineTo(170,70);
lienzo.moveTo(180,80);
lienzo.lineTo(180,70);
lienzo.moveTo(190,80);
lienzo.lineTo(190,70);
lienzo.moveTo(200,80);
lienzo.lineTo(200,70);
lienzo.moveTo(210,80);
lienzo.lineTo(210,70);
lienzo.moveTo(220,80);
lienzo.lineTo(220,70);

//Rayas lado C
lienzo.moveTo(145,65);
lienzo.lineTo(155,65);
lienzo.moveTo(145,55);
lienzo.lineTo(155,55);
lienzo.moveTo(145,45);
lienzo.lineTo(155,45);
lienzo.moveTo(145,35);
lienzo.lineTo(155,35);
lienzo.moveTo(145,25);
lienzo.lineTo(155,25);
lienzo.moveTo(145,15);
lienzo.lineTo(155,15);
lienzo.moveTo(145,5);
lienzo.lineTo(155,5);

//Rayas lado D
lienzo.moveTo(145,85);
lienzo.lineTo(155,85);
lienzo.moveTo(145,95);
lienzo.lineTo(155,95);
lienzo.moveTo(145,105);
lienzo.lineTo(155,105);
lienzo.moveTo(145,115);
lienzo.lineTo(155,115);
lienzo.moveTo(145,125);
lienzo.lineTo(155,125);
lienzo.moveTo(145,135);
lienzo.lineTo(155,135);
lienzo.moveTo(145,145);
lienzo.lineTo(155,145);

lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = 'red';

//Lineas Lado A
lienzo.moveTo(150,5);
lienzo.lineTo(140,75);
lienzo.moveTo(150,15);
lienzo.lineTo(130,75);
lienzo.moveTo(150,25);
lienzo.lineTo(120,75);
lienzo.moveTo(150,35);
lienzo.lineTo(110,75);
lienzo.moveTo(150,45);
lienzo.lineTo(100,75);
lienzo.moveTo(150,55);
lienzo.lineTo(90,75);
lienzo.moveTo(150,65);
lienzo.lineTo(80,75);

//Lineas Lado B
lienzo.moveTo(80,75);
lienzo.lineTo(150,85);
lienzo.moveTo(90,75);
lienzo.lineTo(150,95);
lienzo.moveTo(100,75);
lienzo.lineTo(150,105);
lienzo.moveTo(110,75);
lienzo.lineTo(150,115);
lienzo.moveTo(120,75);
lienzo.lineTo(150,125);
lienzo.moveTo(130,75);
lienzo.lineTo(150,135);
lienzo.moveTo(140,75);
lienzo.lineTo(150,145);

//Lineas Lado C
lienzo.moveTo(150,5);
lienzo.lineTo(160,75);
lienzo.moveTo(150,15);
lienzo.lineTo(170,75);
lienzo.moveTo(150,25);
lienzo.lineTo(180,75);
lienzo.moveTo(150,35);
lienzo.lineTo(190,75);
lienzo.moveTo(150,45);
lienzo.lineTo(200,75);
lienzo.moveTo(150,55);
lienzo.lineTo(210,75);
lienzo.moveTo(150,65);
lienzo.lineTo(220,75);

//Lineas Lado D
lienzo.moveTo(220,75);
lienzo.lineTo(150,85);
lienzo.moveTo(210,75);
lienzo.lineTo(150,95);
lienzo.moveTo(200,75);
lienzo.lineTo(150,105);
lienzo.moveTo(190,75);
lienzo.lineTo(150,115);
lienzo.moveTo(180,75);
lienzo.lineTo(150,125);
lienzo.moveTo(170,75);
lienzo.lineTo(150,135);
lienzo.moveTo(160,75);
lienzo.lineTo(150,145);

lienzo.stroke();
lienzo.closePath();