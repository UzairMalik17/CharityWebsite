class WaterAidHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
    // Add click event listener to nav toggle button
    const navToggleButton = document.getElementById("BurgerButton");
    navToggleButton.addEventListener("click", () => {
      const targetDiv = document.getElementById("targetDiv");
      if (
        targetDiv.style.display === "none" ||
        targetDiv.style.display === ""
      ) {
        targetDiv.style.display = "inline-block";
      } else {
        targetDiv.style.display = "none";
      }
    });

    // Java script document to toggle the Dark Mode.
    // Listen for the DOMContentLoaded event
    // which fires when the initial HTML document has been loaded.
    document.addEventListener("DOMContentLoaded", () => {
      // Get the dark mode toggle button by its ID
      const modeChanger1 = document.getElementById("toggleMode1");
      const modeChanger2 = document.getElementById("toggleMode2");

      // Retrieve the dark mode state from localStorage and convert it to a boolean.
      var toggled = localStorage.getItem("darkMode") === "true";

      // Call the function to apply the current dark mode state
      updateDarkMode();

      // Add an event listener for click events on the dark mode toggle button
      modeChanger1.addEventListener("click", toggleDarkMode);
      modeChanger2.addEventListener("click", toggleDarkMode);
      function toggleDarkMode() {
        // Toggle the dark mode state, or untoggled if it is already toggled.
        toggled = !toggled;
        // Save the new dark mode state in localStorage
        localStorage.setItem("darkMode", toggled);
        // Update the UI to reflect the new dark mode state
        updateDarkMode();
      }

      // Define the function to update the UI based on the dark mode state
      function updateDarkMode() {
        // If dark mode is enabled, add the 'dark' class to the body
        if (toggled) {
          document.body.classList.add("dark");
        } else {
          // Otherwise, remove the 'dark' class from the body
          document.body.classList.remove("dark");
        }
      }
    });

    // function toggleDarkMode() {
    /*   document.documentElement.classList.toggle("dark");
    }

    const modeChanger1 = document.getElementById("toggleMode1");
    modeChanger1.addEventListener("click", toggleDarkMode);

    const modeChanger2 = document.getElementById("toggleMode2");
    modeChanger2.addEventListener("click", toggleDarkMode);*/
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
      {
        name: "Press Release",
        route: "./press.html",
      },
    ];

    this.innerHTML = `
        <nav class="w-full h-14 flex items-center justify-between bg-brand-main bg-opacity-80 fixed px-6 md:px-12">
          <a href="./index.html"><img class="w-10 h-10" src="./images/donation.svg" alt="Logo"></a>
          <div class="hidden md:flex items-center gap-6 md:gap-12">
            ${menu
              .map(
                (item) => `
              <a class="text-base md:text-lg text-black hover:text-brand-off hover:bg-black hover:scale-110 transition-all duration-200 rounded-lg px-2" href="${item.route}">
                ${item.name}
              </a>
            `
              )
              .join("")}
              <img id="toggleMode1" class="bg-transparent hover:bg-light-background cursor-pointer rounded-full" src="./images/navbar/day-and-night.png"/>
           </div>
           <img src="./images/navbar/menu.png" class="inline-block md:hidden cursor-pointer" id="BurgerButton">
           <div id="targetDiv" class="w-full sm:w-2/3 flex flex-col items-start justify-start transition-all duration-200 bg-opacity-80 bg-brand-main absolute top-14 left-0 p-8">
           <div class="flex flex-col items-start justify-start gap-8">
            ${menu
              .map(
                (item) => `
              <a class="text-base md:text-lg text-black hover:text-brand-off hover:bg-black hover:scale-110 transition-all duration-200 rounded-lg px-2" href="${item.route}">
                ${item.name}
              </a>
            `
              )
              .join("")}
              <img id="toggleMode2" class="bg-transparent hover:bg-light-background cursor-pointer rounded-full" src="./images/navbar/day-and-night.png"/>
           </div>
           </div>
        </nav>
      `;
  }
}

customElements.define("wateraid-header", WaterAidHeader);
