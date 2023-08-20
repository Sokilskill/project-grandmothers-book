(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const L=document.querySelector(".js-open-menu"),E=document.querySelector(".js-close-menu"),v=document.querySelector(".js-mob-menu");L.addEventListener("click",S);function S(o){v.classList.toggle("is-open")}E.addEventListener("click",$);function $(o){v.classList.toggle("is-open")}const I=document.querySelector(".popular-recipe-list");fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then(o=>{if(!o.ok)throw new Error(`Помилка запиту: ${o.status}`);return o.json()}).catch(o=>console.log(o)).then(o=>{const t=o.map(i=>`<li class="popular-recipe-list-li">
        <div class="favorite-list-img">
        <img class="round-img-1" src="${i.preview}" alt="${i.title}">
      </div>
        <div class="popular-recipe-div-list">
          <h2 class="favorite-list-h2">${i.title}</h2>
          <h3 class="favorite-list-h3" >${i.description}</h3>
        </div>
        </li>`);I.insertAdjacentHTML("beforeend",t.join(""))});const r=document.querySelector("#switch"),c=document.querySelector("#switch2"),f=document.querySelector("body"),y=document.getElementById("logo-img");function u(){r.checked||r.checked2?(localStorage.setItem("darkmode","true"),f.classList.add("dark-theme"),y.src="./img/header/logo-dark-theme.svg"):(localStorage.setItem("darkmode","false"),f.classList.remove("dark-theme"),y.src="./img/header/logo.svg")}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("darkmode")==="true"&&(r.checked=!0,c.checked=!0),u(),r.addEventListener("click",function(){c.checked=r.checked,u()}),r.checked=c.checked,c.addEventListener("click",function(){r.checked=c.checked,u()})});document.addEventListener("DOMContentLoaded",async function(){const o=document.querySelector(".hero-order-btn"),t=document.getElementById("modalContainer");o.addEventListener("click",async function(){try{const e="6462a8f74c3d0ddd288980d4",s=await(await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`)).json();if(s._id===e){const d=i(s.rating),l=`${s.rating.toFixed(1)} ${d} | ${s.time} min`,b=await(await fetch("https://tasty-treats-backend.p.goit.global/api/ingredients")).json(),w=`<div class="ingredient-list">${s.ingredients.map(m=>{const h=b.find(k=>k._id===m.id);return`<div class="ingredient-item">
                    <span class="ingredient-name">${h?h.name:"Unknown Ingredient"}</span>
                    <span class="ingredient-measure">${m.measure}</span>
                  </div>`}).join("")}</div>`;t.innerHTML=`
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2 style="text-transform: uppercase;">${s.title}</h2>
            <div id="youtubePlayer"></div>
            <p class="rating-and-time">${l}</p>
            ${w}
            <p class="tag-button">#${s.tags[0]}</p>
            <p class="instruction-text">${s.instructions}</p>
            <button class="button addToFavorite">Add to favorite</button>
            <button class="button giveRating">Give a rating</button>
          </div>
        `,t.style.display="block";const B=new YT.Player("youtubePlayer",{height:"315",width:"100%",videoId:a(s.youtube)});t.scrollTop=0;const g=t.getBoundingClientRect();g.bottom>window.innerHeight&&(t.style.top=window.innerHeight-g.height+"px")}else t.innerHTML=`
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Recipe Not Found</h2>
            <p>Sorry, the requested recipe could not be found.</p>
          </div>
        `,t.style.display="block"}catch(e){console.error("Error loading recipe data:",e)}}),window.addEventListener("click",function(e){e.target===t&&(t.style.display="none")}),t.addEventListener("click",function(e){e.target.classList.contains("close")&&(t.style.display="none")}),document.addEventListener("keydown",function(e){e.key==="Escape"&&t.style.display==="block"&&(t.style.display="none")});function i(e){const n=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M6.612.499a1.5 1.5 0 0 1 2.776 0l1.976 4.787 5.038.434a1.5 1.5 0 0 1 .832 2.572l-3.843 3.143 1.259 4.889a1.5 1.5 0 0 1-2.302 1.583L8 13.347l-4.67 3.163a1.5 1.5 0 0 1-2.302-1.582l1.259-4.89-3.843-3.142a1.5 1.5 0 0 1 .832-2.572l5.038-.434L6.612.499z"/>
    </svg>`,s=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(128, 128, 128, 0.5)" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M6.612.499a1.5 1.5 0 0 1 2.776 0l1.976 4.787 5.038.434a1.5 1.5 0 0 1 .832 2.572l-3.843 3.143 1.259 4.889a1.5 1.5 0 0 1-2.302 1.583L8 13.347l-4.67 3.163a1.5 1.5 0 0 1-2.302-1.582l1.259-4.89-3.843-3.142a1.5 1.5 0 0 1 .832-2.572l5.038-.434L6.612.499z"/>
    </svg>`,d=Math.round(e),l=n.repeat(d),p=s.repeat(5-d);return l+p}function a(e){const n=e.match(/(?:\/embed\/|v=|\/v\/|youtu\.be\/|\/v=|^v=)([-_a-zA-Z0-9]+)/i);return n&&n[1]||null}});
