const myLibrary = [];

function Book(id, title, author, pages, read) {
    if (!new.target) {
        throw Error("Use new to call the constructor.");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
}

const library = document.querySelector("#library");
function showBooks() {
    library.replaceChildren();

    for (const book of myLibrary) {
        const newCard = document.createElement("div");
        newCard.classList = "card";
        newCard.dataset.cardId = book.id;

        const title = document.createElement("h2");
        title.textContent = book.title;
        newCard.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        newCard.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = parseInt(book.pages);
        newCard.appendChild(pages)

        const read = document.createElement("p");
        read.textContent = book.read;
        newCard.appendChild(read);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete book";
        newCard.append(deleteButton);

        const readStatusButton = document.createElement("button");
        readStatusButton.textContent = "Update read status";
        newCard.append(readStatusButton);

        readStatusButton.addEventListener("click", function(){
            book.toggleRead();
            showBooks();
        })

        deleteButton.addEventListener("click", function(){
            const matchId = myLibrary.findIndex((b) => b.id === book.id);
            myLibrary.splice(matchId, 1);
            showBooks();
        })

        library.appendChild(newCard);
    }
}

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const readInput = document.querySelector("#read").checked;
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    showBooks();
})