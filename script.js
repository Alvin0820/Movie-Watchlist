const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");

const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");

const movieList = document.getElementById("movie-list");
const clearWatchedBtn = document.getElementById("clear-watched-btn");

const filterBtn = document.querySelectorAll(".filter-btn");

appTitle.textContent = "My Movie Watchlist";

movieCount.textContent = "0 movies";

titleInput.setAttribute("placeholder", "Try: The Matrix");
titleInput.removeAttribute("required");

titleInput.setAttribute("required", ""); // put it back

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → It would display Null as Html doesn't support it
// .value               → Displays on what was typed in title input

// Phase 3
movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const title = titleInput.value;
    const genre = genreInput.value;
  
    const movieCard = createMovieCard(title, genre);
    movieList.appendChild(movieCard);
  
    movieForm.reset();
  });

  //Phase 4
  function createMovieCard(title, genre) {
    const card = document.createElement("li");
    card.classList.add("movie-card");
    card.setAttribute("data-genre", genre);
  
    const infoDiv = document.createElement("div")
  
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
    const card = event.target.closest("li");
  
    if (!card) return;
  
    if (event.target.classList.contains("remove-btn")) {
      card.remove();
    }
  
    if (event.target.classList.contains("watch-btn")) {
      card.classList.toggle("watched");
    }
  });
    