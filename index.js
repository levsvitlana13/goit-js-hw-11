import{a as d,S as m,i as c}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="55739361-5e5874765423fdcdec273d0f7",y="https://pixabay.com/api/";async function h(s){return(await d.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({largeImageURL:n,webformatURL:o,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${i}</span></p>
          <p><b>Comments</b><span>${u}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");l.innerHTML=r,b.refresh()}function w(){l&&(l.innerHTML="")}function v(){a&&a.classList.add("active")}function S(){a&&a.classList.remove("active")}const p=document.querySelector(".form");p&&p.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget,n=r.elements["search-text"].value.trim();if(!n){c.warning({message:"Enter search term"});return}w(),v();try{const o=await h(n);if(!o.hits||o.hits.length===0){c.error({message:"No images found",position:"topRight"});return}L(o.hits)}catch{c.error({message:"Something went wrong!",position:"topRight"})}finally{S(),r.reset()}});
//# sourceMappingURL=index.js.map
