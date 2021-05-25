function setLocalStorage() {
  localStorage.setItem("dataLocalIds", JSON.stringify(favArrayId));
  localStorage.setItem("dataLocalElement", JSON.stringify(favArrayElement));
}

function getLocalStorage() {
  localfavArrayId = JSON.parse(localStorage.getItem("dataLocalIds"));
  localfavArrayElement = JSON.parse(localStorage.getItem("dataLocalElement"));
  renderFavShows(localfavArrayId, localfavArrayElement);
}

getLocalStorage();
