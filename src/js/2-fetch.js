function handleButton() {
  let inputValue = document.querySelector(".js-search").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      renderShows(data);
    });
}

clickBtn.addEventListener("click", handleButton);

function renderShows(dataArgument) {
  let emptyUrl =
    "https://via.placeholder.com/150x200/CB9173/666666/?text=No%20IMG";
  showList.innerHTML = "";
  for (let i = 0; i < dataArgument.length; i++) {
    const shows = dataArgument[i].show;

    if (shows.image === null) {
      showList.innerHTML += `<li class='item'>
            <a href="${shows.url}" class='item__ref'><img class="item__ref-img" src="${emptyUrl}" alt="Tv Show"></img></a><h2 class="item__ref-name">${shows.name}</h2></li>`;
    } else {
      showList.innerHTML += `<li class='item'>
            <a href="${shows.url}" class='item__ref'><img class="item__ref-img" src="${shows.image.medium}" alt="Tv Show"></img></a><h2 class="item__ref-name">${shows.name}</h2></li>`;
    }
  }
}
