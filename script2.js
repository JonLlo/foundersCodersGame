function start2PlayerGame() {
    document.getElementById("gameModal").style.display = "none"; // Hide modal


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
};

let platforms = [
    { x: 0, y: 350, width: 800, height: 50 },
];

let enemies = [];
let coins = [];
let monsters = [];
let score = 0;
let coinScore = 0;
let gameSpeed = 2;

let invincibilityBoxes = []; // Array to hold invincibility boxes
let keys = {};

document.addEventListener("keydown", event => keys[event.code] = true);
document.addEventListener("keyup", event => keys[event.code] = false);



//Draw player

let playerImage = new Image();
playerImage.src = 'player-icon.png';  // Path to the player's icon image

// This variable ensures the image is only loaded once, preventing unnecessary reloading
let imageLoaded = false;

// Ensure the image is loaded before drawing
playerImage.onload = () => {
    imageLoaded = true;
};

function drawPlayer() {
if (imageLoaded) {
// Draw a glowing circle around the player when invincible
if (player.isInvincible) {
    ctx.shadowColor = "gold";  // Set the shadow color to gold for the glowing effect
    ctx.shadowBlur = 15;       // Control the blur effect (higher is more blurry)
    ctx.lineWidth = 5;         // Set the width of the circle's border
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, player.width + 10, 0, Math.PI * 2); // Draw a circle around the player
    ctx.stroke();  // Apply the stroke (outline)
    ctx.shadowBlur = 0; // Re  // Apply blur to everything else on the canvas
    ctx.strokeStyle = "gold";  // Set the stroke color to gold for invincibility
    ctx.lineWidth = 5;         // Set the width of the circle's border
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, player.width, 0, Math.PI * 2); // Draw a circle around the player
    ctx.stroke();  // Apply the stroke (outline)
}

// Draw the player image or the player rectangle
ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
} 
else {

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
    ctx.fillText("Invincible Time: " + invincibleSeconds, 10, 60); // Display the time at the top left
}
}

function drawJetpackFuel() {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 80, player.jetpackFuel, 10);
}


function updatePlayer() {
    if (keys["ArrowLeft"]) player.velocityX = -player.speed;
    else if (keys["ArrowRight"]) player.velocityX = player.speed;
    else player.velocityX = 0;

    if (keys["ArrowUp"] && player.jetpackFuel > 0) {
        player.isJetpacking = true;
        player.velocityY = -5;
        player.jetpackFuel -= player.jetpackFuelDepletionRate;
    } else {
        player.isJetpacking = false;
        if (player.y + player.height < canvas.height) {
            player.velocityY += player.gravity;
        }
    }

    if (!player.isJetpacking && player.jetpackFuel < player.maxJetpackFuel) {
        player.jetpackFuel += player.jetpackFuelRechargeRate;
    }

    player.x += player.velocityX;
    player.y += player.velocityY;

    platforms.forEach(platform => {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height - player.velocityY <= platform.y
        ) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isJetpacking = false;
        }
    });
}

function updateInvincibility() {
    if (player.isInvincible) {
        player.invincibleTime -= 1;
        if (player.invincibleTime <= 0) {
            player.isInvincible = false; // End invincibility
        }
    }
}

function updateInvincibilityBoxes() {
    if (Math.random() < 0.01) { // Chance to spawn invincibility box
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

function checkCollisions() {
    // Collision with enemies
    enemies.forEach(enemy => {
        if (!player.isInvincible && // Only trigger collision if not invincible
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        ) {
            location.reload();  // Restart the game on collision with enemy
        }
    })
    // Collision with enemies
    monsters.forEach(monster => {
        if (!player.isInvincible && // Only trigger collision if not invincible
            player.x < monster.x + monster.width &&
            player.x + player.width > monster.x &&
            player.y < monster.y + monster.height &&
            player.y + player.height > monster.y
        ) {
            location.reload();  // Restart the game on collision with enemy
        }
    }
    
    
    
    );

    // Collision with invincibility box
    invincibilityBoxes.forEach(box => {
        if (player.x < box.x + box.width &&
            player.x + player.width > box.x &&
            player.y < box.y + box.height &&
            player.y + player.height > box.y) {
            player.isInvincible = true;
            player.invincibleTime = 300; // 10 seconds (30 frames per second)
            invincibilityBoxes = invincibilityBoxes.filter(b => b !== box); // Remove the box
        }
    });

                // Collision with invincibility box
    coins.forEach(coin => {
        if (player.x < coin.x + coin.width &&
            player.x + player.width > coin.x &&
            player.y < coin.y + coin.height &&
            player.y + player.height > coin.y) {
            coinScore = coinScore+1
            coins = coins.filter(c => c !== coin); // Remove the box


        }
    });
    monsters.forEach(monster => {
        if (player.x < monster.x + monster.width &&
            player.x + player.width > monster.x &&
            player.y < monster.y + monster.height &&
            player.y + player.height > monster.y) {
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

    if (Math.random() < 0.03) {
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
    if (score % 500 === 0) gameSpeed += 0.5;
}










function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatforms();
    drawEnemies();
    drawCoins();
    drawMonsters();
    drawScore();
    drawInvincibilityTime()
    drawJetpackFuel();
    drawInvincibilityBoxes();
    updatePlayer();
    updateInvincibility();
    updateEnemies();
    updateCoins();
    updateMonsters();
    drawCoinScore();
    updateInvincibilityBoxes();
    updateScore();
    checkCollisions();
    drawPlayer();


    requestAnimationFrame(gameLoop);
}

gameLoop();


}