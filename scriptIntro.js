


document.addEventListener('DOMContentLoaded', function() {

    // Function to toggle pause


    // Get modal and buttons
    let theme = ''
    const onePlayerButton = document.getElementById('onePlayerButton');
    const twoPlayersButton = document.getElementById('twoPlayersButton');
    const normalButton = document.getElementById('normalButton')
    const westernButton = document.getElementById('westernButton')
    const seaButton = document.getElementById('seaButton')





    const characterSelectionModal = document.getElementById('characterSelectionModal');
    const gameModal = document.getElementById('gameModal');
    const pause = document.getElementById('pauseModal')


    const characterGrid = document.getElementById('characterGrid');
    const confirmSelectionButton = document.getElementById('confirmSelectionButton');
    const modalTitle = document.getElementById('modalTitle');

    const resultsModalDiffChar = document.getElementById('playDiffChar');


    let playerCharacter = null;
    let player2Character = null;
    let currentPlayer = 1; // To track which player is currently selecting
    let selectedImage = null; // To keep track of the currently selected image element for Player 1
    let selectedImage2 = null; // To keep track of the currently selected image element for Player 2

    const characters = [
        'characters/1.png', 'characters/2.png', 'characters/3.png', 'characters/4.png',
        'characters/5.png', 'characters/6.png', 'characters/7.png', 'characters/8.png'
    ];

    // Function to display the character grid
    function displayCharacterGrid() {
        characterGrid.innerHTML = ''; // Clear the grid

        characters.forEach((character, index) => {
            const img = document.createElement('img');
            img.src = character;
            img.alt = 'Character ' + (index + 1);
            img.classList.add('characterChoice');
            img.addEventListener('click', () => handleCharacterSelection(character, img));
            characterGrid.appendChild(img);
        });
    }

    // Function to handle character selection
    function handleCharacterSelection(character, img) {
        // Remove the border from the previously selected character (if any)
        if (currentPlayer === 1 && selectedImage) {
            selectedImage.classList.remove('selected-green');
        } else if (currentPlayer === 2 && selectedImage2) {
            selectedImage2.classList.remove('selected-red');
        }

        // Add the border for the selected character
        if (currentPlayer === 1) {
            img.classList.add('selected-green');
            selectedImage = img; // Store reference to the selected image for Player 1
            playerCharacter = character;
        } else if (currentPlayer === 2) {
            img.classList.add('selected-red');
            selectedImage2 = img; // Store reference to the selected image for Player 2
            player2Character = character;
        }

        // Enable the "OK" button once a character is selected
        confirmSelectionButton.style.display = 'block';
    }


    // Handle the confirm button click
    confirmSelectionButton.addEventListener('click', function() {



        if (twoPlayers === true) {
            alert('twoplayers')


        if (currentPlayer === 1 && playerCharacter) {
            currentPlayer = 2; // Move to Player 2
            modalTitle.textContent = 'Player 2, pick your character'; // Title for Player 2
            confirmSelectionButton.style.display = 'none'; // Hide confirm button until Player 2 selects
        } else if (currentPlayer === 2 && player2Character) {
            characterSelectionModal.style.display = 'none'; // Hide modal when both players select
            start2PlayerGame(playerCharacter, player2Character, theme, 2); // Start the game
        }


    }
    else {
        alert('oneplayers')
        characterSelectionModal.style.display = 'none'; // Hide modal when both players select
        start2PlayerGame(playerCharacter, playerCharacter, theme, 1); // Start the game

    }
    });


    twoPlayersButton.addEventListener('click', function() {
        twoPlayers = true;
        gameModal.style.display = 'none'; // Show the modal
        themeModal.style.display = 'block'; // Show the modal

    })
    onePlayerButton.addEventListener('click', function() {
        twoPlayers = false;
        gameModal.style.display = 'none'; // Show the modal
        themeModal.style.display = 'block'; // Show the modal

    })


   normalButton.addEventListener('click', function() {
        theme = 'normal';
        displayCharacterGrid();
        themeModal.style.display = 'none'; // Show the modal
        characterSelectionModal.style.display = 'block'; // Show the modal

        if (twoPlayers === true) {
        modalTitle.textContent = 'Player 1, pick your character'; // Title for Player 1
        }
        else {
            modalTitle.textContent = 'Pick your character'; // Title for Player 1
         }




        currentPlayer = 1; // Set to Player 1
        confirmSelectionButton.style.display = 'none'; // Hide confirm button initially
    });
    westernButton.addEventListener('click', function() {
        theme = 'western';
        displayCharacterGrid();
        themeModal.style.display = 'none'; // Show the modal
        characterSelectionModal.style.display = 'block'; // Show the modal
        if (twoPlayers === true) {
            modalTitle.textContent = 'Player 1, pick your character'; // Title for Player 1
            }
            else {
                modalTitle.textContent = 'Pick your character'; // Title for Player 1
             }
        currentPlayer = 1; // Set to Player 1
        confirmSelectionButton.style.display = 'none'; // Hide confirm button initially
    });
    seaButton.addEventListener('click', function() {
        theme = 'sea';
        displayCharacterGrid();
        themeModal.style.display = 'none'; // Show the modal
        characterSelectionModal.style.display = 'block'; // Show the modal
        if (twoPlayers === true) {
            modalTitle.textContent = 'Player 1, pick your character'; // Title for Player 1
            }
            else {
                modalTitle.textContent = 'Pick your character'; // Title for Player 1
             }
        currentPlayer = 1; // Set to Player 1
        confirmSelectionButton.style.display = 'none'; // Hide confirm button initially
    });





/*
    // Display the character selection modal for 2 players
    twoPlayersButton.addEventListener('click', function() {
        displayCharacterGrid();
        gameModal.style.display = 'none'; // Show the modal
        characterSelectionModal.style.display = 'block'; // Show the modal
        modalTitle.textContent = 'Player 1, pick your character'; // Title for Player 1
        currentPlayer = 1; // Set to Player 1
        confirmSelectionButton.style.display = 'none'; // Hide confirm button initially
    });


  */

    const restart = document.getElementById('restartButton');
    const replay = document.getElementById('playAgain');


    replay.addEventListener('click', function() {
        if  (twoPlayers === true) {
            alert('2')
        start2PlayerGame(playerCharacter, player2Character, theme, 2); // Start the game
        }
        else {
            alert('1')
            start2PlayerGame(playerCharacter, player2Character, theme, 1); // Start the game

        }

    });





    restart.addEventListener('click', function() {
    start2PlayerGame(playerCharacter, player2Character, theme); // Start the game



})



    resultsModalDiffChar.addEventListener('click', function() {
    location.reload();
    });



});


