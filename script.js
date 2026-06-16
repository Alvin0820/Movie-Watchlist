const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");

const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");

const movieList = document.getElementById("movie-list");
const clearWatchedBtn = document.getElementById("clear-watched-btn");

const filterBtns = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

appTitle.textContent = "My Movie Watchlist";

movieCount.textContent = "0 movies";

titleInput.setAttribute("placeholder", "Try: The Matrix");
titleInput.removeAttribute("required");

titleInput.setAttribute("required", "");

// What is the difference between getAttribute("value") and .value?
// getAttribute("value")
// Returns the value written in the HTML attribute.
//
// .value
// answer: Returns the current value inside the input, including anything
// the user has typed after the page loaded.

// Why do we attach the listener to #movie-list instead of to each button?
// Answer:
// answer: Because the buttons are created dynamically after the page loads.
// Event delegation lets one listener handle clicks for all current
// and future buttons.
//
// What does event.target.closest("li") do?
// Answer:
// It walks up the DOM tree and returns the nearest <li> ancestor,
// giving us the entire movie card.

movieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const genre = genreInput.value;

  const movieCard = createMovieCard(title, genre);
  movieList.appendChild(movieCard);

  updateCount();
  applyFilter(currentFilter);

  movieForm.reset();
});

function createMovieCard(title, genre) {
  const card = document.createElement("li");
  card.classList.add("movie-card");
  card.setAttribute("data-genre", genre);

  const infoDiv = document.createElement("div");

  const titleSpan = document.createElement("span");
  titleSpan.classList.add("movie-title");
  titleSpan.textContent = title;

  const genreSpan = document.createElement("span");
  genreSpan.classList.add("movie-genre");
  genreSpan.textContent = genre || "No genre";

  infoDiv.appendChild(titleSpan);
  infoDiv.appendChild(genreSpan);

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("movie-actions");

  const watchBtn = document.createElement("button");
  watchBtn.classList.add("watch-btn");
  watchBtn.textContent = "Mark Watched";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove";

  actionsDiv.appendChild(watchBtn);
  actionsDiv.appendChild(removeBtn);

  card.appendChild(infoDiv);
  card.appendChild(actionsDiv);

  return card;
}

movieList.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const card = event.target.closest("li");

  if (!card) return;

  if (event.target.classList.contains("remove-btn")) {
    card.remove();

    updateCount();
    applyFilter(currentFilter);
  }

  if (event.target.classList.contains("watch-btn")) {
    card.classList.toggle("watched");

    if (card.classList.contains("watched")) {
      event.target.textContent = "Unmark Watched";
    } else {
      event.target.textContent = "Mark Watched";
    }

    applyFilter(currentFilter);
  }
});

function updateCount() {
  const count = movieList.querySelectorAll(".movie-card").length;

  movieCount.textContent =
    count === 1 ? "1 movie" : `${count} movies`;
}

function updateFilterButtons(activeFilter) {
  filterBtns.forEach((btn) => {
    btn.classList.remove("active-filter");

    if (btn.id === "filter-" + activeFilter) {
      btn.classList.add("active-filter");
    }
  });
}

function applyFilter(filter) {
  currentFilter = filter;

  updateFilterButtons(filter);

  const cards = movieList.querySelectorAll(".movie-card");

  cards.forEach((card) => {
    if (filter === "all") {
      card.classList.remove("filtered-out");
    }

    else if (filter === "watched") {
      if (card.classList.contains("watched")) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    }

    else if (filter === "unwatched") {
      if (!card.classList.contains("watched")) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    }
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.id.replace("filter-", "");

    applyFilter(filter);
  });
});

clearWatchedBtn.addEventListener("click", () => {
  const watchedCards = movieList.querySelectorAll(".watched");

  watchedCards.forEach((card) => {
    card.remove();
  });

  updateCount();
  applyFilter(currentFilter);
});