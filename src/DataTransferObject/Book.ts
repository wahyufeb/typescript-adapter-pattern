import { ContentAuthor, ContentTitle } from "../types/types";

class Book {
    private _title: ContentTitle;
    private _author: ContentAuthor;

    constructor(title: ContentTitle, author: ContentAuthor) {
        this._title = title;
        this._author = author;
    }

    get title(): ContentTitle {
        return this._title;
    }

    set title(value: ContentTitle) {
        this._title = value;
    }

    get author(): ContentAuthor {
        return this._author;
    }

    set author(value: ContentAuthor) {
        this._author = value;
    }
}

export default Book;