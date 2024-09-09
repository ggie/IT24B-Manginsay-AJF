// Define the Book class
class Book {
    // Constructor to initialize a new book with title and author
    constructor(title, author) {
        this.title = title; // Title of the book
        this.author = author; // Author of the book
        this.isIssued = false; // Status of whether the book is issued or not
    }

    // Method to get information about the book
    getInfo() {
        // Determine the status of the book
        let status = this.isIssued ? 'Issued' : 'Available';
        // Return a string with the book's details and its status
        return `${this.title} by ${this.author} - ${status}`;
    }
}

// Define the Library class
class Library {
    // Constructor to initialize a new library with an empty list of books
    constructor() {
        this.books = []; // List to store the books in the library
    }

    // Method to add a book
    addBook(book) {
        this.books.push(book); // Add the book to the books list
        console.log(`Book '${book.title}' added to the library.`); // Log the addition
    }

    // Method to issue a book by its title
    issueBook(title) {
        // Iterate over the books
        for (let book of this.books) {
            if (book.title === title) { // Check if the current book matches the title
                if (!book.isIssued) { // Check if the book is not already issued
                    book.isIssued = true; // Mark the book as issued
                    console.log(`Book '${title}' has been issued.`); // Log the issuance
                } else {
                    console.log(`Sorry, the book '${title}' is already issued.`); // Log if already issued
                }
                return; // Exit 
            }
        }
        // book was not found
        console.log(`Book '${title}' not found in the library.`); // Log the error
    }

    // Method to return 
    returnBook(title) {
        // Iterate 
        for (let book of this.books) {
            if (book.title === title) { // Check if the current book matches the title
                if (book.isIssued) { // Check if the book is currently issued
                    book.isIssued = false; // Mark the book as returned
                    console.log(`Book '${title}' has been returned.`); // Log the return
                } else {
                    console.log(`Book '${title}' was not issued.`); // Log if the book was not issued
                }
                return; // Exit 
            }
        }
        // book was not found
        console.log(`Book '${title}' not found in the library.`); // Log the error
    }

    // Method to display
    displayBooks() {
        if (this.books.length === 0) { // Check if there are no books
            console.log("No books in the library."); // Log that the library is empty
            return; // Exit the method
        }
        console.log("Available books:"); // Log the list header
        // Iterate over the books and display their information
        this.books.forEach(book => console.log(book.getInfo()));
    }
}

// Create an instance of Library
let myLibrary = new Library();

// Create instances of Book
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("1984", "George Orwell");
let book3 = new Book("To Kill a Mockingbird", "Harper Lee");

// Add 
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Display 
myLibrary.displayBooks();

// Issue 
myLibrary.issueBook("1984");

// Try 
myLibrary.issueBook("1984");

// Return 
myLibrary.returnBook("1984");

// Display
myLibrary.displayBooks();
