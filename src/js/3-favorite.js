function handleFavs(event) {
  const favoriteItem = event.currentTarget;
  const showId = favoriteItem.dataset.id;

  favoriteItem.classList.toggle("favorite");

  const isPresent = favArrayId.find((favoriteId) => favoriteId === showId);
  console.log(isPresent);
  if (isPresent === undefined) {
    favArrayId.push(showId);
    favArrayElement.push([
      favoriteItem.innerText,
      favoriteItem.firstChild.nextElementSibling.href,
      favoriteItem.firstElementChild.lastChild.currentSrc,
    ]);
  } else {
    let indexRemove = favArrayId.findIndex((id) => id === showId);
    console.log(indexRemove);
    favArrayId.splice(indexRemove, 1);
    favArrayElement.splice(indexRemove, 1);
  }

  setLocalStorage();
  renderFavShows(favArrayId, favArrayElement);
}

function renderFavShows(arrayIdsArgument, arrayElementsArgument) {
  favListLeft.innerHTML = "";
  favListLeft.innerHTML += `<h3 class="fav-title">My favorite TV Shows</h3>`;
  for (let i = 0; i < arrayElementsArgument.length; i++) {
    favListLeft.innerHTML += `<li data-id = '${arrayIdsArgument.id}' class='item favItem'>
            <a href="${arrayElementsArgument[i][1]}" class='item__ref favRef'>
            <img class="item__ref-img favImg" src="${arrayElementsArgument[i][2]}" alt="Tv Show"></img></a>
            <h2 class="item__ref-name favName">${arrayElementsArgument[i][0]}</h2></li>`;
  }
}
