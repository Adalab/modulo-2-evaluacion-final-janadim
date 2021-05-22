fetch("https://api.tvmaze.com/search/shows?q=girls")
  .then((response) => response.json())
  .then((data) => {
    renderShows(data);
  });
function renderShows(data) {
  showList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const shows = data[i].show;
    showList.innerHTML += `<li>
            <h2 class="item__name">${shows.name}</h2>
            <a href="${shows.url}"><img class="item__ref" src="${shows.image.medium}" alt="Tv Show Girls"></img></a>
            </li>`;
  }
}
