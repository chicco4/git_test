/* UTILITY FUNCTIONS */
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/* MAIN STUFF */

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.ox = x;
    this.oy = y;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distFromCenter = randomIntFromRange(70, 150);
    this.lastPoint;
  }

  draw() {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(this.lastPoint.x, this.lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  }

  update() {
    this.lastPoint = {
      x: this.x,
      y: this.y,
    };
    //move points over time
    this.radians += this.velocity;

    //circ motion
    this.x = mouse.x + Math.cos(this.radians) * this.distFromCenter;
    this.y = mouse.y + Math.sin(this.radians) * this.distFromCenter;

    this.draw();
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 2 + 1;
    let color = randomColor(colors);
    particles.push(
      new Particle(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255,255,255,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  //util lines
  // c.beginPath();
  // c.moveTo(0, canvas.height / 2);
  // c.lineTo(canvas.width, canvas.height / 2);
  // c.moveTo(canvas.width / 2, 0);
  // c.lineTo(canvas.width / 2, canvas.height);
  // c.strokeStyle = "lightgrey";
  // c.stroke();

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
