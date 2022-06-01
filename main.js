canvas = document.getElementById("myCanvas");
//1
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

//2
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();

//3
ctx = canvas.getContext("2d");
color = "aqua";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(500, 200, 40, 0, 2*Math.PI);
ctx.stroke();

//4
ctx = canvas.getContext("2d");
color = "purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 240, 40, 0, 2*Math.PI);
ctx.stroke();

//5
ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 240, 40, 0, 2*Math.PI);
ctx.stroke();