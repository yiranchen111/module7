document.addEventListener('DOMContentLoaded', function() {
    var reserveButton = document.getElementById('Reserve');
    var availableCopies = document.getElementById('Numberofavailablecopies');

    if (reserveButton && availableCopies) {
        reserveButton.addEventListener('click', function() {
            var copiesAvailable = parseInt(availableCopies.textContent, 10);
            
            if (copiesAvailable > 0) {
                availableCopies.textContent = copiesAvailable - 1;
                alert('Your book reservation has been successful!');
            } else {
                alert('Sorry, this book is currently not available.');
            }
        });
    }
});