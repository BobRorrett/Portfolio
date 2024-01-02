// Initialize Matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

// Create an engine
const engine = Engine.create();

// Create a world
const world = engine.world;

// Create a canvas
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Create ground
const ground = Bodies.rectangle(canvas.width / 2, canvas.height, canvas.width, 10, { isStatic: true });
World.add(world, ground);

// Create grabber claw
const claw = Bodies.rectangle(canvas.width / 2, canvas.height - 30, 100, 20);
World.add(world, claw);

// Create a mouse constraint
const mouse = Mouse.create(canvas);
const mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
World.add(world, mouseConstraint);

// Add mouse constraint to the world
World.add(world, MouseConstraint.create(engine, { mouse: Mouse.create(canvas) }));

// Add all the bodies to the world
World.add(world, [ground, claw]);

// Run the engine
Matter.Runner.run(engine)

// Update the mouse position on mousemove
canvas.addEventListener('mousemove', (event) => {
  const { x, y } = event;
  Mouse.setOffset(mouse, { x, y });
});

// Game loop
function gameLoop() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ground
  context.fillStyle = '#888';
  context.fillRect(ground.position.x - canvas.width / 2, ground.position.y - 5, canvas.width, 10);

  // Draw the claw
  context.fillStyle = '#333';
  context.fillRect(claw.position.x - claw.width / 2, claw.position.y - claw.height / 2, claw.width, claw.height);

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
