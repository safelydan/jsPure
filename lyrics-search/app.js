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
  } catch (error) {
    console.log("erro ao exibir musicas", error);
  }
}

async function getMoreSongs(urlPrevOrNext) {
  const song = await fetch(urlPrevOrNext);
  const songs = await song.json();
  const songsData = songs?.data;
  console.log(songsData);

  songsContainer.innerHTML = `
  <h3 class="artist-searched" >Resultados para: ${term}</h3>

`;
  showSongs(songsData);
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
    console.log("aaa", songs.next);

    if (songs.prev || songs.next) {
      prevAndNextContainer.innerHTML = `
      ${
        songs.prev
          ? `<button class="btn" onClick="getMoreSongs('${songs.prev}')">Anteriores</button>`
          : ""
      }
         '${songs.next}'   ${
        songs.next
          ? `<button class="btn" onClick="getMoreSongs('${songs.next}')">Próximas</button>`
          : ""
      }
        `;
      console.log("aaa", songs.next);

      return;
    }
    prevAndNextContainer = "";
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
