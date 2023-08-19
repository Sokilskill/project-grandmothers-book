(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v=document.querySelector(".js-open-menu"),w=document.querySelector(".js-close-menu"),m=document.querySelector(".js-mob-menu");v.addEventListener("click",b);function b(n){m.classList.toggle("is-open"),console.log("ok its working")}w.addEventListener("click",L);function L(n){console.log("ok its not working"),m.classList.toggle("is-open")}const k=document.querySelector(".popular-recipe-list");fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then(n=>{if(!n.ok)throw new Error(`Помилка запиту: ${n.status}`);return n.json()}).catch(n=>console.log(n)).then(n=>{const t=n.map(o=>`<li class="popular-recipe-list-li">
        <div class="favorite-list-img">
        <img class="round-img-1" src="${o.preview}" alt="${o.title}">
      </div>
        <div class="popular-recipe-div-list">
          <h2 class="favorite-list-h2">${o.title}</h2>
          <h3 class="favorite-list-h3" >${o.description}</h3>
        </div>
        </li>`);k.insertAdjacentHTML("beforeend",t.join(""))});function g(){const n=document.body;document.querySelector("#switch").checked?(localStorage.setItem("darkmode","true"),n.classList.add("dark-theme"),n.classList.remove("light-theme")):(localStorage.setItem("darkmode","false"),n.classList.add("light-theme"),n.classList.remove("dark-theme"))}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#switch");localStorage.getItem("darkmode")==="true"&&(n.checked=!0),g(),n.addEventListener("click",g)});document.addEventListener("DOMContentLoaded",async function(){const n=document.getElementById("openModalBtn"),t=document.getElementById("modalContainer");n.addEventListener("click",async function(){try{const e="6462a8f74c3d0ddd288980d4",i=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`)).json();if(i._id===e){const a=o(i.rating),c=`${i.rating.toFixed(1)} ${a} | ${i.time} min`,h=await(await fetch("https://tasty-treats-backend.p.goit.global/api/ingredients")).json(),f=`<div class="ingredient-list">${i.ingredients.map(u=>{const p=h.find(y=>y._id===u.id);return`<div class="ingredient-item">
                    <span class="ingredient-name">${p?p.name:"Unknown Ingredient"}</span>
                    <span class="ingredient-measure">${u.measure}</span>
                  </div>`}).join("")}</div>`;t.innerHTML=`
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2 style="text-transform: uppercase;">${i.title}</h2>
            <div id="youtubePlayer"></div>
            <p class="rating-and-time">${c}</p>
            ${f}
            <p class="tag-button">#${i.tags[0]}</p>
            <p class="instruction-text">${i.instructions}</p>
            <button class="button addToFavorite">Add to favorite</button>
            <button class="button giveRating">Give a rating</button>
          </div>
        `,t.style.display="block";const $=new YT.Player("youtubePlayer",{height:"315",width:"100%",videoId:r(i.youtube)});t.scrollTop=0;const d=t.getBoundingClientRect();d.bottom>window.innerHeight&&(t.style.top=window.innerHeight-d.height+"px")}else t.innerHTML=`
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Recipe Not Found</h2>
            <p>Sorry, the requested recipe could not be found.</p>
          </div>
        `,t.style.display="block"}catch(e){console.error("Error loading recipe data:",e)}}),window.addEventListener("click",function(e){e.target===t&&(t.style.display="none")}),t.addEventListener("click",function(e){e.target.classList.contains("close")&&(t.style.display="none")}),document.addEventListener("keydown",function(e){e.key==="Escape"&&t.style.display==="block"&&(t.style.display="none")});function o(e){const s=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M6.612.499a1.5 1.5 0 0 1 2.776 0l1.976 4.787 5.038.434a1.5 1.5 0 0 1 .832 2.572l-3.843 3.143 1.259 4.889a1.5 1.5 0 0 1-2.302 1.583L8 13.347l-4.67 3.163a1.5 1.5 0 0 1-2.302-1.582l1.259-4.89-3.843-3.142a1.5 1.5 0 0 1 .832-2.572l5.038-.434L6.612.499z"/>
    </svg>`,i=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(128, 128, 128, 0.5)" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M6.612.499a1.5 1.5 0 0 1 2.776 0l1.976 4.787 5.038.434a1.5 1.5 0 0 1 .832 2.572l-3.843 3.143 1.259 4.889a1.5 1.5 0 0 1-2.302 1.583L8 13.347l-4.67 3.163a1.5 1.5 0 0 1-2.302-1.582l1.259-4.89-3.843-3.142a1.5 1.5 0 0 1 .832-2.572l5.038-.434L6.612.499z"/>
    </svg>`,a=Math.round(e),c=s.repeat(a),l=i.repeat(5-a);return c+l}function r(e){const s=e.match(/(?:\/embed\/|v=|\/v\/|youtu\.be\/|\/v=|^v=)([-_a-zA-Z0-9]+)/i);return s&&s[1]||null}});
