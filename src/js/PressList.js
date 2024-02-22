class PressList extends HTMLElement {
  constructor() {
    super();

    this._articles = [];
    this.render();
  }

  render() {
    const press = [
      {
        route:
          "https://www.wateraid.org/se/blog/carlsberg-och-wateraid-inleder-samarbete-for-att-bekampa-vattenbrist-i-sodra-indien",
        img: "./images/pressroom/cleanwater.jpeg",
        name: "Carlsberg and WaterAid begin collaboration to fight water shortages in southern India",
      },
      {
        route:
          "https://www.wateraid.org/se/blog/9-saker-att-ha-koll-pa-i-en-kris-nar-det-galler-vatten",
        img: "./images/pressroom/water.jpeg",
        name: "9 things to keep in mind in a water crisis",
      },
      {
        route:
          "https://www.wateraid.org/se/blog/wateraid-anvander-schackspel-for-att-belysa-menshalsa",
        img: "./images/pressroom/menstrualhealth.jpeg",
        name: "WaterAid uses chess games to highlight menstrual health",
      },
      {
        route:
          "https://www.wateraid.org/se/blog/blogg-besok-i-uganda-nya-projekt-pa-gang",
        img: "./images/pressroom/blogg.jpeg",
        name: "BLOG: Visit to Uganda - new projects underway",
      },
      {
        route:
          "https://www.wateraid.org/se/blog/ny-rapport-om-kvinnors-egenmakt",
        img: "./images/pressroom/womenempowerment.jpeg",
        name: "New report on women's empowerment",
      },
      {
        route:
          "https://www.wateraid.org/se/blog/ny-forskning-visar-hur-extrema-vadervaxlingar-odelagger-miljontals-liv",
        img: "./images/pressroom/weatherchange.jpeg",
        name: "New research shows how extreme weather changes are devastating millions of lives",
      },
    ];
    this.innerHTML = `
        <section
        class="w-full max-w-[1280px] mx-auto md:px-12 px-8 grid md:grid-cols-3 gap-8">
        ${press
          .map(
            (item) => `
            <a
            class="pressCard bg-light-background dark:bg-dark-background"
            href="${item.route}">
            <img src="${item.img}" class="rounded" />
            <p class="text-2xl font-semibold text-brand-main">
              ${item.name}
            </p>
          </a>
      `
          )
          .join("")}
      </section>
        `;
  }
}

customElements.define("press-list", PressList);
