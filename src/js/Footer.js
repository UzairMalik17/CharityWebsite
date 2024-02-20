class Footer extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const social = [
      {
        img: "./images/facebook.png",
        route: "./donation.html",
      },
      {
        img: "./images/instagram.png",
        route: "./donation.html",
      },
      {
        img: "./images/linkedin.png",
        route: "./donation.html",
      },
      {
        img: "./images/twitter.png",
        route: "./donation.html",
      },
      {
        img: "./images/youtube.png",
        route: "./donation.html",
      },
    ];

    this.innerHTML = `
    <footer class="w-full max-w-[1280px] h-[400px] flex-flex-cols items-start justify-start gap-12 mx-auto md:px-12 px-8 py-8">
    <hr class="bg-brand-main">
    <div class="w-full flex flex-row items-center justify-start gap-8">
    ${social
      .map(
        (item) => `
        <a class="border-[1px] border-brand-main hover:bg-brand-main rounded-full p-2" href="${item.route}">
          <img src="${item.img}"/>
        </a>
      `
      )
      .join("")}
    </div>
    </footer>
        `;
  }
}

customElements.define("WaterAidFooter", Footer);
