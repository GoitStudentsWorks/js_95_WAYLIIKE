import{i as l,a as n}from"./vendor-2dcf4ad5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();document.querySelector("#start");document.querySelector("#end");const g=document.querySelector("#cart-counter");function y(){let t=localStorage.getItem("basket");return t?(t=JSON.parse(t),t.length):0}function A(){g.textContent=y()}const m=document.querySelector(".bob"),c=document.querySelector(".backdrop"),p=document.querySelector(".button-modal-icon");document.addEventListener("keydown",L);m.addEventListener("click",d);p.addEventListener("click",b);function d(){c.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function b(){c.classList.toggle("is-visible"),document.body.style.overflow=""}function L(t){t.key==="Escape"&&c.classList.contains("is-visible")&&(c.classList.toggle("is-visible"),document.body.style.overflow="")}const h=document.querySelector(".modal-error-open"),v=document.querySelector(".modal-error-close"),a=document.querySelector(".modal-error");h.addEventListener("click",f);v.addEventListener("click",w);document.addEventListener("keydown",S);function f(){a.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function w(){a.classList.toggle("is-visible"),document.body.style.overflow=""}function S(t){t.key==="Escape"&&a.classList.contains("is-visible")&&(a.classList.toggle("is-visible"),document.body.style.overflow="")}const k=document.querySelector(".subscribe-form"),q="https://food-boutique.b.goit.study/api/subscription";async function B(t){if(t.preventDefault(),t.currentTarget.userAddress.value===""){l.warning({title:"Caution",message:"Please enter email!",position:"topRight"});return}try{(await n.post(q,{email:t.currentTarget.userAddress.value})).status===201&&d()}catch(e){e.response.status===409?f():l.warning({title:"Caution",message:e.message,position:"topRight"})}}async function $(t){const e="https://food-boutique.b.goit.study/api/products",r=new URLSearchParams(t);try{return(await n.get(`${e}?${r}`)).data}catch(i){return i.message}}async function C(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await n.get(`${t}`)).data}catch(e){return e.message}}async function P(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await n.get(`${t}`)).data}catch(e){return e.message}}async function R(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await n.get(`${t}`)).data}catch(e){return e.message}}async function I(t){const e="https://food-boutique.b.goit.study/api/products/";try{return(await n.get(`${e}${t}`)).data}catch(r){return r.message}}const M="/js_95_WAYLIIKE/assets/sprite-fe336fca.svg";export{B as a,P as b,R as c,C as d,$ as e,k as f,I as g,M as s,A as u};
//# sourceMappingURL=sprite-7838f1c3.js.map