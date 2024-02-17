class TeamGrid extends HTMLElement {
    constructor() {
        super();

        this._items = [];
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="team-grid">
                ${this.members.length === 0 ? '<div class="team-grid-item">No team members</div>' : ''}
                ${this.members
                    .map(
                        (item) => `<div class="team-member">
                            <img src="${item.image}" alt="${item.name}" class="team-member-image" />
                            <div class="team-member-name">${item.name}</div>
                            <div class="team-member-position">${item.position}</div>
                            <div class="team-member-email">
                                <a href="mailto:${item.email}">${item.email}</a>
                            </div>
                        </div>`
                    )
                    .join('')}
            </div>
        `;
    }

    set members(value) {
        this._items = value;
        this.render();
    }

    get members() {
        return this._items;
    }
}

customElements.define('team-grid', TeamGrid);
