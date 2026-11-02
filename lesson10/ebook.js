import { Book } from "./task1.js";
class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value === "") {
      throw new Error("File format must be a non-empty string");
    }
    this.#fileFormat = value;
  }

  printInfo() {
    console.log(`Hello, this book is ${this.title}, its author is ${this.author}, published in ${this.year} and file format is ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

const ebook1 = new EBook("1984", "George Orwell", 1949, "pdf");
const ebook2 = new EBook("To Kill a Mockingbird", "Harper Lee", 1960, "epub");
const ebook3 = new EBook("Moby-Dick", "Herman Melville", 1851, "mobi");
ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

console.log(ebook1.fileFormat);

ebook1.fileFormat = "epub";
console.log(ebook1.fileFormat);

try {
  ebook1.fileFormat = "";
} catch (error) {
  console.log(error.message);
}


const book4 = new Book("Pride and Prejudice", "Jane Austen", 1813);

const oldestBook = Book.findOldest([book4, ebook1, ebook2, ebook3]);
oldestBook.printInfo();

const convertedBook = EBook.fromBook(book4, "pdf");
convertedBook.printInfo();
