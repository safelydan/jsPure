const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const songsContainer = document.querySelector("#songs-container");
const prevAndNextContainer = document.querySelector("#prev-and-next-container");

const apiUrl = "https://api.lyrics.ovh";

async function showSongs(songsInfo) {
  try {
    songsContainer.innerHTML += songsInfo
      .map(
        (song) => `
      <li class="song">
      <span class="song-artist"><strong>${song.artist.name}</strong> ${song.title}</span>
      <button class="btn">Ver letra</button>
      </li>`
      )
      .join("");

    if (songsInfo.prev || songsInfo.next) {
      prevAndNextContainer.innerHTML = `
            ${songsInfo.next ? `<button>Próximas</button>` : ""}
        `;
    }
  } catch (error) {
    console.log("erro ao exibir musicas", error);
  }
}

async function fetchSongs(term) {
  try {
    const song = await fetch(`${apiUrl}/suggest/${term}`);
    const songs = await song.json();
    const songsData = songs?.data;

    songsContainer.innerHTML = `
    <h3 class="artist-searched" >Resultados para: ${term}</h3>

  `;
    showSongs(songsData);
  } catch (error) {
    console.log("erro ao buscar musicas", error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">por favor digite um termo valido </li>`;
    return;
  }

  fetchSongs(searchTerm);
});
