/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Mohammadreza Parsafard
 *      Student ID: 121755235
 *      Date:       July 23th , 2024
 */

const artists = [
  {
    artistId: "AID-1001",
    name: "Ed Sheeran",
    urls: [
      { url: "https://www.edsheeran.com", name: "Website" },
      { url: "https://instagram.com/teddysphotos", name: "Instagram" }
    ]
  },
  {
    artistId: "AID-1002",
    name: "Dua Lipa",
    urls: [
      { url: "https://www.dualipa.com", name: "Website" },
      { url: "https://instagram.com/dualipa", name: "Instagram" }
    ]
  },
  {
    artistId: "AID-1003",
    name: "Halsey",
    urls: [
      { url: "https://www.iamhalsey.com", name: "Website" },
      { url: "https://instagram.com/iamhalsey", name: "Instagram" }
    ]
  }
];

const songs = [
  // Ed Sheeran's songs
  {
    songId: "SID-2001",
    artistId: "AID-1001",
    title: "Shape of You",
    year: "2017",
    duration: 233,
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    explicit: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"
  },
  {
    songId: "SID-2002",
    artistId: "AID-1001",
    title: "Perfect",
    year: "2017",
    duration: 263,
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg"
  },
  {
    songId: "SID-2003",
    artistId: "AID-1001",
    title: "Thinking Out Loud",
    year: "2014",
    duration: 281,
    url: "https://www.youtube.com/watch?v=lp-EO5I60KA",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3e/Thinking_Out_Loud_cover.png"
  },
  {
    songId: "SID-2004",
    artistId: "AID-1001",
    title: "Castle on the Hill",
    year: "2017",
    duration: 261,
    url: "https://www.youtube.com/watch?v=K0ibBPhiaG0",
    explicit: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Castle_On_The_Hill_%28Official_Single_Cover%29_by_Ed_Sheeran.png"
  },
  {
    songId: "SID-2005",
    artistId: "AID-1001",
    title: "Photograph",
    year: "2015",
    duration: 258,
    url: "https://www.youtube.com/watch?v=nSDgHBxUbVQ",
    explicit: false,
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524"
  },
  {
    songId: "SID-2006",
    artistId: "AID-1001",
    title: "Galway Girl",
    year: "2017",
    duration: 171,
    url: "https://www.youtube.com/watch?v=87gWaABqGYs",
    explicit: false,
    imageUrl: "https://i1.sndcdn.com/artworks-000220426406-03c4qf-t1080x1080.jpg"
  },
  {
    songId: "SID-2007",
    artistId: "AID-1001",
    title: "Bad Habits",
    year: "2021",
    duration: 231,
    url: "https://www.youtube.com/watch?v=orJSJGHjBLI",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Ed_Sheeran_-_Bad_Habits_2.png"
  },

  // Dua Lipa's songs
  {
    songId: "SID-2008",
    artistId: "AID-1002",
    title: "Levitating",
    year: "2020",
    duration: 203,
    url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
    explicit: false,
    imageUrl: "https://i1.sndcdn.com/artworks-jQR7OyEBE8Vv-0-t500x500.jpg"
  },
  {
    songId: "SID-2009",
    artistId: "AID-1002",
    title: "Don't Start Now",
    year: "2019",
    duration: 183,
    url: "https://upload.wikimedia.org/wikipedia/en/2/2b/Dua_Lipa_-_Don%27t_Start_Now.png",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2b/Dua_Lipa_-_Don%27t_Start_Now.png"
  },
  {
    songId: "SID-2010",
    artistId: "AID-1002",
    title: "New Rules",
    year: "2017",
    duration: 208,
    url: "https://www.youtube.com/watch?v=k2qgadSvNyU",
    explicit: false,
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc"
  },
  {
    songId: "SID-2011",
    artistId: "AID-1002",
    title: "Physical",
    year: "2020",
    duration: 231,
    url: "https://www.youtube.com/watch?v=9HDEHj2yzew",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Dua_Lipa_-_Physical.png"
  },
  {
    songId: "SID-2012",
    artistId: "AID-1002",
    title: "Break My Heart",
    year: "2020",
    duration: 221,
    url: "https://www.youtube.com/watch?v=Nj2U6rhnucI",
    explicit: false,
    imageUrl: "https://i1.sndcdn.com/artworks-V78SOvyhOCaBHR3F-0tipuA-t500x500.jpg"
  },
  {
    songId: "SID-2013",
    artistId: "AID-1002",
    title: "IDGAF",
    year: "2017",
    duration: 221,
    url: "https://www.youtube.com/watch?v=Mgfe5tIwOj0",
    explicit: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/IDGAF_cover.png/220px-IDGAF_cover.png"
  },
  {
    songId: "SID-2014",
    artistId: "AID-1002",
    title: "One Kiss",
    year: "2018",
    duration: 214,
    url: "https://www.youtube.com/watch?v=DkeiKbqa02g",
    explicit: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/Calvin_Harris_and_Dua_Lipa_One_Kiss.png"
  },
  {
    songId: "SID-2015",
    artistId: "AID-1002",
    title: "Houdini",
    year: "2024",
    duration: 185,
    url: "https://www.youtube.com/watch?v=suAR1PYFNYA",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/Dua_Lipa_-_Houdini.png"
  },

  // Halsey's songs
  {
    songId: "SID-2016",
    artistId: "AID-1003",
    title: "Colors",
    year: "2015",
    duration: 251,
    url: "https://www.youtube.com/watch?v=JGulAZnnTKA",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/97/Halsey_-_Colors.png"
  },
  {
    songId: "SID-2017",
    artistId: "AID-1003",
    title: "Be Kind",
    year: "2020",
    duration: 182,
    url: "https://www.youtube.com/watch?v=ePao0cTGG-o",
    explicit: false,
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2734f6b8446071189ed7319e064"
  },
  {
    songId: "SID-2018",
    artistId: "AID-1003",
    title: "Without Me",
    year: "2018",
    duration: 219,
    url: "https://www.youtube.com/watch?v=ZAfAud_M_mg",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f1/Without_Me_%E2%80%93_Halsey.png"
  },
  {
    songId: "SID-2019",
    artistId: "AID-1003",
    title: "Nightmare",
    year: "2019",
    duration: 219,
    url: "https://www.youtube.com/watch?v=Q_dqfcvTZik",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/Halsey_-_Nightmare.png"
  },
  {
    songId: "SID-2020",
    artistId: "AID-1003",
    title: "Graveyard",
    year: "2019",
    duration: 200,
    url: "https://www.youtube.com/watch?v=rPgaYeq9NvI",
    explicit: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Halsey_-_Graveyard.png/220px-Halsey_-_Graveyard.png"
  },
  {
    songId: "SID-2021",
    artistId: "AID-1003",
    title: "Bad at Love",
    year: "2017",
    duration: 180,
    url: "https://www.youtube.com/watch?v=xdYFuCp3m9k",
    explicit: false,
    imageUrl: "https://images.genius.com/67eb51d2a3caacefee39004a33a65186.1000x1000x1.jpg"
  },
  {
    songId: "SID-2022",
    artistId: "AID-1003",
    title: "You should be sad",
    year: "2020",
    duration: 205,
    url: "https://www.youtube.com/watch?v=8nBFqZppIF0",
    explicit: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Halsey_-_You_Should_Be_Sad.png"
  },
  {
    songId: "SID-2023",
    artistId: "AID-1003",
    title: "Gasoline",
    year: "2015",
    duration: 198,
    url: "https://www.youtube.com/watch?v=zRHNi3QfFlE",
    explicit: true,
    imageUrl: "https://i1.sndcdn.com/artworks-RkhXbMphCRJJ-0-t500x500.jpg"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const selectedArtist = document.querySelector("#selected-artist");
  const songCardsContainer = document.querySelector("#song-cards");

  function createArtistButtons() {
    artists.forEach((artist) => {
      const button = document.createElement("button");
      button.textContent = artist.name;
      button.addEventListener("click", () => displayArtist(artist));
      menu.appendChild(button);
    });
  }

  function createSongCard(song) {
    const card = document.createElement("div");
    card.classList.add("card");

    const songImg = document.createElement("img");
    songImg.src = song.imageUrl;
    songImg.alt = song.title;
    songImg.classList.add("card-image");
    songImg.addEventListener("click", () => window.open(song.url, "_blank"));
    card.appendChild(songImg);

    const songInfo = document.createElement("div");
    songInfo.classList.add("song-info");

    const songTitleContainer = document.createElement("p");
    const songTitleLabel = document.createElement("span");
    songTitleLabel.textContent = "Song Title: ";
    songTitleLabel.classList.add("label");
    const songTitle = document.createElement("span");
    songTitle.textContent = song.title;
    songTitleContainer.appendChild(songTitleLabel);
    songTitleContainer.appendChild(songTitle);
    songInfo.appendChild(songTitleContainer);

    const songYearContainer = document.createElement("p");
    const songYearLabel = document.createElement("span");
    songYearLabel.textContent = "Year Recorded: ";
    songYearLabel.classList.add("label");
    const songYear = document.createElement("span");
    songYear.textContent = song.year;
    songYearContainer.appendChild(songYearLabel);
    songYearContainer.appendChild(songYear);
    songInfo.appendChild(songYearContainer);

    const songDurationContainer = document.createElement("p");
    const songDurationLabel = document.createElement("span");
    songDurationLabel.textContent = "Duration: ";
    songDurationLabel.classList.add("label");
    const songDuration = document.createElement("span");
    songDuration.textContent = `${Math.floor(song.duration / 60)}:${String(
      song.duration % 60
    ).padStart(2, "0")}`;
    songDurationContainer.appendChild(songDurationLabel);
    songDurationContainer.appendChild(songDuration);
    songInfo.appendChild(songDurationContainer);

    card.appendChild(songInfo);

    return card;
  }

  function displayArtist(artist) {
    selectedArtist.textContent = artist.name;
    const artistLinks = artist.urls
      .map((url) => `<a href="${url.url}" target="_blank">${url.name}</a>`)
      .join(", ");
    selectedArtist.innerHTML += ` (${artistLinks})`;

    const artistSongs = songs.filter((song) => song.artistId === artist.artistId && !song.explicit);
    songCardsContainer.innerHTML = "";
    artistSongs.forEach((song) => {
      const card = createSongCard(song);
      songCardsContainer.appendChild(card);
    });
  }

  createArtistButtons();
  displayArtist(artists[0]);
});
