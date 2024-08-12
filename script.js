var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");
if (cancelpopup) { // Check if cancelpopup exists
    cancelpopup.addEventListener("click", function(event){
        event.preventDefault();
    });
}
 // Function to add new book details to the homepage 
function addBookToHomePage(title, author, description) {
    var container = document.querySelector(".container");
    var div = document.createElement('div');
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h1>${title}</h1>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button class="delete-book">Delete</button>`;
    container.append(div);
}

// Event listener for the "Add" button in the popup
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Event listener for the "Add Book" button in the popup
addbook.addEventListener("click", function(event){
    var bookTitle = booktitleinput.value;
    var bookAuthor = bookauthorinput.value;
    var bookDescription = bookdescriptioninput.value;
    addBookToHomePage(bookTitle, bookAuthor, bookDescription);
    // Clear input fields after adding the book
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
    // Close the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Event delegation to handle delete book functionality
document.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("delete-book")) {
        event.target.closest('.book-container').remove();
    }
});

