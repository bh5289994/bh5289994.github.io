$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(170, 650, 170, 20);
    createPlatform(400, 550, 50, 20);
    createPlatform(600, 550, 100, 30);
    createPlatform(800, 600, 200, 40);
    createPlatform(900, 480, 150, 30);
    createPlatform(1100, 630, 50, 50);
    createPlatform(1200, 550, 50, 50);
    createPlatform(1300, 450, 100, 50);



    // TODO 3 - Create Collectables
    createCollectable("diamond", 400, 400, 0, 0.7);
    createCollectable("grace", 800, 170, 2.0, 0.8);
    createCollectable("kennedi", 1200, 400, 0, 0.9);



    
    // TODO 4 - Create Cannons
    createCannon("top", 440, 900);
    createCannon("top", 1150, 850);
    createCannon("bottom", 700, 750);
    createCannon("left", 250, 800);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
