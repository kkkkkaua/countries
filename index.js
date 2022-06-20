const cards = {
  search(option) {
    const url = "https://restcountries.com/v3.1/region/";

    fetch(url + option)
      //Fetch é usado para utilizar API's
      .then((r) => r.json())
      .then((json) => cards.create(json));
    //Then = Quando concluído, execute...
  },

  create(countries) {
    const countriesArea = document.querySelector(".countries");
    countriesArea.innerHTML = "";
    //InnerHTML = Dentro do HTML
    countries.forEach((country) => {
      //For each = para cada um
      countriesArea.innerHTML += `
        <div class="card">
        <img src="${country.flags.png}" alt="${country.name.common}">
        <div class="info">
          <h2>${country.name.common}</h2>
          <p><strong>Population: </strong>${country.population.toLocaleString(
            "en-US"
          )}</p>
          <p><strong>Region: </strong>${country.region}</p>
          <p><strong>Capital: </strong>${
            country.capital ? country.capital : "none"
          }</p>
        </div>
      </div>
      `;
    });
  },
};

const theme = {
  colorTheme: "light",
  change() {
    const body = document.querySelector("body");
    const icon = document.querySelector(".theme i");

    if (theme.colorTheme === "light") {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");

      theme.colorTheme = "dark";
      return;
    }
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");

      theme.colorTheme = "light";
  },
};

const app = {
  init() {
    const select = document.querySelector(".options");
    const themeButton = document.querySelector(".theme button");
    themeButton.addEventListener("click", theme.change);
    select.addEventListener("change", () => {
      cards.search(select.value);
    });
  },
};

app.init();
