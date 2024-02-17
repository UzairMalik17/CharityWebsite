class ArticleList extends HTMLElement {
    constructor() {
        super();

        this._articles = [];
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="article-list">
                ${this.articles.length === 0 ? '<div class="article-list-item">No articles found</div>' : ''}
                ${this.articles
                    .map(
                        (article) => `<article class="article" id="article-${article.id}">
                            <h2>${article.title}</h2>
                            <div class="article-date muted mt-1">Published on <b>${formatDateString(
                                article.date
                            )}</b></div>
                            <div class="muted">by <b>${article.author}</b></div>
                            ${article.content}
                        </article>`
                    )
                    .join('')}
            </div>
        `;
    }

    set articles(value) {
        this._articles = value;
        this.render();
    }

    get articles() {
        return this._articles;
    }
}

customElements.define('article-list', ArticleList);
