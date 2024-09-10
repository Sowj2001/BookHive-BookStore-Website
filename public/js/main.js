posts.forEach(function(post) {
    // Get the 'Done' button and the book container for this post
    var doneButton = document.getElementById('doneButton-' + post.id);
    var book = document.getElementById('book-' + post.id);

    // Add an event listener to the 'Done' button
    doneButton.addEventListener('click', function() {
        // Hide the book from the list
        book.style.display = 'none';

        // Display the success message
        alert('Your order for ' + post.book_title + ' is successfully placed!');
    });
});
