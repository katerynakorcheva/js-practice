export class Book {
  #title;
  #author;
  #year;
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get year() {
    return this.#year;
  }
  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Title must be a string");
    }
    this.#title = value;
  }

  set author(value) {
    if (typeof value !== "string") {
      throw new Error("Author must be a string");
    }
    this.#author = value;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new Error("Year must be a number");
    }
    this.#year = value;
  }
  printInfo() {
    console.log(`Hello, this book is ${this.title}, its author is ${this.author} and published in ${this.year}`);
  }

  static findOldest(books) {
    return books.reduce((oldest, book) => {
      if (book.year < oldest.year) {
        return book;
      }
      return oldest;
    });
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log(book1.title);

book1.year = 1926;
console.log(book1.year);

try {
  book1.title = 123;
} catch (error) {
  console.log(error.message);
}
