import { CatalogAdapterInterface } from "../interfaces/interfaces";
import Book from "../DataTransferObject/Book";

class BookCatalogAdapter implements CatalogAdapterInterface{
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    getCatalogTitle(): string {
        return this.book.title + " by " + this.book.author;
    }

}

export default BookCatalogAdapter;