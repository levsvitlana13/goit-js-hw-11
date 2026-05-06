import{a as d,S as m,i}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p="55739361-5e5874765423fdcdec273d0f7",y="https://pixabay.com/api/";async function g(e){return(await d.get(y,{params:{key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(e){const o=document.querySelector(".gallery");if(!o)return;const a=e.map(({largeImageURL:s,webformatURL:t,tags:r,likes:n,views:l,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${t}" alt="${r}" loading="lazy" />
        </a>

        <div class="info">
          <p>❤️ ${n}</p>
          <p>👀 ${l}</p>
          <p>💬 ${u}</p>
          <p>⬇️ ${f}</p>
        </div>
      </li>
    `).join("");o.innerHTML=a,h.refresh()}function S(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function q(){const e=document.querySelector(".loader");e&&e.classList.add("active")}function v(){const e=document.querySelector(".loader");e&&e.classList.remove("active")}const c=document.querySelector(".search-form");c&&c.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Enter search term"});return}S(),q();try{const a=await g(o);if(!a.hits.length){i.error({message:"No images found",position:"topRight"});return}L(a.hits)}catch{i.error({message:"Something went wrong!"})}finally{v(),e.target.reset()}});
//# sourceMappingURL=index.js.map
