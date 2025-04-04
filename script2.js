let gameRunning = true;
const gameOverSound = new Audio("sound/gameOver.mp3")
gameOverSound.volume = 0.5;
const coinSound = new Audio("sound/shield.wav"); 
coinSound.volume = 0.5; // Default volume (can be adjusted)
const slashSound = new Audio("sound/slash.wav"); 
slashSound.volume = 0.5; // Default volume (can be adjusted)
const shieldSound = new Audio("sound/shield.wav"); 
shieldSound.volume = 0.5; // Default volume (can be adjusted)
const restart = document.getElementById('restartButton');
let isListenerAttached = false;



function start2PlayerGame(p1, p2, theme, n) {
    document.getElementById("soundIcon").style.display = "flex";






    ended = false;
    let p = 1

    document.getElementById("soundIcon").style.display = 'block'




    if (n === 2) {
        twoPlayers = true;
        document.getElementById("playerStats").style.display = "flex"; // show modal

    document.getElementById("scoreStats").style.display = "flex"; // show modal
    document.getElementById("playerStats2").style.display = "flex"; // show modal
    }
    if (n === 1) {
        document.getElementById("playerStats1Player").style.display = "flex"; // show modal

        twoPlayers = false;

    }
    if (!(n === 1 || n === 2))
     {
        //alert('error!')
     }




    const canvas = document.getElementById("gameCanvas"); // Use existing canvas
    const ctx = canvas.getContext("2d");

    const mp3Source = document.getElementById("tune"); // Source for MP3

// Handle theme change
if (theme === "normal") {
    canvas.classList.add("normal");  // Apply western theme
    mp3Source.src = "sound/normal.mp3";  // Set western theme music
} else if (theme === "sea") {
    canvas.classList.add("sea");  // Apply sea theme
    mp3Source.src = "sound/beach.mp3";  // Set beach theme music
}
 else if (theme === "western") {
    canvas.classList.add("western");  // Apply sea theme
    mp3Source.src = "sound/wildWest.mp3";  // Set beach theme music
}





    document.getElementById("gameModal").style.display = "none"; // Hide modal
    document.getElementById("resultsModal").style.display = "none"; // Hide modal
    let gameRunning = true; // Global flag to control the game loop

    // Set initial volume

//music



const music = document.getElementById("backgroundMusic");


let isPaused = false; // Track game state
music.load();  // Reload the audio to apply new source
music.volume = 0.5;
//alert(soundIcon.innerHTML)

if (soundIcon.innerHTML === '♫'
) {
   // alert('yah')
if (s === true) {
music.play();}
else {
    document.getElementById("soundIcon").innerHTML = 'OFF';



}

// Starts the music
const soundIcon = document.getElementById("soundIcon");

soundIcon.classList.remove("muted");
soundIcon.classList.add("unmuted");

}
else {
const soundIcon = document.getElementById("soundIcon");
soundIcon.classList.remove("unmuted");
soundIcon.classList.add("muted");
   
}


function toggleSound() {
    const soundIcon = document.getElementById("soundIcon");

    if (music.paused || music.muted) {
        music.play();  // Unmute and play
        s = true;
        soundIcon.classList.remove("muted");
        soundIcon.classList.add("unmuted"); 
        soundIcon.innerHTML = '♫'; // Speaker icon (sound on)
    } else {
        music.pause();  // Pause the music (mute)
        s = false;
        soundIcon.classList.remove("unmuted");
        soundIcon.classList.add("muted");
        soundIcon.innerHTML = 'OFF'; // Muted speaker icon
    }
}
if (!isListenerAttached) {
    document.getElementById("soundIcon").addEventListener("click", toggleSound);
    isListenerAttached = true;  // Set flag to true once the listener is added
}



//music ended


document.getElementById("resumeButton").addEventListener("click", function() {
});
document.getElementById("instructionsButton").addEventListener("click", function() {
    document.getElementById("pauseModal").style.display = "none";
    document.getElementById("instructionsModal").style.display = "block";


});
document.getElementById("backButton").addEventListener("click", function() {
    if (p === 1) {
    document.getElementById("pauseModal").style.display = "block";
    document.getElementById("instructionsModal").style.display = "none";

    }
});



function togglePause(event) {
    if (event.code === "Space" && ended === false)
     {


        if (document.getElementById("resultsModal").style.display === "none") {
            
        
    
        event.preventDefault(); // Prevents page scrolling
        isPaused = !isPaused;   // Toggle pause state
    
        if (isPaused) {
            document.getElementById("pauseModal").style.display = "flex";
            music.pause();
            document.getElementById("soundIcon").style.display = "none";

            console.log("Game Paused");
           // music.pause();  // Starts the music

        } else {
            if (s === true) {
                music.play()
            }

            document.getElementById("pauseModal").style.display = "none";
            document.getElementById("soundIcon").style.display = "flex";


            console.log("Game Resumed");
           // music.play();  // Starts the music

        }
    }
    else {
        
    }
}
    }

    document.getElementById("resumeButton").addEventListener("click", () => {
    isPaused = false;
    document.getElementById("pauseModal").style.display = "none";
    document.getElementById("soundIcon").style.display = "flex";
    console.log("Game Resumed");
});

    document.getElementById("mainMenuButton").addEventListener("click", () => {
    window.location.href = "index.html"; 
}); 
document.getElementById("playDiffChar").addEventListener("click", () => {
    window.location.href = "index.html"; 
}); 




 
    document.addEventListener("keydown", togglePause);










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
    isinvincibleCol: false, // Invincibility flag
    invincibletimeCol: 0,   // Time remaining for invincibility
    lives: 3,
    isDead: false,
    
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
    isinvincibleCol: false, // Invincibility flag
    invincibletimeCol: 0,   // Time remaining for invincibility
    lives: 3,
    isDead: false,


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
        if (user.isDead) {
            user.lives = "0"
            user.x = -1000;  // Move the user to a very large negative x value (off the left side of the canvas)
            user.y = -1000;  // Move the user to a very large negative y value (off the top side of the canvas)
            ctx.strokeStyle = "red";  // Set the stroke color to gold
            ctx.shadowColor = "red";  // Set the shadow color to gold for the glowing effect
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




function drawCoins() {
    coins.forEach(coin => {
        ctx.drawImage(coinImage, coin.x, coin.y, coin.width, coin.height);
    });
}


let monsterImage = new Image();
let enemyImage = new Image();
let coinImage = new Image();
let shieldImage = new Image();



if (theme === "western") {
    monsterImage.src = "icons/monsters/blue-monster.png";
    enemyImage.src = "icons/enemies/cactus.png";
    coinImage.src = 'icons/coin/silver.png';
    shieldImage.src = 'icons/shields/cocktail.png'; 
    scoreColor = "black"
    coinScoreColor = "black"
    livesScoreColor = "black"

} else if (theme === "sea") {
    monsterImage.src = 'icons/monsters/fish.png';
    enemyImage.src = "icons/enemies/cactus.png";
    coinImage.src = 'icons/coin/gold.png';
    shieldImage.src = 'icons/shields/cocktail.png'; 
    scoreColor = "black"
    coinScoreColor = "red"
    livesScoreColor = "purple"

} else {
    monsterImage.src = 'icons/monsters/blue-monster.png';  // Path to the monster image
    enemyImage.src = "icons/enemies/enemy-icon.png"; // Default enemy image
    coinImage.src = 'coin-icon.png';
    shieldImage.src = 'icons/shields/cocktail.png'; 
    scoreColor = "black"
    coinScoreColor = "red"
    livesScoreColor = "purple"


}
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


     

// Path to the monster image
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


function drawInvincibilityBoxes() {
  
    invincibilityBoxes.forEach(shield => {
        ctx.drawImage(shieldImage, shield.x, shield.y, shield.width, shield.height);
    });
}




function updatePlayer(user, keys) {
    // Player 1 controls (Arrow keys)
    if (user === player2) {
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
    else if (user === player) {
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
        

    // Prevent player from going off the left and right sides of the canvas
    if (user.x < 0) {
        user.x = 0;  // Clamp to the left edge
    } else if (user.x + user.width > canvas.width) {
        user.x = canvas.width - user.width;  // Clamp to the right edge
    }

    // Prevent player from going off the top and bottom of the canvas
    if (user.y < 0) {
        user.y = 0;  // Clamp to the top edge
    } else if (user.y + user.height > canvas.height) {
        user.y = canvas.height - user.height;  // Clamp to the bottom edge
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
function updateInvincibilityCol(user) {
    if (user.isinvincibleCol) {
        user.invincibletimeCol -= 1;
        if (user.invincibletimeCol <= 0) {
            user.isinvincibleCol = false; // End invincibility
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

     


        if (!user.isInvincible && !user.isinvincibleCol && // Only trigger collision if not invincible
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
        user.isinvincibleCol = true;
        user.invincibletimeCol = 30; // 10 seconds (30 frames per second)

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



            user.isDead = true


            


        

 
     if ((player.isDead && player2.isDead) || !twoPlayers) {

                gameRunning = false;
                ended = true;
                document.getElementById("pauseModal").style.display = "none";

    
                // Determine which player lost
                            // Determine which player lost
                if (twoPlayers === true) {
                let winningPlayer, winnerImageSrc;
             
                
    
         
                if (user === player) {
                    //here 'player' died second.
                    //if 'player' has greater than or equal the amount of coins that 'player2' has, 'player wins'
                    if (coinScore >= coinScore2) {
                        let imgUrl = new URL(playerImage.src);
                        winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                        winningPlayer = "Player 1";
                    }
                    else {
                        let imgUrl2 = new URL(player2Image.src);
                        winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                        winningPlayer = "Player 2";
    
                    }}
                else {
                     //here 'player2' died second.
                     //if 'player2' has greater than or equal the amount of coins that 'player2' has, 'player wins'
                     if (coinScore <= coinScore2) {
                        let imgUrl2 = new URL(player2Image.src);
                        winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                        winningPlayer = "Player 2";
                    }
                    else {
                        let imgUrl = new URL(playerImage.src);
                        winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                        winningPlayer = "Player 1";
    
                    }
    
    
                }
    
    
    
    
    
    
    
    
    
                console.log(winnerImageSrc)
             
                document.getElementById("modalTitleWin").textContent = `${winningPlayer}, You Win!`;
                document.getElementById("scores").innerHTML = `Player 1 Coins: ${coinScore} | Player 2 Coins: ${coinScore2} <br><br> Score: ${score}`;
                document.getElementById("winnerImage").src = winnerImageSrc;
    
    
                }
                else {
                    let imgUrl = new URL(playerImage.src);
                    winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
    
                    
                    document.getElementById("modalTitleWin").textContent = `You Lose!`;
    
                    document.getElementById("scores").innerHTML = `Coins Collected: ${coinScore} <br><br> Score: ${score}`;
    
                    document.getElementById("winnerImage").src = winnerImageSrc
    
                    
                }
    
    
                // Update scores
    
                // Show the results modal
                music.pause();
                   // Disable the pause functionality while the results modal is shown

               
                gameOverSound.currentTime = 1; // Restart sound so it plays every time
                gameOverSound.play();

                //alert('game over');



                document.getElementById("gameOverContainer").style.display = "block";

                // After 2 seconds, hide the game over container and show the results modal
                setTimeout(function() {
                    // Hide the game over container
                    document.getElementById("soundIcon").style.display = "none";

                    document.getElementById("gameOverContainer").style.display = "none";
                    
                    // Show the results modal
                    document.getElementById("resultsModal").style.display = "block";
                }, 2000); // 2000 milliseconds = 2 seconds

                
                //location.reload();  // Restart the game on collision with enemy
                       }
    
    
    
    else {


        if (user == player) {

            let imgUrl = new URL(playerImage.src);
            ImageSrc = imgUrl.pathname;

        }
        else {
            let imgUrl2 = new URL(player2Image.src);
            ImageSrc = imgUrl2.pathname;
        }

        let deadContainer = document.getElementById("deadContainer");
        let deadImage = document.getElementById("deadImage");

        deadImage.src = ImageSrc; // 
        deadContainer.style.display = "block"; // Show message and image

        slashSound.currentTime = 0; // Restart sound so it plays every time
        slashSound.play();

        // Hide the message after 2 seconds
        setTimeout(() => {
            deadContainer.style.display = "none";
        }, 1000);

    }
    
    
    
    
    
    
    
    
    }
    }
    })
    // Collision with enemies
    monsters.forEach(monster => {
        if (!user.isInvincible && !user.isinvincibleCol && // Only trigger collision if not invincible
            user.x < monster.x + monster.width &&
            user.x + user.width > monster.x &&
            user.y < monster.y + monster.height &&
            user.y + user.height > monster.y
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
                        user.isinvincibleCol = true;
                        user.invincibletimeCol = 30; // 10 seconds (30 frames per second)

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

            console.log('Monster Collision')


            user.isDead = true
            



            if ((player.isDead && player2.isDead) || !twoPlayers) {

            gameRunning = false;
            ended = true;
            document.getElementById("pauseModal").style.display = "none";


            // Determine which player lost
                        // Determine which player lost
            if (twoPlayers === true) {
            let winningPlayer, winnerImageSrc;
         
            

     
            if (user === player) {
                //here 'player' died second.
                //if 'player' has greater than or equal the amount of coins that 'player2' has, 'player wins'
                if (coinScore >= coinScore2) {
                    let imgUrl = new URL(playerImage.src);
                    winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                    winningPlayer = "Player 1";
                }
                else {
                    let imgUrl2 = new URL(player2Image.src);
                    winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                    winningPlayer = "Player 2";

                }}
            else {
                 //here 'player2' died second.
                 //if 'player2' has greater than or equal the amount of coins that 'player2' has, 'player wins'
                 if (coinScore <= coinScore2) {
                    let imgUrl2 = new URL(player2Image.src);
                    winnerImageSrc = imgUrl2.pathname; // Extracts "/characters/5.jpg"
                    winningPlayer = "Player 2";
                }
                else {
                    let imgUrl = new URL(playerImage.src);
                    winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"
                    winningPlayer = "Player 1";

                }


            }









            console.log(winnerImageSrc)
         
            document.getElementById("modalTitleWin").textContent = `${winningPlayer}, You Win!`;
            document.getElementById("scores").innerHTML = `Player 1 Coins: ${coinScore} | Player 2 Coins: ${coinScore2} <br><br> Score: ${score}`;
            document.getElementById("winnerImage").src = winnerImageSrc;


            }
            else {
                let imgUrl = new URL(playerImage.src);
                winnerImageSrc = imgUrl.pathname; // Extracts "/characters/5.jpg"

                
                document.getElementById("modalTitleWin").textContent = `You Lose!`;

                document.getElementById("scores").innerHTML = `Coins Collected: ${coinScore} <br><br> Score: ${score}`;

                document.getElementById("winnerImage").src = winnerImageSrc

                
            }


            // Update scores

            // Show the results modal
            music.pause();
                   // Disable 
                
            gameOverSound.currentTime = 1; // Restart sound so it plays every time
            gameOverSound.play();
            
            //alert('game over');



// Show the game over container
            document.getElementById("gameOverContainer").style.display = "block";

            // After 2 seconds, hide the game over container and show the results modal
            setTimeout(function() {
                // Hide the game over container
                document.getElementById("gameOverContainer").style.display = "none";
                
                // Show the results modal
                document.getElementById("resultsModal").style.display = "block";

            }, 2000); // 2000 milliseconds = 2 seconds
            
            //location.reload();  // Restart the game on collision with enemy
                   }
                
                
                
                else {
                
                   if (user == player) {

                    let imgUrl = new URL(playerImage.src);
                    ImageSrc = imgUrl.pathname;
        
                }
                else {
                    let imgUrl2 = new URL(player2Image.src);
                    ImageSrc = imgUrl2.pathname;
                }
        
                let deadContainer = document.getElementById("deadContainer");
                let deadImage = document.getElementById("deadImage");
        
                deadImage.src = ImageSrc; // Set the correct image path
                deadContainer.style.display = "block"; // Show message and image
        
                slashSound.currentTime = 0; // Restart sound so it plays every time
                slashSound.play();
        
                // Hide the message after 2 seconds
                setTimeout(() => {
                    deadContainer.style.display = "none";
                }, 1000);
        
            }}
                
                
                
                
                
                
                
                
                
                
                
                
    }
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




    function updateStats() {

        // Update Player 1 Stats
        document.getElementById("scoreNumberMid").innerHTML = "Score: <br>" + score;
        document.getElementById("scoreNumber1Player").textContent = "Score: " + score;

        document.getElementById("scoreCoin").textContent = "Coins: " + coinScore;
        document.getElementById("scoreCoin1Player").textContent = "Coins: " + coinScore;

        document.getElementById("lives").textContent = "Lives: " + player.lives;
        document.getElementById("lives1Player").textContent = "Lives: " + player.lives;


        document.getElementById("invincibleDisplay").textContent = player.isInvincible ? "Invinc: " + Math.floor(player.invincibleTime / 30) : "Invinc: 0";
        document.getElementById("invincibleDisplay1Player").textContent = player.isInvincible ? "Invinc: " + Math.floor(player.invincibleTime / 30) : "Invinc: 0";

        document.getElementById("playerImage").src = playerImage.src; // Set the player image
        document.getElementById("playerImage1Player").src = playerImage.src; // Set the player image

    
        // Update Pl
        document.getElementById("scoreCoin2").textContent = "Coins: " + coinScore2;
        //document.getElementById("scoreNumber2").textContent = "Score: " + score2;


        document.getElementById("scoreCoin2").textContent = "Coins: " + coinScore2;
        document.getElementById("lives2").textContent = "Lives: " + player2.lives;

        document.getElementById("invincibleDisplay2").textContent = player2.isInvincible ? "Invinc: " + Math.floor(player2.invincibleTime / 30) : "Invinc: 0";
        document.getElementById("player2Image").src = player2Image.src // Set player 2 image
    }


function gameLoop() {
    if (gameRunning && !isPaused) {
   

        
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatforms();
    drawEnemies();
    drawCoins();
    drawMonsters();

   

 

    //drawJetpackFuel();
    //drawJetpackFuel2();

    drawInvincibilityBoxes();
    updatePlayer(player, keys);

  
    drawPlayer(player);

    updateInvincibility(player);

    updateInvincibilityCol(player);


    updateEnemies();
    updateCoins();
    updateMonsters();




    updateInvincibilityBoxes();
    updateScore();
    checkCollisions(player);

    if (n === 2) {


    drawPlayer(player2);
    updatePlayer(player2, keys);
    checkCollisions(player2);
    updateInvincibilityCol(player2);
    updateInvincibility(player2);
    }
    updateStats();


}

requestAnimationFrame(gameLoop); // Keep the loop running
}

// Function to toggle pause when Spacebar is pressed


gameLoop();
    }


    









