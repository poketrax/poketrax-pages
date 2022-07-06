const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Xe();function S(){}function St(e,t){for(const n in t)e[n]=t[n];return e}function ze(e){return e()}function fe(){return Object.create(null)}function ft(e){e.forEach(ze)}function Ce(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let $t;function J(e,t){return $t||($t=document.createElement("a")),$t.href=t,e===$t.href}function We(e){return Object.keys(e).length===0}function Ie(e,...t){if(e==null)return S;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function mt(e,t,n){e.$$.on_destroy.push(Ie(t,n))}function Se(e,t,n,r){if(e){const i=Ee(e,t,n,r);return e[0](i)}}function Ee(e,t,n,r){return e[1]&&r?St(n.ctx.slice(),e[1](r(t))):n.ctx}function Re(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const o=[],u=Math.max(t.dirty.length,i.length);for(let a=0;a<u;a+=1)o[a]=t.dirty[a]|i[a];return o}return t.dirty|i}return t.dirty}function Me(e,t,n,r,i,o){if(i){const u=Ee(t,n,r,o);e.p(u,i)}}function Te(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function de(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function s(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function Ke(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function it(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Rt(e){return document.createTextNode(e)}function p(){return Rt(" ")}function Jt(){return Rt("")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function Ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let ht;function gt(e){ht=e}function Mt(){if(!ht)throw new Error("Function called outside component initialization");return ht}function Qe(e){Mt().$$.on_mount.push(e)}function Ze(e){Mt().$$.on_destroy.push(e)}function pe(e,t){return Mt().$$.context.set(e,t),t}function Et(e){return Mt().$$.context.get(e)}const pt=[],we=[],Ct=[],me=[],Je=Promise.resolve();let Wt=!1;function qe(){Wt||(Wt=!0,Je.then(Ue))}function Kt(e){Ct.push(e)}const Lt=new Set;let zt=0;function Ue(){const e=ht;do{for(;zt<pt.length;){const t=pt[zt];zt++,gt(t),De(t.$$)}for(gt(null),pt.length=0,zt=0;we.length;)we.pop()();for(let t=0;t<Ct.length;t+=1){const n=Ct[t];Lt.has(n)||(Lt.add(n),n())}Ct.length=0}while(pt.length);for(;me.length;)me.pop()();Wt=!1,Lt.clear(),gt(e)}function De(e){if(e.fragment!==null){e.update(),ft(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Kt)}}const It=new Set;let st;function qt(){st={r:0,c:[],p:st}}function Dt(){st.r||ft(st.c),st=st.p}function _(e,t){e&&e.i&&(It.delete(e),e.i(t))}function $(e,t,n,r){if(e&&e.o){if(It.has(e))return;It.add(e),st.c.push(()=>{It.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function Fe(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const u=e[o],a=t[o];if(a){for(const c in u)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[o]=a}else for(const c in u)i[c]=1}for(const u in r)u in n||(n[u]=void 0);return n}function ge(e){return typeof e=="object"&&e!==null?e:{}}function O(e){e&&e.c()}function N(e,t,n,r){const{fragment:i,on_mount:o,on_destroy:u,after_update:a}=e.$$;i&&i.m(t,n),r||Kt(()=>{const c=o.map(ze).filter(Ce);u?u.push(...c):ft(c),e.$$.on_mount=[]}),a.forEach(Kt)}function U(e,t){const n=e.$$;n.fragment!==null&&(ft(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(e,t){e.$$.dirty[0]===-1&&(pt.push(e),qe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,r,i,o,u,a=[-1]){const c=ht;gt(e);const f=e.$$={fragment:null,ctx:null,props:o,update:S,not_equal:i,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:fe(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};u&&u(f.root);let w=!1;if(f.ctx=n?n(e,t.props||{},(g,z,...x)=>{const h=x.length?x[0]:z;return f.ctx&&i(f.ctx[g],f.ctx[g]=h)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](h),w&&Ve(e,g)),z}):[],f.update(),w=!0,ft(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const g=He(t.target);f.fragment&&f.fragment.l(g),g.forEach(E)}else f.fragment&&f.fragment.c();t.intro&&_(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Ue()}gt(c)}class D{$destroy(){U(this,1),this.$destroy=S}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function Ye(e,t){return{subscribe:wt(e,t).subscribe}}function wt(e,t=S){let n;const r=new Set;function i(a){if(Q(e,a)&&(e=a,n)){const c=!ut.length;for(const f of r)f[1](),ut.push(f,e);if(c){for(let f=0;f<ut.length;f+=2)ut[f][0](ut[f+1]);ut.length=0}}}function o(a){i(a(e))}function u(a,c=S){const f=[a,c];return r.add(f),r.size===1&&(n=t(i)||S),a(e),()=>{r.delete(f),r.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:u}}function tr(e,t,n){const r=!Array.isArray(e),i=r?[e]:e,o=t.length<2;return Ye(n,u=>{let a=!1;const c=[];let f=0,w=S;const g=()=>{if(f)return;w();const x=t(r?c[0]:c,u);o?u(x):w=Ce(x)?x:S},z=i.map((x,h)=>Ie(x,y=>{c[h]=y,f&=~(1<<h),a&&g()},()=>{f|=1<<h}));return a=!0,g(),function(){ft(z),w()}})}const Ht={},Qt={};function Gt(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function er(e,t){const n=[];let r=Gt(e);return{get location(){return r},listen(i){n.push(i);const o=()=>{r=Gt(e),i({location:r,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o);const u=n.indexOf(i);n.splice(u,1)}},navigate(i,{state:o,replace:u=!1}={}){o={...o,key:Date.now()+""};try{u?e.history.replaceState(o,null,i):e.history.pushState(o,null,i)}catch{e.location[u?"replace":"assign"](i)}r=Gt(e),n.forEach(a=>a({location:r,action:"PUSH"}))}}}function rr(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(i,o){},removeEventListener(i,o){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(i,o,u){const[a,c=""]=u.split("?");t++,n.push({pathname:a,search:c}),r.push(i)},replaceState(i,o,u){const[a,c=""]=u.split("?");n[t]={pathname:a,search:c},r[t]=i}}}}const nr=Boolean(typeof window!="undefined"&&window.document&&window.document.createElement),he=er(nr?window:rr()),je=/^:(.+)/,be=4,ir=3,or=2,sr=1,ar=1;function lr(e){return e===""}function cr(e){return je.test(e)}function Oe(e){return e[0]==="*"}function Zt(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Xt(e){return e.replace(/(^\/+|\/+$)/g,"")}function ur(e,t){const n=e.default?0:Zt(e.path).reduce((r,i)=>(r+=be,lr(i)?r+=ar:cr(i)?r+=or:Oe(i)?r-=be+sr:r+=ir,r),0);return{route:e,score:n,index:t}}function fr(e){return e.map(ur).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function Pe(e,t){let n,r;const[i]=t.split("?"),o=Zt(i),u=o[0]==="",a=fr(e);for(let c=0,f=a.length;c<f;c++){const w=a[c].route;let g=!1;if(w.default){r={route:w,params:{},uri:t};continue}const z=Zt(w.path),x={},h=Math.max(o.length,z.length);let y=0;for(;y<h;y++){const A=z[y],R=o[y];if(A!==void 0&&Oe(A)){const L=A==="*"?"*":A.slice(1);x[L]=o.slice(y).map(decodeURIComponent).join("/");break}if(R===void 0){g=!0;break}let I=je.exec(A);if(I&&!u){const L=decodeURIComponent(R);x[I[1]]=L}else if(A!==R){g=!0;break}}if(!g){n={route:w,params:x,uri:"/"+o.slice(0,y).join("/")};break}}return n||r||null}function dr(e,t){return Pe([e],t)}function xe(e,t){return`${Xt(t==="/"?e:`${Xt(e)}/${Xt(t)}`)}/`}function pr(e){let t;const n=e[9].default,r=Se(n,e,e[8],null);return{c(){r&&r.c()},m(i,o){r&&r.m(i,o),t=!0},p(i,[o]){r&&r.p&&(!t||o&256)&&Me(r,n,i,i[8],t?Re(n,i[8],o,null):Te(i[8]),null)},i(i){t||(_(r,i),t=!0)},o(i){$(r,i),t=!1},d(i){r&&r.d(i)}}}function wr(e,t,n){let r,i,o,{$$slots:u={},$$scope:a}=t,{basepath:c="/"}=t,{url:f=null}=t;const w=Et(Ht),g=Et(Qt),z=wt([]);mt(e,z,m=>n(6,i=m));const x=wt(null);let h=!1;const y=w||wt(f?{pathname:f}:he.location);mt(e,y,m=>n(5,r=m));const A=g?g.routerBase:wt({path:c,uri:c});mt(e,A,m=>n(7,o=m));const R=tr([A,x],([m,k])=>{if(k===null)return m;const{path:G}=m,{route:M,uri:P}=k;return{path:M.default?G:M.path.replace(/\*.*$/,""),uri:P}});function I(m){const{path:k}=o;let{path:G}=m;if(m._path=G,m.path=xe(k,G),typeof window=="undefined"){if(h)return;const M=dr(m,r.pathname);M&&(x.set(M),h=!0)}else z.update(M=>(M.push(m),M))}function L(m){z.update(k=>{const G=k.indexOf(m);return k.splice(G,1),k})}return w||(Qe(()=>he.listen(k=>{y.set(k.location)})),pe(Ht,y)),pe(Qt,{activeRoute:x,base:A,routerBase:R,registerRoute:I,unregisterRoute:L}),e.$$set=m=>{"basepath"in m&&n(3,c=m.basepath),"url"in m&&n(4,f=m.url),"$$scope"in m&&n(8,a=m.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:m}=o;z.update(k=>(k.forEach(G=>G.path=xe(m,G._path)),k))}if(e.$$.dirty&96){const m=Pe(i,r.pathname);x.set(m)}},[z,y,A,c,f,r,i,o,a,u]}class mr extends D{constructor(t){super(),q(this,t,wr,pr,Q,{basepath:3,url:4})}}const gr=e=>({params:e&4,location:e&16}),ve=e=>({params:e[2],location:e[4]});function ye(e){let t,n,r,i;const o=[br,hr],u=[];function a(c,f){return c[0]!==null?0:1}return t=a(e),n=u[t]=o[t](e),{c(){n.c(),r=Jt()},m(c,f){u[t].m(c,f),j(c,r,f),i=!0},p(c,f){let w=t;t=a(c),t===w?u[t].p(c,f):(qt(),$(u[w],1,1,()=>{u[w]=null}),Dt(),n=u[t],n?n.p(c,f):(n=u[t]=o[t](c),n.c()),_(n,1),n.m(r.parentNode,r))},i(c){i||(_(n),i=!0)},o(c){$(n),i=!1},d(c){u[t].d(c),c&&E(r)}}}function hr(e){let t;const n=e[10].default,r=Se(n,e,e[9],ve);return{c(){r&&r.c()},m(i,o){r&&r.m(i,o),t=!0},p(i,o){r&&r.p&&(!t||o&532)&&Me(r,n,i,i[9],t?Re(n,i[9],o,gr):Te(i[9]),ve)},i(i){t||(_(r,i),t=!0)},o(i){$(r,i),t=!1},d(i){r&&r.d(i)}}}function br(e){let t,n,r;const i=[{location:e[4]},e[2],e[3]];var o=e[0];function u(a){let c={};for(let f=0;f<i.length;f+=1)c=St(c,i[f]);return{props:c}}return o&&(t=new o(u())),{c(){t&&O(t.$$.fragment),n=Jt()},m(a,c){t&&N(t,a,c),j(a,n,c),r=!0},p(a,c){const f=c&28?Fe(i,[c&16&&{location:a[4]},c&4&&ge(a[2]),c&8&&ge(a[3])]):{};if(o!==(o=a[0])){if(t){qt();const w=t;$(w.$$.fragment,1,0,()=>{U(w,1)}),Dt()}o?(t=new o(u()),O(t.$$.fragment),_(t.$$.fragment,1),N(t,n.parentNode,n)):t=null}else o&&t.$set(f)},i(a){r||(t&&_(t.$$.fragment,a),r=!0)},o(a){t&&$(t.$$.fragment,a),r=!1},d(a){a&&E(n),t&&U(t,a)}}}function xr(e){let t,n,r=e[1]!==null&&e[1].route===e[7]&&ye(e);return{c(){r&&r.c(),t=Jt()},m(i,o){r&&r.m(i,o),j(i,t,o),n=!0},p(i,[o]){i[1]!==null&&i[1].route===i[7]?r?(r.p(i,o),o&2&&_(r,1)):(r=ye(i),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(qt(),$(r,1,1,()=>{r=null}),Dt())},i(i){n||(_(r),n=!0)},o(i){$(r),n=!1},d(i){r&&r.d(i),i&&E(t)}}}function vr(e,t,n){let r,i,{$$slots:o={},$$scope:u}=t,{path:a=""}=t,{component:c=null}=t;const{registerRoute:f,unregisterRoute:w,activeRoute:g}=Et(Qt);mt(e,g,A=>n(1,r=A));const z=Et(Ht);mt(e,z,A=>n(4,i=A));const x={path:a,default:a===""};let h={},y={};return f(x),typeof window!="undefined"&&Ze(()=>{w(x)}),e.$$set=A=>{n(13,t=St(St({},t),de(A))),"path"in A&&n(8,a=A.path),"component"in A&&n(0,c=A.component),"$$scope"in A&&n(9,u=A.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&r&&r.route===x&&n(2,h=r.params);{const{path:A,component:R,...I}=t;n(3,y=I)}},t=de(t),[c,r,h,y,i,g,z,x,a,u,o]}class Ae extends D{constructor(t){super(),q(this,t,vr,xr,Q,{path:8,component:0})}}var yr="./assets/icon.f2679d31.png";function Ar(e){let t,n;return{c(){t=it("svg"),n=it("path"),l(n,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 0 496 512"),l(t,"class","w-6 h-6 fill-white")},m(r,i){j(r,t,i),s(t,n)},p:S,i:S,o:S,d(r){r&&E(t)}}}class kr extends D{constructor(t){super(),q(this,t,null,Ar,Q,{})}}function _r(e){let t,n;return{c(){t=it("svg"),n=it("path"),l(n,"d","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 0 512 512"),l(t,"class","w-6 h-6 fill-white")},m(r,i){j(r,t,i),s(t,n)},p:S,i:S,o:S,d(r){r&&E(t)}}}class $r extends D{constructor(t){super(),q(this,t,null,_r,Q,{})}}function zr(e){let t,n;return{c(){t=it("svg"),n=it("path"),l(n,"d","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 0 576 512"),l(t,"class","w-6 h-6 fill-white")},m(r,i){j(r,t,i),s(t,n)},p:S,i:S,o:S,d(r){r&&E(t)}}}class Cr extends D{constructor(t){super(),q(this,t,null,zr,Q,{})}}function Ir(e){let t,n;return{c(){t=it("svg"),n=it("path"),l(n,"d","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 0 512 512"),l(t,"class","w-6 h-6 fill-white")},m(r,i){j(r,t,i),s(t,n)},p:S,i:S,o:S,d(r){r&&E(t)}}}class Sr extends D{constructor(t){super(),q(this,t,null,Ir,Q,{})}}function ke(e,t,n){const r=e.slice();return r[1]=t[n],r}function _e(e){let t,n=e[1].name+"",r,i,o,u;return{c(){t=d("a"),r=Rt(n),o=p(),u=d("div"),l(t,"class","text-white hover:text-red-600 cursor-pointer portrait:hidden"),l(t,"href",i=e[1].link),l(u,"class","w-4")},m(a,c){j(a,t,c),s(t,r),j(a,o,c),j(a,u,c)},p(a,c){c&1&&n!==(n=a[1].name+"")&&Ne(r,n),c&1&&i!==(i=a[1].link)&&l(t,"href",i)},d(a){a&&E(t),a&&E(o),a&&E(u)}}}function Er(e){let t,n,r,i,o,u,a,c,f,w,g,z,x,h,y,A,R,I,L,m,k,G,M,P,tt,B,X,H=e[0],C=[];for(let v=0;v<H.length;v+=1)C[v]=_e(ke(e,H,v));return y=new kr({}),I=new $r({}),k=new Cr({}),P=new Sr({}),{c(){t=d("div"),n=d("div"),r=p(),i=d("img"),u=p(),a=d("div"),c=p(),f=d("a"),f.textContent="Pok\xE9trax",w=p(),g=d("div"),z=p();for(let v=0;v<C.length;v+=1)C[v].c();x=p(),h=d("a"),O(y.$$.fragment),A=p(),R=d("a"),O(I.$$.fragment),L=p(),m=d("a"),O(k.$$.fragment),G=p(),M=d("a"),O(P.$$.fragment),tt=p(),B=d("div"),l(n,"class","flex-grow"),l(i,"class","h-16 w-16 portrait:h-10 portrait:w-10"),J(i.src,o=yr)||l(i,"src",o),l(i,"alt","icon"),l(a,"class","w-4"),l(f,"class","text-white text-4xl portrait:text-xl title-font cursor-pointer"),l(f,"href","."),l(g,"class","w-96"),l(h,"class","m-2"),l(h,"href","https://github.com/poketrax/PokeTrax"),l(R,"class","m-2"),l(R,"href","https://www.reddit.com/r/poketraxapp/"),l(m,"class","m-2"),l(m,"href","https://www.youtube.com/channel/UCDGebTpvhiRCy3Aw6_CDylg"),l(M,"class","p-2"),l(M,"href","https://twitter.com/poketrax_app"),l(B,"class","flex-grow"),l(t,"class","h-16 w-screen bg-blue-800 flex items-center")},m(v,W){j(v,t,W),s(t,n),s(t,r),s(t,i),s(t,u),s(t,a),s(t,c),s(t,f),s(t,w),s(t,g),s(t,z);for(let T=0;T<C.length;T+=1)C[T].m(t,null);s(t,x),s(t,h),N(y,h,null),s(t,A),s(t,R),N(I,R,null),s(t,L),s(t,m),N(k,m,null),s(t,G),s(t,M),N(P,M,null),s(t,tt),s(t,B),X=!0},p(v,[W]){if(W&1){H=v[0];let T;for(T=0;T<H.length;T+=1){const K=ke(v,H,T);C[T]?C[T].p(K,W):(C[T]=_e(K),C[T].c(),C[T].m(t,x))}for(;T<C.length;T+=1)C[T].d(1);C.length=H.length}},i(v){X||(_(y.$$.fragment,v),_(I.$$.fragment,v),_(k.$$.fragment,v),_(P.$$.fragment,v),X=!0)},o(v){$(y.$$.fragment,v),$(I.$$.fragment,v),$(k.$$.fragment,v),$(P.$$.fragment,v),X=!1},d(v){v&&E(t),Ke(C,v),U(y),U(I),U(k),U(P)}}}function Rr(e,t,n){let{links:r}=t;return e.$$set=i=>{"links"in i&&n(0,r=i.links)},[r]}class Be extends D{constructor(t){super(),q(this,t,Rr,Er,Q,{links:0})}}var Le="./assets/macos.ca8865f4.png",Ge="data:image/png;base64,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",Mr="./assets/ubuntu.d1be8797.png",Tr="./assets/track_prices.d055bf98.png",Nr="./assets/sets.3a8de6e2.png",Ur="./assets/track_collection.2897e81c.png";function jr(e){let t,n,r,i,o,u,a,c,f,w,g,z,x,h,y,A,R,I,L,m,k,G,M,P,tt,B,X,H,C,v,W,T,K,dt,F,ot,b,V,Tt,Ft,Nt,Vt,et,bt,at,Yt,te,xt,ee,Ut,re,rt,jt,ne,vt,ie,yt,lt,oe,se,Y,At,ct,ae,le,Ot,ce,kt,ue,Pt,_t;return t=new Be({props:{links:e[0]}}),{c(){O(t.$$.fragment),n=p(),r=d("div"),i=d("div"),o=d("div"),u=p(),a=d("div"),c=d("div"),f=p(),w=d("span"),w.textContent=`A simple, free, fully featured, and open source Pok\xE9mon TCG
                collection manager for Windows, Mac, and Ubuntu`,g=p(),z=d("div"),x=p(),h=d("div"),y=d("div"),A=p(),R=d("a"),I=d("img"),m=p(),k=d("div"),G=p(),M=d("a"),P=d("img"),B=p(),X=d("div"),H=p(),C=d("a"),v=d("img"),T=p(),K=d("div"),dt=p(),F=d("div"),ot=p(),b=d("div"),b.innerHTML=`<div class="flex-grow"></div> 
                <iframe class="lg:w-[960px] lg:h-[540px] md:w-[480px] md:h-[270px] w-[240px] h-[135px]" src="https://www.youtube.com/embed/IG4EF-xuJho?autoplay=1&amp;vq=hd720" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> 
                <div class="flex-grow"></div>`,V=p(),Tt=d("div"),Ft=p(),Nt=d("div"),Vt=p(),et=d("div"),bt=d("div"),at=d("img"),te=p(),xt=d("div"),xt.textContent="Analyze card prices over time",ee=p(),Ut=d("div"),re=p(),rt=d("div"),jt=d("div"),ne=p(),vt=d("div"),vt.textContent="Track cards and sealed products in your collection",ie=p(),yt=d("div"),lt=d("img"),se=p(),Y=d("div"),At=d("div"),ct=d("img"),le=p(),Ot=d("div"),ce=p(),kt=d("div"),kt.textContent="Browse sets for cards",ue=p(),Pt=d("div"),l(o,"class","flex-grow"),l(c,"class","h-10"),l(w,"class","flex text-3xl portrait:text-xl text-center p-4"),l(z,"class","h-10"),l(y,"class","flex-grow"),l(I,"class","h-20 object-contain cursor-pointer"),J(I.src,L=Le)||l(I,"src",L),l(I,"alt","macos"),l(R,"href","https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.dmg"),l(k,"class","w-6"),l(P,"class","h-20 object-contain cursor-pointer"),J(P.src,tt=Ge)||l(P,"src",tt),l(P,"alt","win"),l(M,"href","https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.exe"),l(X,"class","w-6"),l(v,"class","h-20 object-contain cursor-pointer"),J(v.src,W=Mr)||l(v,"src",W),l(v,"alt","linux"),l(C,"href","https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.snap"),l(K,"class","flex-grow"),l(h,"class","flex"),l(F,"class","h-10"),l(b,"class","flex"),l(Tt,"class","flex-grow"),l(i,"class","w-screen flex"),l(Nt,"class","h-12"),J(at.src,Yt=Tr)||l(at,"src",Yt),l(at,"class","h-96 portrait:h-48 object-contain"),l(at,"alt","track prices"),l(bt,"class","p-16 portrait:p-4"),l(xt,"class","text-3xl portrait:text-xl portrait:m-4"),l(Ut,"class","flex-grow"),l(et,"class","flex w-screen bg-gray-200 items-center"),l(jt,"class","flex-grow"),l(vt,"class","text-3xl portrait:text-xl portrait:m-4"),J(lt.src,oe=Ur)||l(lt,"src",oe),l(lt,"class","h-96 portrait:h-48 object-contain"),l(lt,"alt","track cards"),l(yt,"class","p-16"),l(rt,"class","flex w-screen items-center"),J(ct.src,ae=Nr)||l(ct,"src",ae),l(ct,"class","h-96 portrait:h-48 object-contain"),l(ct,"alt","sets"),l(At,"class","p-16"),l(Ot,"class","w-8"),l(kt,"class","text-3xl portrait:text-xl portrait:m-4"),l(Pt,"class","flex-grow"),l(Y,"class","flex w-screen bg-gray-200 items-center"),l(r,"class","w-screen h-[calc(100vh-4rem)] overflow-x-hidden overflow-auto")},m(Z,Bt){N(t,Z,Bt),j(Z,n,Bt),j(Z,r,Bt),s(r,i),s(i,o),s(i,u),s(i,a),s(a,c),s(a,f),s(a,w),s(a,g),s(a,z),s(a,x),s(a,h),s(h,y),s(h,A),s(h,R),s(R,I),s(h,m),s(h,k),s(h,G),s(h,M),s(M,P),s(h,B),s(h,X),s(h,H),s(h,C),s(C,v),s(h,T),s(h,K),s(a,dt),s(a,F),s(a,ot),s(a,b),s(i,V),s(i,Tt),s(r,Ft),s(r,Nt),s(r,Vt),s(r,et),s(et,bt),s(bt,at),s(et,te),s(et,xt),s(et,ee),s(et,Ut),s(r,re),s(r,rt),s(rt,jt),s(rt,ne),s(rt,vt),s(rt,ie),s(rt,yt),s(yt,lt),s(r,se),s(r,Y),s(Y,At),s(At,ct),s(Y,le),s(Y,Ot),s(Y,ce),s(Y,kt),s(Y,ue),s(Y,Pt),_t=!0},p:S,i(Z){_t||(_(t.$$.fragment,Z),_t=!0)},o(Z){$(t.$$.fragment,Z),_t=!1},d(Z){U(t,Z),Z&&E(n),Z&&E(r)}}}function Or(e){return[[{name:"Issues",link:"https://github.com/poketrax/PokeTrax/issues"},{name:"Install",link:"./install"}]]}class Pr extends D{constructor(t){super(),q(this,t,Or,jr,Q,{})}}function $e(e){let t,n,r;return{c(){t=d("div"),n=d("img"),J(n.src,r=e[2])||l(n,"src",r),l(n,"alt",e[1]),l(t,"class","flex ml-32")},m(i,o){j(i,t,o),s(t,n)},p(i,o){o&4&&!J(n.src,r=i[2])&&l(n,"src",r),o&2&&l(n,"alt",i[1])},d(i){i&&E(t)}}}function Br(e){let t,n,r,i,o,u,a,c,f=e[2]!=null&&$e(e);return{c(){t=d("div"),n=d("div"),r=d("div"),i=d("div"),o=Rt(e[0]),u=p(),a=d("div"),c=p(),f&&f.c(),l(r,"class","flex h-10 w-10 bg-slate-200 rounded-full items-center justify-center mr-10 ml-10 mt-5 mb-5"),l(n,"class","flex items-center")},m(w,g){j(w,t,g),s(t,n),s(n,r),s(r,i),s(i,o),s(n,u),s(n,a),a.innerHTML=e[1],s(t,c),f&&f.m(t,null)},p(w,[g]){g&1&&Ne(o,w[0]),g&2&&(a.innerHTML=w[1]),w[2]!=null?f?f.p(w,g):(f=$e(w),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i:S,o:S,d(w){w&&E(t),f&&f.d()}}}function Lr(e,t,n){let{number:r}=t,{text:i}=t,{img:o}=t;return e.$$set=u=>{"number"in u&&n(0,r=u.number),"text"in u&&n(1,i=u.text),"img"in u&&n(2,o=u.img)},[r,i,o]}class nt extends D{constructor(t){super(),q(this,t,Lr,Br,Q,{number:0,text:1,img:2})}}var Gr="./assets/windows_warning.7888c921.png",Xr="./assets/windows_accept.5ab132f6.png",Wr="./assets/macos_open_err.ac30a4ee.png",Kr="./assets/macos_open_sys_pref.358f8004.png",Hr="./assets/macos_sys_pref.48581166.png",Qr="./assets/macos_sec.db5c020c.png";function Zr(e){let t,n,r,i,o,u,a,c,f,w,g,z,x,h,y,A,R,I,L,m,k,G,M,P,tt,B,X,H,C,v,W,T,K,dt,F,ot;return t=new Be({props:{links:e[0]}}),g=new nt({props:{number:1,text:'Download exe from <a class="text-blue-600" href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.exe">here</a> and install PokeTrax',img:null}}),x=new nt({props:{number:2,text:"You will get an error that looks like this. Click 'More Info'",img:Gr}}),y=new nt({props:{number:3,text:"Click 'Run anyway'",img:Xr}}),X=new nt({props:{number:1,text:'Download dmg from <a class="text-blue-600" href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.dmg">here</a> and install PokeTrax',img:null}}),C=new nt({props:{number:2,text:"Run PokeTrax you will get the following error. Click 'Cancel'",img:Wr}}),W=new nt({props:{number:3,text:"Click the Apple logo at the top left of you screen, Then click 'System Preferences'",img:Kr}}),K=new nt({props:{number:4,text:"On the system preferences window. Click 'Security & Privacy'",img:Hr}}),F=new nt({props:{number:5,text:"On the General Tab in the 'Security & Privacy' window. Click 'Open Anyway'",img:Qr}}),{c(){O(t.$$.fragment),n=p(),r=d("div"),i=d("div"),o=d("img"),a=p(),c=d("div"),c.textContent="Windows install instructions",f=p(),w=d("div"),O(g.$$.fragment),z=p(),O(x.$$.fragment),h=p(),O(y.$$.fragment),A=p(),R=d("div"),I=p(),L=d("div"),m=d("div"),k=d("img"),M=p(),P=d("div"),P.textContent="Mac OS install instructions",tt=p(),B=d("div"),O(X.$$.fragment),H=p(),O(C.$$.fragment),v=p(),O(W.$$.fragment),T=p(),O(K.$$.fragment),dt=p(),O(F.$$.fragment),l(o,"class","h-20 object-contain cursor-pointer"),J(o.src,u=Ge)||l(o,"src",u),l(o,"alt","windows"),l(c,"class","pl-8 text-3xl"),l(i,"class","flex w-screen h-20 bg-gray-200 items-center"),l(w,"class","w-screen"),l(R,"class","h-8"),l(k,"class","h-20 object-contain cursor-pointer"),J(k.src,G=Le)||l(k,"src",G),l(k,"alt","macos"),l(P,"class","pl-8 text-3xl"),l(m,"class","flex w-screen h-20 bg-gray-200 items-center"),l(B,"class","w-screen")},m(b,V){N(t,b,V),j(b,n,V),j(b,r,V),s(r,i),s(i,o),s(i,a),s(i,c),s(r,f),s(r,w),N(g,w,null),s(w,z),N(x,w,null),s(w,h),N(y,w,null),j(b,A,V),j(b,R,V),j(b,I,V),j(b,L,V),s(L,m),s(m,k),s(m,M),s(m,P),s(L,tt),s(L,B),N(X,B,null),s(B,H),N(C,B,null),s(B,v),N(W,B,null),s(B,T),N(K,B,null),s(B,dt),N(F,B,null),ot=!0},p:S,i(b){ot||(_(t.$$.fragment,b),_(g.$$.fragment,b),_(x.$$.fragment,b),_(y.$$.fragment,b),_(X.$$.fragment,b),_(C.$$.fragment,b),_(W.$$.fragment,b),_(K.$$.fragment,b),_(F.$$.fragment,b),ot=!0)},o(b){$(t.$$.fragment,b),$(g.$$.fragment,b),$(x.$$.fragment,b),$(y.$$.fragment,b),$(X.$$.fragment,b),$(C.$$.fragment,b),$(W.$$.fragment,b),$(K.$$.fragment,b),$(F.$$.fragment,b),ot=!1},d(b){U(t,b),b&&E(n),b&&E(r),U(g),U(x),U(y),b&&E(A),b&&E(R),b&&E(I),b&&E(L),U(X),U(C),U(W),U(K),U(F)}}}function Jr(e){return[[{name:"Issues",link:"https://github.com/poketrax/PokeTrax/issues"},{name:"Install",link:"./install"}]]}class qr extends D{constructor(t){super(),q(this,t,Jr,Zr,Q,{})}}function Dr(e){let t,n;return t=new qr({}),{c(){O(t.$$.fragment)},m(r,i){N(t,r,i),n=!0},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){U(t,r)}}}function Fr(e){let t,n;return t=new Pr({}),{c(){O(t.$$.fragment)},m(r,i){N(t,r,i),n=!0},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){U(t,r)}}}function Vr(e){let t,n,r,i,o;return n=new Ae({props:{path:"install",$$slots:{default:[Dr]},$$scope:{ctx:e}}}),i=new Ae({props:{path:"/",$$slots:{default:[Fr]},$$scope:{ctx:e}}}),{c(){t=d("div"),O(n.$$.fragment),r=p(),O(i.$$.fragment)},m(u,a){j(u,t,a),N(n,t,null),s(t,r),N(i,t,null),o=!0},p(u,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:u}),n.$set(c);const f={};a&2&&(f.$$scope={dirty:a,ctx:u}),i.$set(f)},i(u){o||(_(n.$$.fragment,u),_(i.$$.fragment,u),o=!0)},o(u){$(n.$$.fragment,u),$(i.$$.fragment,u),o=!1},d(u){u&&E(t),U(n),U(i)}}}function Yr(e){let t,n;return t=new mr({props:{url:e[0],$$slots:{default:[Vr]},$$scope:{ctx:e}}}),{c(){O(t.$$.fragment)},m(r,i){N(t,r,i),n=!0},p(r,[i]){const o={};i&1&&(o.url=r[0]),i&2&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){U(t,r)}}}function tn(e,t,n){let{url:r=""}=t;return e.$$set=i=>{"url"in i&&n(0,r=i.url)},[r]}class en extends D{constructor(t){super(),q(this,t,tn,Yr,Q,{url:0})}}new en({target:document.getElementById("app")});
