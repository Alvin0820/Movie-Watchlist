const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");

const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");
const movieList = document.getElementById("movie-list");
const clearWatchedBtn = document.getElementById("clear-watched-btn");

const filterBtn = document.querySelectorAll(".filter-btn");


// Change the app title
appTitle.textContent = "My Movie Watchlist";

// Read and log the current count text
console.log("Count says:", movieCount.textContent);

// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies";

// .add() puts a class on the element
movieCount.classList.add("active-filter");
// Look at the browser — what changed?

// .remove() takes it off
movieCount.classList.remove("active-filter");

// .toggle() adds if missing, removes if present — one call does both
movieCount.classList.toggle("active-filter");
movieCount.classList.toggle("active-filter");

// getAttribute reads the HTML attribute as it was written in the file
console.log(titleInput.getAttribute("placeholder")); // → "Movie title..."
console.log(titleInput.getAttribute("type")); // → "text"
console.log(titleInput.getAttribute("required")); // → "" (empty string = it exists)

// setAttribute changes or adds an attribute
titleInput.setAttribute("placeholder", "Try: The Matrix");
// Refresh — the placeholder text in the input changed

// removeAttribute removes it entirely
titleInput.removeAttribute("required");
// The input is no longer required — blank submissions won't be blocked
titleInput.setAttribute("required", ""); // put it back

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → It would display Null as Html doesn't support it
// .value               → Displays on what was typed in title input

movieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const genre = genreInput.value;

  // call the function and append the card
  const card = createMovieCard(title, genre);
  movieList.appendChild(card);

  movieForm.reset();
});

movieList.addEventListener("click", (event) => {
  // if the click wasn't on a button, ignore it
  if (event.target.tagName !== "BUTTON") return;

  // get the whole card the button lives in
  const card = event.target.closest("li");

  // was it the remove button?
  if (event.target.classList.contains("remove-btn")) {
    card.remove();
  }

  // was it the watch button?
  if (event.target.classList.contains("watch-btn")) {
    card.classList.toggle("watched");

    // update button text based on state
    if (card.classList.contains("watched")) {
      event.target.textContent = "Unmark Watched";
    } else {
      event.target.textContent = "Mark Watched";
    }
  }
});

function createMovieCard(title, genre) {
    const card = document.createElement('li')
    card.classList.add('movie-card')
    card.setAttribute("data-genre", genre );

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-title")
    titleSpan.textContent = title;
    
    const titleSpan = document.createElement("span")
    titleSpan.classList.add("movie-title")
    titleSpan.textContent = title;

    const genreSpan = document.createElement("span")
    genreSpan.classList.add("movie-genre")
    genreSpan.textContent = genre || "No genre";

    infoDiv.appendChild(titleSpan);
    infoDiv.appendChild(genreSpan);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("movie-actions")

    const watchBtn = doucment.createElement("button")
    watchBtn.classList.add("watch-btn")
    watchBtn.textContent = "Mark Watched";
    
    const removeBtn = doucment.createElement("button")
    removeBtn.classList.add("remove-btn")
    removeBtn.textContent = "remove";

    actionsDiv.appendChild(watchBtn);
    actionsDiv.appendChild(removeBtn);

    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
}