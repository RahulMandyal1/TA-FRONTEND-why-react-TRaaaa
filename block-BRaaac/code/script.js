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

// function to create elements
function createElement(type, attr, ...args) {
  let element = document.createElement(type);
  // now add attributes inside this element
  for (key in attr) {
    if (key.startsWith("data")) {
      element.setAttribute(key, attr[key]);
    }

    // support for event
    if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
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
      createElement(
        "p",
        {
          className: "para",
        },
        movie.name
      ),
      createElement(
        "button",
        { id: index, className: "canclebutton", onclick: revertWatched },
        movie.isWatched ? "watched" : " to watch"
      )
    );
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

createUi();
// delete a movie

function revertWatched(event) {
  let id = event.target.id;
  moviesData[id].isWatched = !moviesData[id].isWatched;
  createUi();
}
