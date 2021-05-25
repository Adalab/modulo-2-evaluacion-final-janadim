"use strict";const allData=[],showList=document.querySelector(".js-showList"),clickBtn=document.querySelector(".js-btn");let showArray,localfavArrayId,localfavArrayElement,favArrayId=[],favArrayElement=[];const favListLeft=document.querySelector(".favContainer");function handleButton(){let e=document.querySelector(".js-search").value;fetch("//api.tvmaze.com/search/shows?q="+e).then(e=>e.json()).then(e=>{renderShows(e)})}function renderShows(e){showList.innerHTML="";for(let a=0;a<e.length;a++){const t=e[a].show;null===t.image?showList.innerHTML+=`<li data-id = '${t.id}' class='item'>\n            <a href="${t.url}" class='item__ref'> \n            <img class="item__ref-img" src="https://via.placeholder.com/150x200/CB9173/666666/?text=No%20IMG" alt="Tv Show"></img></a>\n            <h2 class="item__ref-name">${t.name}</h2></li>`:showList.innerHTML+=`<li data-id = '${t.id}' class='item'>\n            <a href="${t.url}" class='item__ref'>\n            <img class="item__ref-img" src="${t.image.medium}" alt="Tv Show"></img></a>\n            <h2 class="item__ref-name">${t.name}</h2></li>`}showArray=document.querySelectorAll(".item");for(const e of showArray)e.addEventListener("click",handleFavs)}function handleFavs(e){const a=e.currentTarget,t=a.dataset.id;a.classList.toggle("favorite");const r=favArrayId.find(e=>e===t);if(console.log(r),void 0===r)favArrayId.push(t),favArrayElement.push([a.innerText,a.firstChild.nextElementSibling.href,a.firstElementChild.lastChild.currentSrc]);else{let e=favArrayId.findIndex(e=>e===t);console.log(e),favArrayId.splice(e,1),favArrayElement.splice(e,1)}setLocalStorage(),renderFavShows(favArrayId,favArrayElement)}function renderFavShows(e,a){favListLeft.innerHTML="",favListLeft.innerHTML+='<h3 class="fav-title">My favorite TV Shows</h3>';for(let t=0;t<a.length;t++)favListLeft.innerHTML+=`<li data-id = '${e.id}' class='item favItem'>\n            <a href="${a[t][1]}" class='item__ref favRef'>\n            <img class="item__ref-img favImg" src="${a[t][2]}" alt="Tv Show"></img></a>\n            <h2 class="item__ref-name favName">${a[t][0]}</h2></li>`}function setLocalStorage(){localStorage.setItem("dataLocalIds",JSON.stringify(favArrayId)),localStorage.setItem("dataLocalElement",JSON.stringify(favArrayElement))}function getLocalStorage(){localfavArrayId=JSON.parse(localStorage.getItem("dataLocalIds")),localfavArrayElement=JSON.parse(localStorage.getItem("dataLocalElement")),renderFavShows(localfavArrayId,localfavArrayElement)}console.log(">> Ready :)"),clickBtn.addEventListener("click",handleButton),getLocalStorage();