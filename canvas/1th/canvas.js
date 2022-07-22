let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "blue";
c.fillRect(50, 100, 100, 100);
c.fillStyle = "green";
c.fillRect(100, 400, 100, 100);
c.fillStyle = "lightgrey";
c.fillRect(300, 400, 50, 50);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red";
c.stroke();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//arc / circ
for (let i = 0; i < 6; i++) {
  c.strokeStyle = getRandomColor();
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, 360, false);
  c.stroke();
}
/*
c.strokeStyle = "black";
c.beginPath();
c.arc(300, 300, 50, 22, 90, true);
c.stroke();
*/
