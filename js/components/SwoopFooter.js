class SwoopFooter extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="container footer-container">
                    <div class="left-footer-content">
                        &copy; 2023 Swoop. All rights reserved.
                    </div>
                    <div class="right-footer-content">
                        <div class="social-media-links">
                            <a href="#">
                                <img src="/images/icons/facebook.svg" alt="Facebook" class="social-media-icon">
                            </a>
                            <a href="#">
                                <img src="/images/icons/instagram.svg" alt="Instagram" class="social-media-icon">
                            </a>
                            <a href="#">
                                <img src="/images/icons/twitter.svg" alt="Twitter" class="social-media-icon">
                            </a>
                        </div>
                        <nav>
                            <ul class="footer-links">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/articles.html">Articles</a></li>
                                <li><a href="/dropzones">Dropzones</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/report.html">Report</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('swoop-footer', SwoopFooter);
