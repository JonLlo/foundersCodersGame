let gameRunning = true; // Global flag to control the game loop
const coinSound = new Audio("sound/coin.wav"); // Replace with your coin sound file
coinSound.volume = 0.5; // Default volume (can be adjusted)
const slashSound = new Audio("sound/slash.wav"); // Replace with your coin sound file
slashSound.volume = 0.5; // Default volume (can be adjusted)
const shieldSound = new Audio("sound/shield.wav"); // Replace with your coin sound file
shieldSound.volume = 0.5; // Default volume (can be adjusted)
function start2PlayerGame(p1, p2) {
    let isPaused = false; // Track game state



    document.getElementById("gameModal").style.display = "none"; // Hide modal
    document.getElementById("resultsModal").style.display = "none"; // Hide modal
    let gameRunning = true; // Global flag to control the game loop

    // Set initial volume





const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 50,
    y: 300,
    width: 30,
    height: 30,
    velocityX: 0,
    velocityY: 0,
    speed: 3,
    gravity: 0.5,
    isJetpacking: false,
    jetpackFuel: 100,
    maxJetpackFuel: 100,
    jetpackFuelDepletionRate: 0.5,
    jetpackFuelRechargeRate: 0.1,
    isInvincible: false, // Invincibility flag
    invincibleTime: 0,   // Time remaining for invincibility
    lives: 3,
    
};

let player2 = {
    x: 50,
    y: 300,
    width: 30,
    height: 30,
    velocityX: 0,
    velocityY: 0,
    speed: 3,
    gravity: 0.5,
    isJetpacking: false,
    jetpackFuel: 100,
    maxJetpackFuel: 100,
    jetpackFuelDepletionRate: 0.5,
    jetpackFuelRechargeRate: 0.1,
    isInvincible: false, // Invincibility flag
    invincibleTime: 0,   // Time remaining for invincibility
    lives: 3,

};



let platforms = [
    { x: 0, y: 350, width: 800, height: 50 },
];

let enemies = [];
let coins = [];
let monsters = [];
let score = 0;
let score2 = 0;

let coinScore = 0;
let coinScore2 = 0;

let gameSpeed = 2;

let invincibilityBoxes = []; // Array to hold invincibility boxes
let keys = {};

document.addEventListener("keydown", event => keys[event.code] = true);
document.addEventListener("keyup", event => keys[event.code] = false);



//Draw player
// Draw player 1
let playerImage = new Image();
playerImage.src = p1;  // Path to the player's icon image

// This variable ensures the image is only loaded once, preventing unnecessary reloading
let imageLoaded = false;

// Ensure the image is loaded before drawing
playerImage.onload = () => {
    imageLoaded = true;

};

// Draw player 2
let player2Image = new Image();
player2Image.src = p2;  // Path to Player 2's icon image

// This variable ensures the image is only loaded once, preventing unnecessary reloading
let image2Loaded = false;

// Ensure the image is loaded before drawing
player2Image.onload = () => {
    image2Loaded = true;
};

function drawPlayer(user) {
    // Determine which image to use based on the user
    let userImage = (user === player) ? playerImage : player2Image;
    let userImageLoaded = (user === player) ? imageLoaded : image2Loaded;

    // Check if the image is loaded
    if (userImageLoaded) {
        // Draw a glowing circle around the user when invincible
        if (user.isInvincible) {
            ctx.strokeStyle = "goldenrod";  // Set the stroke color to gold
            ctx.shadowColor = "goldenrod";  // Set the shadow color to gold for the glowing effect
            ctx.shadowBlur = 15;       // Control the blur effect (higher is more blurry)
            ctx.lineWidth = 5;         // Set the width of the circle's border
            ctx.beginPath();
            ctx.arc(user.x + user.width / 2, user.y + user.height / 2, user.width + 10, 0, Math.PI * 2); // Draw a circle around the user
            ctx.stroke();  // Apply the stroke (outline)
            ctx.shadowBlur = 0; // Reset shadow blur to avoid affecting other objects
        }


        // Draw the user image (player or player2)
        ctx.drawImage(userImage, user.x, user.y, user.width, user.height);
    }
}




function drawPlatforms() {
    ctx.fillStyle = "brown";
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

let coinImage = new Image();
coinImage.src = 'coin-icon.png';
function drawCoins() {
    coins.forEach(coin => {
        ctx.drawImage(coinImage, coin.x, coin.y, coin.width, coin.height);
    });
}


let monsterImage = new Image();
monsterImage.src = 'monster-icon.png';  // Path to the monster image
        function drawMonsters() {
    monsters.forEach(monster => {
        ctx.shadowColor = "rgba(255, 0, 0, 0.8)";  // Red glow with opacity
        ctx.shadowBlur = 20;  // Blur level (higher for more glow)
        ctx.shadowOffsetX = 0;  // No horizontal offset
        ctx.shadowOffsetY = 0;  // No vertical offset
        
        ctx.drawImage(monsterImage, monster.x, monster.y, monster.width, monster.height);
                               // Reset the shadow properties to avoid affecting other objects
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    });
}


     
let enemyImage = new Image();
enemyImage.src = 'enemy-icon.png';  // Path to the monster image
function drawEnemies() {
    enemies.forEach(enemy => {

                // Apply the glowing effect
        ctx.shadowColor = "rgba(255, 0, 0, 0.8)";  // Red glow with opacity
        ctx.shadowBlur = 20;  // Blur level (higher for more glow)
        ctx.shadowOffsetX = 0;  // No horizontal offset
        ctx.shadowOffsetY = 0;  // No vertical offset
        
        ctx.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);

               // Reset the shadow properties to avoid affecting other objects
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    });
}

let shieldImage = new Image();
shieldImage.src = 'shield-icon.png'; 
function drawInvincibilityBoxes() {
  
    invincibilityBoxes.forEach(shield => {
        ctx.drawImage(shieldImage, shield.x, shield.y, shield.width, shield.height);
    });
}




function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}
function drawLives() {
    ctx.fillStyle = "Purple";
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + player.lives, 10, 60);
}
function drawplayerImage() {
    ctx.drawImage(playerImage, 30, 70, 40, 40);

}
function drawplayer2Image() {
    ctx.drawImage(player2Image, 160, 70, 40, 40);

}
function drawCoinScore() {
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Coins: " + coinScore, 10, 40);
}
function drawInvincibilityTime() {
if (player.isInvincible) {
    const invincibleSeconds = Math.floor(player.invincibleTime / 30); // Convert frames to seconds
    ctx.fillStyle = "yellow"; // Set the color to gold for invincibility time
    ctx.font = "20px Arial";
    ctx.fillText("" + invincibleSeconds, 10, 90); // Display the time at the top left
}
}
function drawJetpackFuel() {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 80, player.jetpackFuel, 10);
}


function drawScore2() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score2, 150, 20);
}
function drawLives2() {
    ctx.fillStyle = "Purple";
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + player2.lives, 150, 60);
}
function drawCoinScore2() {
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Coins: " + coinScore2, 150, 40);
}
function drawInvincibilityTime2() {
if (player2.isInvincible) {
    const invincibleSeconds = Math.floor(player2.invincibleTime / 30); // Convert frames to seconds
    ctx.fillStyle = "yellow"; // Set the color to gold for invincibility time
    ctx.font = "20px Arial";
    ctx.fillText("" + invincibleSeconds, 150, 90); // Display the time at the top left
}
}
function drawJetpackFuel2() {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 80, player.jetpackFuel2, 10);
}


function updatePlayer(user, keys) {
    // Player 1 controls (Arrow keys)
    if (user === player) {
        // Player 1 movement (Arrow keys)
        if (keys["ArrowLeft"]) user.velocityX = -user.speed;
        else if (keys["ArrowRight"]) user.velocityX = user.speed;
        else user.velocityX = 0;

        if (keys["ArrowUp"] && user.jetpackFuel > 0) {
            user.isJetpacking = true;
            user.velocityY = -5;
            user.jetpackFuel -= user.jetpackFuelDepletionRate;
        } else {
            user.isJetpacking = false;
            if (user.y + user.height < canvas.height) {
                user.velocityY += user.gravity;
            }
        }

    } 
    // Player 2 controls (W, A, S, D keys)
    else if (user = player2) {
        // Player 2 movement (WASD keys)
        if (keys["KeyA"]) user.velocityX = -user.speed;  // A - Move left
        else if (keys["KeyD"]) user.velocityX = user.speed;  // D - Move right
        else user.velocityX = 0;

        if (keys["KeyW"] && user.jetpackFuel > 0) {  // W - Jetpack Up
            user.isJetpacking = true;
            user.velocityY = -5;
            user.jetpackFuel -= user.jetpackFuelDepletionRate;
        } else {
            user.isJetpacking = false;
            if (user.y + user.height < canvas.height) {
                user.velocityY += user.gravity;
            }
        }
    }

    // Recharge jetpack if not using it
    if (!user.isJetpacking && user.jetpackFuel < user.maxJetpackFuel) {
        user.jetpackFuel += user.jetpackFuelRechargeRate;
    }

    // Update position based on velocity
    user.x += user.velocityX;
    user.y += user.velocityY;




    // Platform collision detection
    platforms.forEach(platform => {
        if (
            user.x < platform.x + platform.width &&
            user.x + user.width > platform.x &&
            user.y + user.height > platform.y &&
            user.y + user.height - user.velocityY <= platform.y
        ) {
            user.y = platform.y - user.height;
            user.velocityY = 0;
            user.isJetpacking = false;
        }
    });
}


function updateInvincibility(user) {
    if (user.isInvincible) {
        user.invincibleTime -= 1;
        if (user.invincibleTime <= 0) {
            user.isInvincible = false; // End invincibility
        }
    }
}

function updateInvincibilityBoxes() {
    if (Math.random() < 0.005) { // Chance to spawn invincibility box
        let newBox = {
            x: canvas.width,
            y: Math.random() * (canvas.height - 60),
            width: 30,
            height: 30
        };
        invincibilityBoxes.push(newBox);
    }

    invincibilityBoxes.forEach(box => box.x -= gameSpeed);
    invincibilityBoxes = invincibilityBoxes.filter(box => box.x + box.width > 0);
}

function checkCollisions(user) {




    // Collision with enemies
    enemies.forEach(enemy => {

     


        if (!user.isInvincible && // Only trigger collision if not invincible
            user.x < enemy.x + enemy.width &&
            user.x + user.width > enemy.x &&
            user.y < enemy.y + enemy.height &&
            user.y + user.height > enemy.y
        ) { 



    if (user.lives > 1) {
        if (user == player) {

            let imgUrl = new URL(playerImage.src);
            ImageSrc = imgUrl.pathname;

        }
        else {
            let imgUrl2 = new URL(player2Image.src);
            ImageSrc = imgUrl2.pathname;
        }
        user.lives--; // Reduce life count

        
        // Make player temporarily invincible
        user.isInvincible = true;
        user.invincibleTime = 30; // 10 seconds (30 frames per second)

        // Show "Life Lost!" message and image
        let lifeLostContainer = document.getElementById("lifeLostContainer");
        let lifeLostImage = document.getElementById("lifeLostImage");

        lifeLostImage.src = ImageSrc; // Set the correct image path
        lifeLostContainer.style.display = "block"; // Show message and image

        slashSound.currentTime = 0; // Restart sound so it plays every time
        slashSound.play();

        // Hide the message after 2 seconds
        setTimeout(() => {
            lifeLostContainer.style.display = "none";
        }, 1000);


        return; // Prevents further processing




    } else {


            console.log('Enemy Collision')
            gameRunning = false;

            // Determine which player lost
            let winningPlayer, winnerImageSrc;

            if (user === player) {
                let imgUrl2 = new URL(player2Image.src);
                winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                winningPlayer = "Player 2";
            } else {
                let imgUrl = new URL(playerImage.src);
                winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                winningPlayer = "Player 1";
            }


            // Update modal title to show the winner
            console.log(winnerImageSrc)

            document.getElementById("modalTitleWin").textContent = `${winningPlayer}, You Win!`;
            document.getElementById("winnerImage").src = winnerImageSrc;


            // Update scores
            document.getElementById("scores").textContent = `Player 1 Coins: ${coinScore} | Player 2 Coins: ${coinScore2}`;

            // Show the results modal
            document.getElementById("resultsModal").style.display = "block";
            //location.reload();  // Restart the game on collision with enemy
           
        }}
    })
    // Collision with enemies
    monsters.forEach(monster => {
        if (!user.isInvincible && // Only trigger collision if not invincible
            user.x < monster.x + monster.width &&
            user.x + user.width > monster.x &&
            user.y < monster.y + monster.height &&
            user.y + user.height > monster.y
        ) {
            console.log('Monster Collision')

            if (user.lives > 1) {
                if (user == player) {
                    let imgUrl = new URL(playerImage.src);
                    ImageSrc = imgUrl.pathname;

                

                }
                else {

                    let imgUrl2 = new URL(player2Image.src);
                    ImageSrc = imgUrl2.pathname;
                }
                
                user.lives--; // Reduce life count
        
                        // Make player temporarily invincible
                        user.isInvincible = true;
                        user.invincibleTime = 30; // 10 seconds (30 frames per second)

                        // Show "Life Lost!" message and image
                        let lifeLostContainer = document.getElementById("lifeLostContainer");
                        let lifeLostImage = document.getElementById("lifeLostImage");
                
                        lifeLostImage.src = ImageSrc; // Set the correct image path
                        lifeLostContainer.style.display = "block"; // Show message and image
                        slashSound.currentTime = 0; // Restart sound so it plays every time
                        slashSound.play();
                        // Hide the message after 2 seconds
                        setTimeout(() => {
                            lifeLostContainer.style.display = "none";
                        }, 1000);

                
                        return; // Prevents further processing
        
        
            

        
            } else {
            gameRunning = false;

            // Determine which player lost
                        // Determine which player lost
            let winningPlayer, winnerImageSrc;

            if (user === player) {
                let imgUrl2 = new URL(player2Image.src);
                winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                winningPlayer = "Player 2";
            } else {
                let imgUrl = new URL(playerImage.src);
                winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                winningPlayer = "Player 1";
            }
            console.log(winnerImageSrc)

            // Update modal title to show the winner
            document.getElementById("modalTitleWin").textContent = `${winningPlayer}, You Win!`;
            document.getElementById("winnerImage").src = winnerImageSrc;
            // Update scores
            document.getElementById("scores").textContent = `Player 1 Coins: ${coinScore} | Player 2 Coins: ${coinScore2}`;

            // Show the results modal
            document.getElementById("resultsModal").style.display = "block";
            
            //location.reload();  // Restart the game on collision with enemy
                   }}
    }
    
    
    
    );




   
    // Collision with invincibility box
    invincibilityBoxes.forEach(box => {
        if (user.x < box.x + box.width &&
            user.x + user.width > box.x &&
            user.y < box.y + box.height &&
            user.y + user.height > box.y && !user.isInvincible ) {

                if (user == player) {

                    let imgUrl = new URL(playerImage.src);
                    ImageSrc = imgUrl.pathname;
        
                }
                else {
                    let imgUrl2 = new URL(player2Image.src);
                    ImageSrc = imgUrl2.pathname;
                }


        

        // Show "Life Lost!" message and image
        let invincibleContainer = document.getElementById("invincibleContainer");
        let invincibleImage = document.getElementById("invincibleImage");

        invincibleImage.src = ImageSrc; // Set the correct image path
        invincibleContainer.style.display = "block"; // Show message and image


        // Hide the message after 2 seconds
        setTimeout(() => {
            invincibleContainer.style.display = "none";
        }, 1000);



                
            user.isInvincible = true;
            shieldSound.currentTime = 0; // Restart sound so it plays every time
            shieldSound.play();


    
            user.invincibleTime = 300; // 10 seconds (30 frames per second)
            invincibilityBoxes = invincibilityBoxes.filter(b => b !== box); // Remove the box
        }
    });

                // Collision with invincibility box


    coins.forEach(coin => {
        if (user.x < coin.x + coin.width &&
            user.x + user.width > coin.x &&
            user.y < coin.y + coin.height &&
            user.y + user.height > coin.y) {
            if (user == player) {
            coinScore = coinScore+1
            }
            else if (user == player2) {
                coinScore2 = coinScore2+1

            }
                  // Play the coin sound
            coinSound.currentTime = 0; // Restart sound so it plays every time
            coinSound.play();

            coins = coins.filter(c => c !== coin); // Remove the box


        }
    });
    monsters.forEach(monster => {
        if (user.x < monster.x + monster.width &&
            user.x + user.width > monster.x &&
            user.y < monster.y + monster.height &&
            user.y + user.height > monster.y) {
            monsters = monsters.filter(m => m !== monster); // Remove the box


        }
    });
}

function updateEnemies() {
    enemies.forEach(enemy => enemy.x -= gameSpeed);
    enemies = enemies.filter(enemy => enemy.x + enemy.width > 0);

    if (Math.random() < 0.02) {
        let newEnemy = {
            x: canvas.width,
            y: Math.random() * (canvas.height - 60),
            width: 30,
            height: Math.floor(Math.random() * 40) + 20
        };
        enemies.push(newEnemy);
    }
}

function updateCoins() {
    coins.forEach(coin => coin.x -= gameSpeed);
    coins = coins.filter(coin => coin.x + coin.width > 0);

    if (Math.random() < 0.02) {
        let newCoin= {
            x: canvas.width,
            y: Math.random() * (canvas.height - 60),
            width: 30,
            height: 30
        };
        coins.push(newCoin);
    }
}

function updateMonsters() {
    monsters.forEach(monster => {
// Move the coin left by the gameSpeed (horizontal movement)
monster.x += (Math.random() - 0.5) * 14 - 5

// Add random movement to the vertical position
monster.y += (Math.random() - 0.5) * 14;  // Random movement between -2 and 2 (adjust the multiplier as needed)

// Ensure the coin stays within the vertical bounds of the canvas
if (monster.y < 0) monster.y = 0;
if (monster.y + monster.height > canvas.height) monster.y = canvas.height - monster.height;
});
monsters = monsters.filter(monster => monster.x + monster.width > 0);

    if (Math.random() < 0.01) {
        let newMonster = {
            x: canvas.width,
            y: Math.random() * (canvas.height - 30),
            width: 30,
            height: 30
        };
        monsters.push(newMonster);
    }
}





function updateScore() {
    score += 1;
    score2 +=1;
    if (score % 500 === 0) gameSpeed += 0.5;
}


function togglePause(event) {
    if (event.code === "Space") {
        
    
        event.preventDefault(); // Prevents page scrolling
        isPaused = !isPaused;   // Toggle pause state
    
        if (isPaused) {
            document.getElementById("pauseModal").style.display = "flex";

            console.log("Game Paused");
        } else {
            document.getElementById("pauseModal").style.display = "none";

            console.log("Game Resumed");
        }
    }
    }

    document.getElementById("resumeButton").addEventListener("click", () => {
    isPaused = false;
    document.getElementById("pauseModal").style.display = "none";
    console.log("Game Resumed");
});

    document.getElementById("mainMenuButton").addEventListener("click", () => {
    window.location.href = "index.html"; 
});



 
    document.addEventListener("keydown", togglePause);







function gameLoop() {
    if (gameRunning && !isPaused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatforms();
    drawEnemies();
    drawCoins();
    drawMonsters();

    drawScore();
    drawScore2();

    drawInvincibilityTime()
    drawInvincibilityTime2()

    //drawJetpackFuel();
    //drawJetpackFuel2();

    drawInvincibilityBoxes();
    updatePlayer(player, keys);
    updatePlayer(player2, keys);


    updateInvincibility(player);
    updateInvincibility(player2);

    updateEnemies();
    updateCoins();
    updateMonsters();
    drawLives();
    drawLives2();
    drawCoinScore();
    drawCoinScore2();


    updateInvincibilityBoxes();
    updateScore();
    checkCollisions(player);
    checkCollisions(player2);

    drawPlayer(player);
    drawPlayer(player2);
    drawplayerImage(player);
    drawplayer2Image(player2);

}

requestAnimationFrame(gameLoop); // Keep the loop running
}

// Function to toggle pause when Spacebar is pressed


gameLoop();


}

