
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


function box(context,x1,y1,x2,y2,color){
         context.fillStyle = color;
         context.fillRect(x1,y1,x2,y2);
}




function drawLine(context,x1,y1,x2,y2,color,width){

         context.beginPath();
         context.strokeStyle=color;
         context.lineWidth=width;
         context.moveTo(x1,y1);
         context.lineTo(x2,y2);
         context.stroke();

}



function drawPixel(context, x, y, color) {
         var roundedX = Math.round(x);
         var roundedY = Math.round(y);
         context.fillStyle = color || '#000';
         context.fillRect(roundedX, roundedY, 1, 1);
}










