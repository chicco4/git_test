let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

/*
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

let x = Math.random() * (innerWidth - 100);
let y = Math.random() * (innerHeight - 100);
let dx = (Math.random() + 0.5) * 4;
let dy = (Math.random() + 0.5) * 4;
let radius = 50;
c.strokeStyle = "black";

let frame = 0;
function animate() {
  if (frame > 300) {
    return;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;

  frame++;
}

animate();
