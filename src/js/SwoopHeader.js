class SwoopHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const menu = [
      {
        name: "Donate",
        route: "./donation.html",
      },
      {
        name: "About",
        route: "./about.html",
      },
      {
        name: "Contact Us",
        route: "./contactUs.html",
      },
    ];

    this.innerHTML = `
        <nav class="w-full h-14 flex items-center justify-between bg-brand-main bg-opacity-80 fixed px-6 md:px-12">
          <a href="./index.html"><img class="w-10 h-10" src="./images/donation.svg" alt="Logo"></a>
          <div class="flex items-center gap-6 md:gap-12">
            ${menu
              .map(
                (item) => `
              <a class="text-base md:text-lg text-black hover:text-brand-off" href="${item.route}">
                ${item.name}
              </a>
            `
              )
              .join("")}
           </div>
        </nav>
      `;
  }
}

customElements.define("swoop-header", SwoopHeader);
