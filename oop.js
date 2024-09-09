class Book {
    // Constructor to initialize a new book with title and author
    constructor(title, author) {
        this.title = title; 
        this.author = author; 
        this.isIssued = false; 
    }

    // Method to get information about the book
    getInfo() {
       
        let status = this.isIssued ? 'Issued' : 'Available';
        
        return `${this.title} by ${this.author} - ${status}`;
    }
}

// Define the Library class
class Library {
    
    constructor() {
        this.books = []; 
    }

    // Method to add a book
    addBook(book) {
        this.books.push(book); 
        console.log(`Book '${book.title}' added to the library.`); 
    }

    // Method to issue a book by its title
    issueBook(title) {
        // Iterate over the books
        for (let book of this.books) {
            if (book.title === title) { 
                if (!book.isIssued) { 
                    book.isIssued = true; 
                    console.log(`Book '${title}' has been issued.`); 
                } else {
                    console.log(`Sorry, the book '${title}' is already issued.`); 
                }
                return; // Exit 
            }
        }
        // Book was not found
        console.log(`Book '${title}' not found in the library.`); 
    }

    // Method to return a book by its title
    returnBook(title) {
        // Iterate over the books
        for (let book of this.books) {
            if (book.title === title) { 
                if (book.isIssued) { 
                    book.isIssued = false; // Mark the book as returned
                    console.log(`Book '${title}' has been returned.`); 
                } else {
                    console.log(`Book '${title}' was not issued.`); 
                }
                return; // Exit 
            }
        }
        // Book was not found
        console.log(`Book '${title}' not found in the library.`); 
    }

    // Method to display all books in the library
    displayBooks() {
        if (this.books.length === 0) { 
            console.log("No books in the library."); 
            return; // Exit the method
        }
        console.log("Available books:"); 
        // Iterate over the books and display their information
        this.books.forEach(book => console.log(book.getInfo()));
    }
}

// Create an instance 
let myLibrary = new Library();

// Create instances of Book with Filipino titles
let book1 = new Book("Noli Me Tangere", "José Rizal");
let book2 = new Book("El Filibusterismo", "José Rizal");
let book3 = new Book("The Woman Who Had Two Navels", "Nick Joaquin");

// Add
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Display 
myLibrary.displayBooks();

// Issue 
myLibrary.issueBook("El Filibusterismo");

// Try to issue the same book again
myLibrary.issueBook("El Filibusterismo");

// Return 
myLibrary.returnBook("El Filibusterismo");

// Display
myLibrary.displayBooks();
