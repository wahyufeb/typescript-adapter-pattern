import { CatalogAdapterInterface } from "./interfaces/interfaces";
import BookCatalogAdapter from "./adapter/BookCatalogAdapter";
import Book from "./DataTransferObject/Book";
import ArticleCatalogAdapter from "./adapter/ArticleCatalogAdapter";
import Article from "./DataTransferObject/Article";

const list: Array<CatalogAdapterInterface> = new Array<CatalogAdapterInterface>();

list.push(new BookCatalogAdapter(new Book("Mastering Vuejs", "Chatkamon Sukkasem")));
list.push(new BookCatalogAdapter(new Book("Cookbook Typescript with Express", "June Wanwimol Jaenasavamethee")));
list.push(new BookCatalogAdapter(new Book("Express with Typesctipt and PostgreSQL", "Wahyu Febrianto")));

list.push(new ArticleCatalogAdapter(new Article("Create First SSR App with Nuxtjs", "Wahyu Febrianto")));
list.push(new ArticleCatalogAdapter(new Article("Create Custom plugin in Nuxtjs", "Ink Waruntorn")));
list.push(new ArticleCatalogAdapter(new Article("Build Rest Api with Express, Typescript and MySQL", "Lex Brian")));

list.forEach(item => {
    console.log(item.getCatalogTitle());
})

console.log(list)