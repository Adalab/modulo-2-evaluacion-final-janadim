function handleFavs(event) {
  const favoriteItem = event.currentTarget;
  // if (
  //   favoriteItem.className === "item" ||
  //   favoriteItem.className === "item favorite"
  // ) {
  console.log(favoriteItem.class);
  favoriteItem.classList.toggle("favorite");
}

// showList.addEventListener("click", handleFavs);
