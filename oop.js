class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isIssued = false; 
    }

    getInfo() {
        let status = this.isIssued ? 'Issued' : 'Available';
        return `${this.title} by ${this.author} - ${status}`;
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book '${book.title}' added to the library.`);
    }

    issueBook(title) {
        for (let book of this.books) {
            if (book.title === title) {
                if (!book.isIssued) {
                    book.isIssued = true;
                    console.log(`Book '${title}' has been issued.`);
                } else {
                    console.log(`Sorry, the book '${title}' is already issued.`);
                }
                return;
            }
        }
        console.log(`Book '${title}' not found in the library.`);
    }

    returnBook(title) {
        for (let book of this.books) {
            if (book.title === title) {
                if (book.isIssued) {
                    book.isIssued = false;
                    console.log(`Book '${title}' has been returned.`);
                } else {
                    console.log(`Book '${title}' was not issued.`);
                }
                return;
            }
        }
        console.log(`Book '${title}' not found in the library.`);
    }

    displayBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("Available books:");
        this.books.forEach(book => console.log(book.getInfo()));
    }
}

let myLibrary = new Library();
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("1984", "George Orwell");
let book3 = new Book("To Kill a Mockingbird", "Harper Lee");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.displayBooks();
myLibrary.issueBook("1984");
myLibrary.issueBook("1984");
myLibrary.returnBook("1984");
myLibrary.displayBooks();
