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

createUi();

// function to create elements
function createElement(type, attr, ...args) {
  let element = document.createElement(type);
  // now add attributes inside this element
  for (key in attr) {
    if (key.startsWith("data")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  // third parameter  means all the childs
  args.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let innertext = document.createTextNode(child);
      element.append(innertext);
    }
  });

  return element;
}

//function to create user interface of movielist
function createUi(movies = moviesData, rootElement = movieList) {
  rootElement.innerHTML = "";
  movies.forEach((movie, index) => {
    let movieContainer = createElement(
      "div",
      {
        className: "flex",
      },
      createElement("input", {
        type: "checkbox",
        checked: false,
        className: "iswatched",
      }),
      createElement(
        "p",
        {
          className: "para",
        },
        movie.name
      ),
      createElement(
        "span",
        {
          "data-id": index,
          className: "canclebutton",
        },
        "❌"
      )
    );
    rootElement.append(movieContainer);
  });
}
// change checkbox
checkboxIsWatched.addEventListener("change", revertcheckbox);
//  delete a movie from movielist
cancleButton.addEventListener("click", deleteMovie);
//once a user press enter movies should be updated in
// movie list

userinput.addEventListener("keyup", (event) => {
  console.log(event.target.value);
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
