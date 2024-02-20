class SwoopFooter extends HTMLElement {
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
          <footer class="w-full max-w-[1280px] flex flex-col bg-[#f0f0f0] items-center sm:items-start justify-start gap-12 rounded-lg mx-auto md:px-12 px-8 py-8">
          <div class="w-full h-[1px] bg-brand-main"></div>
          <div class="w-full grid grid-cols-2 min-[428px]:flex min-[428px]:flex-row items-center justify-start gap-8">
          ${social
            .map(
              (item) => `
              <a href="${item.route}">
                <img class="border-[1px] border-brand-main hover:bg-brand-main rounded-full p-2" src="${item.img}"/>
              </a>
            `
            )
            .join("")}
          </div>
          <div class="w-full flex flex-col items-start justify-start gap-2">
          <p>Organisationsnummer 802426-1268, Plusgiro 90 01 62-9, Bankgiro 900-1629, SWISH 900 16 29</p>
          <p>WaterAid arbetar för att alla ska ha tillgång till rent vatten, sanitet och hygien</p>
          <p>©Copyright WaterAid</p>
          </div>
          </footer>
        `;
  }
}

customElements.define("swoop-footer", SwoopFooter);
