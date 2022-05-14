const movieList = document.querySelector(".movieslist");
const userinput = document.querySelector(".userinput");
const cancleButton = document.querySelector(".canclebutton");
const checkboxIsWatched = document.querySelector(".iswatched");

// all the movies store here
const moviesData = [
  {
    name: "ye jindgi na milegi dobara ",
    isWatched: false,
  },
];

let createElement = React.createElement;

//function to create user interface of movielist
function createUi(movies = moviesData, rootElement = movieList) {
  let movieslist = movies.map((movie, index) => {
    let movieContainer = createElement(
      "div",
      {
        className: "flex",
      },
      createElement(
        "p",
        {
          className: "para",
        },
        movie.name
      ),
      createElement(
        "button",
        { id: index, className: "canclebutton", onClick: revertWatched },
        movie.isWatched ? "watched" : " to watch"
      )
    );
    return movieContainer;
  });
  ReactDOM.render(movieslist, rootElement);
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

createUi();
// delete a movie

function revertWatched(event) {
  let id = event.target.id;
  moviesData[id].isWatched = !moviesData[id].isWatched;
  createUi();
}
