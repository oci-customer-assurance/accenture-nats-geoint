import{r as y,y as j,G as C,H as G,D as M,I as U,s as V,J as q,g as D}from"./vendor.d5740e8b.js";var N;const m=typeof window<"u",B=e=>typeof e=="string",O=()=>{};m&&((N=window?.navigator)==null?void 0:N.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function K(e,n){function t(...r){e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})}return t}const T=e=>e();function Q(e=T){const n=y(!0);function t(){n.value=!1}function r(){n.value=!0}return{isActive:n,pause:t,resume:r,eventFilter:(...a)=>{n.value&&e(...a)}}}function W(e){return C()?(G(e),!0):!1}var E=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,n)=>{var t={};for(var r in e)X.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&E)for(var r of E(e))n.indexOf(r)<0&&Y.call(e,r)&&(t[r]=e[r]);return t};function k(e,n,t={}){const r=t,{eventFilter:i=T}=r,a=Z(r,["eventFilter"]);return j(e,K(i,n),a)}var ee=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,$=(e,n,t)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ne=(e,n)=>{for(var t in n||(n={}))J.call(n,t)&&$(e,t,n[t]);if(h)for(var t of h(n))I.call(n,t)&&$(e,t,n[t]);return e},ae=(e,n)=>te(e,re(n)),ie=(e,n)=>{var t={};for(var r in e)J.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&h)for(var r of h(e))n.indexOf(r)<0&&I.call(e,r)&&(t[r]=e[r]);return t};function oe(e,n,t={}){const r=t,{eventFilter:i}=r,a=ie(r,["eventFilter"]),{eventFilter:u,pause:s,resume:l,isActive:c}=Q(i);return{stop:k(e,n,ae(ne({},a),{eventFilter:u})),pause:s,resume:l,isActive:c}}function we(e,n,t){let r;M(t)?r={evaluating:t}:r=t||{};const{lazy:i=!1,evaluating:a=void 0,onError:u=O}=r,s=y(!i),l=y(n);let c=0;return U(async w=>{if(!s.value)return;c++;const _=c;let d=!1;a&&Promise.resolve().then(()=>{a.value=!0});try{const f=await e(v=>{w(()=>{a&&(a.value=!1),d||v()})});_===c&&(l.value=f)}catch(f){u(f)}finally{a&&_===c&&(a.value=!1),d=!0}}),i?V(()=>(s.value=!0,l.value)):l}function le(e){var n;const t=D(e);return(n=t?.$el)!=null?n:t}const g=m?window:void 0;m&&window.document;m&&window.navigator;m&&window.location;function se(...e){let n,t,r,i;if(B(e[0])?([t,r,i]=e,n=g):[n,t,r,i]=e,!n)return O;let a=O;const u=j(()=>le(n),l=>{a(),l&&(l.addEventListener(t,r,i),a=()=>{l.removeEventListener(t,r,i),a=O})},{immediate:!0,flush:"post"}),s=()=>{u(),a()};return W(s),s}const S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";S[P]=S[P]||{};const ue=S[P];function fe(e,n){return ue[e]||n}function ce(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function de(e,n,t,r={}){var i;const{flush:a="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,shallow:c,window:w=g,eventFilter:_,onError:d=o=>{console.error(o)}}=r,f=(c?q:y)(n);if(!t)try{t=fe("getDefaultStorage",()=>{var o;return(o=g)==null?void 0:o.localStorage})()}catch(o){d(o)}if(!t)return f;const v=D(n),L=ce(v),b=(i=r.serializer)!=null?i:pe[L],{pause:R,resume:z}=oe(f,()=>H(f.value),{flush:a,deep:u,eventFilter:_});return w&&s&&se(w,"storage",F),F(),f;function H(o){try{o==null?t.removeItem(e):t.setItem(e,b.write(o))}catch(p){d(p)}}function x(o){if(!(o&&o.key!==e)){R();try{const p=o?o.newValue:t.getItem(e);return p==null?(l&&v!==null&&t.setItem(e,b.write(v)),v):typeof p!="string"?p:b.read(p)}catch(p){d(p)}finally{z()}}}function F(o){o&&o.key!==e||(f.value=x(o))}}function ye(e,n={}){const{immediate:t=!0,window:r=g}=n,i=y(!1);let a=null;function u(){!i.value||!r||(e(),a=r.requestAnimationFrame(u))}function s(){!i.value&&r&&(i.value=!0,u())}function l(){i.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return t&&s(),W(l),{isActive:i,pause:l,resume:s}}function ge(e,n,t={}){const{window:r=g}=t;return de(e,n,r?.localStorage,t)}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));export{ye as a,we as c,ge as u};
