var img = new Image();

// Variables de usuario - personalizar estas para cambiar la imagen cuando inicie el desplazamiento
// dirección y velocidad.

img.src = '../img/canvas.jpg';

var CanvasXSize = 1600;
var CanvasYSize = 400;
var speed = 60; //más bajo es más rápido
var scale = 0.4;
var y = -4.5; //desplazamiento vertical

// Programa principal

var dx = 4.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // imagen más grande que canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // ancho de imagen más grande que canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // altura de la imagen más grande que canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // obtener contexto de canvas
    ctx = document.getElementById('canvas').getContext('2d');

    // establecer frecuencia de actualización
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // si la imagen es <= tamaño de Canvas
    if (imgW <= CanvasXSize) {
        // reiniciar, comenzar desde el principio
        if (x > CanvasXSize) {
            x = -imgW + x;
          
        }
        // dibujar image1 adicional
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            
            
        }
        // dibujar image2 adicional
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            
        }
    }

    // la imagen es > tamaño de Canvas
    else {
        // reiniciar, comenzar desde el principio
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // dibujar image adicional
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 2, y, imgW, imgH);
        }
    }
    // dibujar imagen
    ctx.drawImage(img, x, y,imgW, imgH);
    // cantidad para moverse
    x += dx;
}
// const text = document.getElementById("opc");

// // 👇️ Change text color on mouseover
// text.addEventListener('mouseover', function handleMouseOver() =>{
//    text.style.color = 'black';
  
// });

// // 👇️ Change text color back on mouseout
// box.addEventListener('mouseout', function handleMouseOut() {
//   text.style.color = 'black';
// });



/*background: #555; 
display: block; 
color: #fff;
text-shadow: 0 -1px 0 #000*/