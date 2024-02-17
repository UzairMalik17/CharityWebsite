class DropzoneGrid extends HTMLElement {
    constructor() {
        super();

        this._dropzones = [];
        this.render();
    }

    render() {
        const getFormattedAddress = (dropzone) => dropzone.address.split(', ').join('<br />');

        this.innerHTML = `
            <div class="dropzone-grid">
                ${this.dropzones.length === 0 ? '<div class="dropzone-grid-item">No dropzones</div>' : ''}
                ${this.dropzones
                    .map(
                        (dropzone) => `<article class="dropzone-card">
                            <div class="dropzone-image-container">
                                <a href="${dropzone.website}" target="_blank">
                                    <img src="images/dropzones/${dropzone.image}"
                                        alt="${dropzone.name}" class="dropzone-image" />
                                </a>
                            </div>
                            <div class="dropzone-card-body">
                                <h2>${dropzone.name}</h2>
                                <div class="mt-1">
                                    <a href="${dropzone.website}" class="with-icon" target="_blank">
                                        <span class="material-symbols">
                                            open_in_new
                                        </span>
                                        Website
                                    </a>
                                </div>
                                <div class="mt-1 muted with-icon dropzone-address">
                                    <span class="material-symbols" title="Address">
                                        location_on
                                    </span>
                                    <div>
                                        ${getFormattedAddress(dropzone)}
                                    </div>
                                </div>
                            </div>
                        </article>`
                    )
                    .join('')}
            </div>
        `;
    }

    set dropzones(value) {
        this._dropzones = value;
        this.render();
    }

    get dropzones() {
        return this._dropzones;
    }
}

customElements.define('dropzone-list', DropzoneGrid);
