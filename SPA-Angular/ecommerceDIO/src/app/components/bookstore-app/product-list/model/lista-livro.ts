import { Book } from "./livro";

export class BookList {
    total!: string;
    page?: string;
    books!: Array<Book>
}