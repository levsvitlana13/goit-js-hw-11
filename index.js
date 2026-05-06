import{a as d,S as m,i as c}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="55739361-5e5874765423fdcdec273d0f7",y="https://pixabay.com/api/";async function h(o){return(await d.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),i=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({largeImageURL:s,webformatURL:n,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${u}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");l.innerHTML=r,b.refresh()}function w(){l&&(l.innerHTML="")}function v(){i&&i.classList.add("active")}function S(){i&&i.classList.remove("active")}const p=document.querySelector(".form");p&&p.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){c.warning({message:"Enter search term"});return}w(),v();try{const s=await h(r);if(!s.hits.length){c.error({message:"No images found",position:"topRight"});return}L(s.hits)}catch{c.error({message:"Something went wrong!"})}finally{S(),o.target.reset()}});
//# sourceMappingURL=index.js.map
