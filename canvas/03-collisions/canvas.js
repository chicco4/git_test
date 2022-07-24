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

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

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
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 50; i++) {
    let radius = 23;
    let x = randomIntFromRange(0 + radius, canvas.width - radius);
    let y = randomIntFromRange(0 + radius, canvas.height - radius);
    console.log("i:" + i + " x:" + x + " y:" + y);
    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        console.log(
          "compare i:" +
            i +
            " x:" +
            x +
            " y:" +
            y +
            " with j: " +
            j +
            " x:" +
            particles[j].x +
            " y:" +
            particles[j].y
        );
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomIntFromRange(0 + radius, canvas.width - radius);
          y = randomIntFromRange(0 + radius, canvas.height - radius);
          //console.log("test new particle:" + " x:" + x + " y:" + y);
          j = -1;
        }
      }
    }
    particles.push(new Particle(x, y, radius, "black"));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
