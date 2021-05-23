// function addListenersToShows() {
//   for (const card of showList) {
//     card.addEventListener("click", handleFavs);
//   }
// }

function handleFavs(event) {
  const favoriteItem = event.target;
  console.log(favoriteItem);
  favoriteItem.classList.toggle("favorite");
  //   console.log(event);
}

showList.addEventListener("click", handleFavs);
