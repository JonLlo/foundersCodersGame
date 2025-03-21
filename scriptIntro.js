document.addEventListener('DOMContentLoaded', function() {
    // Get modal and buttons
    const onePlayerButton = document.getElementById('onePlayerButton');
    const twoPlayersButton = document.getElementById('twoPlayersButton');
    const characterSelectionModal = document.getElementById('characterSelectionModal');
    const characterGrid = document.getElementById('characterGrid');
    const confirmSelectionButton = document.getElementById('confirmSelectionButton');
    const modalTitle = document.getElementById('modalTitle');

    let playerCharacter = null;
    let player2Character = null;
    let currentPlayer = 1; // To track which player is currently selecting
    let selectedImage = null; // To keep track of the currently selected image element for Player 1
    let selectedImage2 = null; // To keep track of the currently selected image element for Player 2

    const characters = [
        'characters/1.png', 'characters/2.png', 'characters/3.gif', 'characters/4.png',
        'characters/5.jpg', 'characters/6.png', 'characters/7.png', 'characters/8.png'
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
        if (currentPlayer === 1 && playerCharacter) {
            currentPlayer = 2; // Move to Player 2
            modalTitle.textContent = 'Player 2, pick your character'; // Title for Player 2
            confirmSelectionButton.style.display = 'none'; // Hide confirm button until Player 2 selects
        } else if (currentPlayer === 2 && player2Character) {
            characterSelectionModal.style.display = 'none'; // Hide modal when both players select
            start2PlayerGame(); // Start the game
        }
    });

    // Display the character selection modal for 2 players
    twoPlayersButton.addEventListener('click', function() {
        displayCharacterGrid();
        characterSelectionModal.style.display = 'block'; // Show the modal
        modalTitle.textContent = 'Player 1, pick your character'; // Title for Player 1
        currentPlayer = 1; // Set to Player 1
        confirmSelectionButton.style.display = 'none'; // Hide confirm button initially
    });


});


