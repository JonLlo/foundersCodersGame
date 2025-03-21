// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get modal and buttons
    const onePlayerButton = document.getElementById('onePlayerButton');
    const twoPlayersButton = document.getElementById('twoPlayersButton');
    


    // Add event listeners to buttons
    onePlayerButton.addEventListener('click', function() {
        startGame();
    });

    twoPlayersButton.addEventListener('click', function() {
        start2PlayerGame();
    });
});
