//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const urlColor = "https://pokeapi.co/api/v2/pokemon-color/" + poke1;
  // const info = document.querySelector("span");
  // info.classList = "";
  const images = document.querySelector("section");
  fetch(urlColor)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      images.innerHTML = "";
      // const random = Math.floor(Math.random() * data.pokemon_species.length);
      // console.log(random);
      // const poke = data.pokemon_species[random].name;
      const pokeArr = data.pokemon_species;
      pokeArr.forEach((e) => {
        const poke = e.name;
        console.log(poke);
        const urlPoke = `https://pokeapi.co/api/v2/pokemon/${poke}`;

        fetch(urlPoke)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            images.innerHTML += `<img src="${data.sprites.front_default}" alt="" />`;
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// create a feature to display name and info when clicking on each poke
