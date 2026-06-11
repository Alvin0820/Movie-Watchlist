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

  console.log("title", title);
  console.log("genre", genre);

  movieForm.reset(); 
});
