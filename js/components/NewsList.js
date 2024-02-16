class NewsList extends HTMLElement {
    constructor() {
        super();

        this._items = [];
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="news-list">
                ${this.items.length === 0 ? '<div class="news-list-item">No news</div>' : ''}
                ${this.items
                    .map(
                        (item) => `<article class="news-item">
                            <img src="${item.image}" alt="${item.title}" class="news-item-image">
                            <div class="news-item-details">
                                <h3>${item.title}</h3>
                                <div class="news-list-item-date muted">${formatDateString(item.date)}</div>
                                ${item.content}
                            </div>
                        </article>`
                    )
                    .join('')}
            </div>
        `;
    }

    set items(value) {
        this._items = value;
        this.render();
    }

    get items() {
        return this._items;
    }
}

customElements.define('news-list', NewsList);
