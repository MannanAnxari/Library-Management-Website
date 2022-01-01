console.log('Hello World');

// Constructor
function Book(Name, Author, Type) {
    this.name = Name;
    this.author = Author;
    this.type = Type;
}

// Display Constructor
function Display() {

}

// Add Method To Display ProtoType
Display.prototype.add = function (book) {
    console.log('Add UI')

    tableBody = document.getElementById('tableBody');
    let uiString = `
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>`;

    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, messag) {
    let message = document.getElementById('msg');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Alert!</strong> ${messag}
                            <button type="button" class="btn-close" data-bs-dismiss="alert"aria-label="Close"></button>
                        </div>`;

    setTimeout(function (){
        message.innerHTML = '';
    }, 3000);
}
// Add Submit Event Listener to LibraryForm
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let scifi = document.getElementById('Sci_Fi');
    let history = document.getElementById('Historical');
    let cooking = document.getElementById('Cooking');
    let type;

    if (scifi.checked) {
        type = scifi.value;
    }
    else if (history.checked) {
        type = history.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.show('success', 'Your Book Sucessfully Added')
        display.add(book);
        display.clear();
    }
    else {
        display.show('danger', 'Sorry, You Cannot Add This Book')
    }
}
