const movieList = document.querySelector(".movieslist");
const userinput = document.querySelector(".userinput");
// all the movies store here
const moviesData = [
  {
    name: "ye jindgi na milegi dobara ",
    isWatched: false,
  },
];

//function to create user interface of movielist
function createUi(movies = moviesData, rootElement = movieList) {
  rootElement.innerHTML = "";
  movies.forEach((movie, index) => {
    let movieContainer = document.createElement("div");
    movieContainer.classList.add("flex");

    let input = document.createElement("input");
    input.id = index;
    input.type = "checkbox";
    if (movie.isWatched === true) {
      input.checked = true;
    }
    // change checkbox
    input.addEventListener("change", revertcheckbox);

    let moviename = document.createElement("p");
    moviename.innerText = movie.name;

    let cancleButton = document.createElement("span");
    cancleButton.innerText = "❌";
    cancleButton.setAttribute("data-id", index);
    cancleButton.addEventListener("click", deleteMovie);

    movieContainer.append(input, moviename, cancleButton);
    rootElement.append(movieContainer);
  });
}

//once a user press enter movies should be updated in
// movie list

userinput.addEventListener("keyup", (event) => {
  if (event.keyCode === 16) {
    event.preventDefault();
    moviesData.push({
      name: event.target.value,
      isWatched: false,
    });
    createUi(moviesData, movieList);
  }
});

//revert checkbox
function revertcheckbox(event) {
  let id = event.target.id;
  moviesData[id].isWatched = !moviesData[0].isWatched;
}

// delete a movie

function deleteMovie(event) {
  let id = event.target.dataset.id;
  moviesData.splice(id, 1);
  createUi();
}
