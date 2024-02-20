class SwoopHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
    // Add click event listener to nav toggle button
    const navToggleButton = document.getElementById("BurgerButton");
    navToggleButton.addEventListener("click", () => {
      const targetDiv = document.getElementById("targetDiv");
      targetDiv.style.display = "inline-block";
    });

    const cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", () => {
      const targetDiv = document.getElementById("targetDiv");
      targetDiv.style.display = "none";
    });

    function toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    }

    const modeChanger1 = document.getElementById("toggleMode1");
    modeChanger1.addEventListener("click", toggleDarkMode);

    const modeChanger2 = document.getElementById("toggleMode2");
    modeChanger2.addEventListener("click", toggleDarkMode);
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
      {
        name: "Facts",
        route: "./facts.html",
      },
    ];

    this.innerHTML = `
        <nav class="w-full h-14 flex items-center justify-between bg-brand-main bg-opacity-80 fixed px-6 md:px-12">
          <a href="./index.html"><img class="w-10 h-10" src="./images/donation.svg" alt="Logo"></a>
          <div class="hidden md:flex items-center gap-6 md:gap-12">
            ${menu
              .map(
                (item) => `
              <a class="text-base md:text-lg text-black hover:text-brand-off hover:bg-black rounded-lg px-2" href="${item.route}">
                ${item.name}
              </a>
            `
              )
              .join("")}
              <img id="toggleMode1" class="bg-transparent hover:bg-light-background cursor-pointer rounded-full" src="./images/day-and-night.png"/>
           </div>
           <img src="./images/menu.png" class="inline-block md:hidden cursor-pointer" id="BurgerButton">
           <div id="targetDiv" class="w-full sm:w-2/3 flex flex-col items-start justify-start bg-blend-darken bg-opacity-80 bg-brand-main absolute top-14 left-0 p-8">
           <button class="w-full flex items-center justify-end">
           <img src="./images/cancel.png" class="bg-red-400 rounded-full" id="cancelButton"/></button>
           <div class="flex flex-col items-start justify-start gap-12">
            ${menu
              .map(
                (item) => `
              <a class="text-base md:text-lg text-black hover:text-brand-off hover:bg-black rounded-lg px-2" href="${item.route}">
                ${item.name}
              </a>
            `
              )
              .join("")}
              <img id="toggleMode2" class="bg-transparent hover:bg-light-background cursor-pointer rounded-full" src="./images/day-and-night.png"/>
           </div>
           </div>
        </nav>
      `;
  }
}

customElements.define("swoop-header", SwoopHeader);
