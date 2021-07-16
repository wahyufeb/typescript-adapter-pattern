import Article from "../DataTransferObject/Article";
import { CatalogAdapterInterface } from "../interfaces/interfaces";

class ArticleCatalogAdapter implements CatalogAdapterInterface{
    private article: Article;

    constructor(article: Article) {
        this.article = article;
    }

    getCatalogTitle(): string {
        return this.article.title + " by " + this.article.author;
    }
}

export default ArticleCatalogAdapter;