(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const P={context:void 0,registry:void 0};function U(e){P.context=e}const at=(e,t)=>e===t,le=Symbol("solid-proxy"),ce={equals:at};let qe=ze;const k=1,ee=2,Be={owned:null,cleanups:null,context:null,owner:null},we={};var y=null;let a=null,b=null,E=null,O=null,fe=0;const[Rn,Te]=N(!1);function Ce(e,t){const n=b,r=y,s=e.length===0,i=s?Be:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=s?e:()=>e(()=>L(()=>F(i)));y=i,b=null;try{return _(o,!0)}finally{b=n,y=r}}function N(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(a&&a.running&&a.sources.has(n)?s=s(n.tValue):s=s(n.value)),Xe(n,s));return[We.bind(n),r]}function Ne(e,t,n){const r=ge(e,t,!0,k);G(r)}function M(e,t,n){const r=ge(e,t,!1,k);G(r)}function _n(e,t,n){qe=pt;const r=ge(e,t,!1,k),s=W&&me(y,W.id);s&&(r.suspense=s),(!n||!n.render)&&(r.user=!0),O?O.push(r):G(r)}function A(e,t,n){n=n?Object.assign({},ce,n):ce;const r=ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,G(r),We.bind(r)}function Me(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let o=null,l=we,c=null,f=!1,u=!1,d="initialValue"in i,h=typeof r=="function"&&A(r);const p=new Set,[S,w]=(i.storage||N)(i.initialValue),[C,T]=N(void 0),[R,V]=N(void 0,{equals:!1}),[D,I]=N(d?"ready":"unresolved");if(P.context){c=`${P.context.id}${P.context.count++}`;let g;i.ssrLoadFrom==="initial"?l=i.initialValue:P.load&&(g=P.load(c))&&(l=g[0])}function K(g,m,v,j){return o===g&&(o=null,j!==void 0&&(d=!0),(g===l||m===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(j,{value:m})),l=we,a&&g&&f?(a.promises.delete(g),f=!1,_(()=>{a.running=!0,J(m,v)},!1)):J(m,v)),m}function J(g,m){_(()=>{m===void 0&&w(()=>g),I(m!==void 0?"errored":d?"ready":"unresolved"),T(m);for(const v of p.keys())v.decrement();p.clear()},!1)}function Y(){const g=W&&me(y,W.id),m=S(),v=C();if(v!==void 0&&!o)throw v;return b&&!b.user&&g&&Ne(()=>{R(),o&&(g.resolved&&a&&f?a.promises.add(o):p.has(g)||(g.increment(),p.add(g)))}),m}function x(g=!0){if(g!==!1&&u)return;u=!1;const m=h?h():r;if(f=a&&a.running,m==null||m===!1){K(o,L(S));return}a&&o&&a.promises.delete(o);const v=l!==we?l:L(()=>s(m,{value:S(),refetching:g}));return typeof v!="object"||!(v&&"then"in v)?(K(o,v,void 0,m),v):(o=v,u=!0,queueMicrotask(()=>u=!1),_(()=>{I(d?"refreshing":"pending"),V()},!1),v.then(j=>K(v,j,void 0,m),j=>K(v,void 0,yt(j),m)))}return Object.defineProperties(Y,{state:{get:()=>D()},error:{get:()=>C()},loading:{get(){const g=D();return g==="pending"||g==="refreshing"}},latest:{get(){if(!d)return Y();const g=C();if(g&&!o)throw g;return S()}}}),h?Ne(()=>x(!1)):x(!1),[Y,{refetch:x,mutate:w}]}function L(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Fe(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i){i=!1;return}const c=L(()=>t(l,s,o));return s=l,c}}function $e(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Ke(){return y}function ft(e,t){const n=y,r=b;y=e,b=null;try{return _(t,!0)}catch(s){Le(s)}finally{y=n,b=r}}function dt(e){if(a&&a.running)return e(),a.done;const t=b,n=y;return Promise.resolve().then(()=>{b=t,y=n;let r;return W&&(r=a||(a={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),_(e,!1),b=y=null,r?r.done:void 0})}function ht(e){O.push.apply(O,e),e.length=0}function de(e,t){const n=Symbol("context");return{id:n,Provider:wt(n),defaultValue:e}}function he(e){let t;return(t=me(y,e.id))!==void 0?t:e.defaultValue}function He(e){const t=A(e),n=A(()=>Ae(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let W;function gt(){return W||(W=de({}))}function We(){const e=a&&a.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===k)G(this);else{const t=E;E=null,_(()=>ae(this),!1),E=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return e&&a.sources.has(this)?this.tValue:this.value}function Xe(e,t,n){let r=a&&a.running&&a.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(a){const s=a.running;(s||!n&&a.sources.has(e))&&(a.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=a&&a.running;o&&a.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?E.push(i):O.push(i),i.observers&&Ge(i)),o?i.tState=k:i.state=k)}if(E.length>1e6)throw E=[],new Error},!1)}return t}function G(e){if(!e.fn)return;F(e);const t=y,n=b,r=fe;b=y=e,Re(e,a&&a.running&&a.sources.has(e)?e.tValue:e.value,r),a&&!a.running&&a.sources.has(e)&&queueMicrotask(()=>{_(()=>{a&&(a.running=!0),b=y=e,Re(e,e.tValue,r),b=y=null},!1)}),b=n,y=t}function Re(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(a&&a.running?(e.tState=k,e.tOwned&&e.tOwned.forEach(F),e.tOwned=void 0):(e.state=k,e.owned&&e.owned.forEach(F),e.owned=null)),e.updatedAt=n+1,Le(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Xe(e,r,!0):a&&a.running&&e.pure?(a.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ge(e,t,n,r=k,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return a&&a.running&&(i.state=0,i.tState=r),y===null||y!==Be&&(a&&a.running&&y.pure?y.tOwned?y.tOwned.push(i):y.tOwned=[i]:y.owned?y.owned.push(i):y.owned=[i]),i}function ue(e){const t=a&&a.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===ee)return ae(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);){if(t&&a.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,i=n[r+1];for(;(s=s.owner)&&s!==i;)if(a.disposed.has(s))return}if((t?e.tState:e.state)===k)G(e);else if((t?e.tState:e.state)===ee){const s=E;E=null,_(()=>ae(e,n[0]),!1),E=s}}}function _(e,t){if(E)return e();let n=!1;t||(E=[]),O?n=!0:O=[],fe++;try{const r=e();return mt(n),r}catch(r){n||(O=null),E=null,Le(r)}}function mt(e){if(E&&(ze(E),E=null),e)return;let t;if(a){if(!a.promises.size&&!a.queue.size){const r=a.sources,s=a.disposed;O.push.apply(O,a.effects),t=a.resolve;for(const i of O)"tState"in i&&(i.state=i.tState),delete i.tState;a=null,_(()=>{for(const i of s)F(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)F(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Te(!1)},!1)}else if(a.running){a.running=!1,a.effects.push.apply(a.effects,O),O=null,Te(!0);return}}const n=O;O=null,n.length&&_(()=>qe(n),!1),t&&t()}function ze(e){for(let t=0;t<e.length;t++)ue(e[t])}function pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ue(r)}for(P.context&&U(),t=0;t<n;t++)ue(e[t])}function ae(e,t){const n=a&&a.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const i=n?s.tState:s.state;i===k?s!==t&&(!s.updatedAt||s.updatedAt<fe)&&ue(s):i===ee&&ae(s,t)}}}function Ge(e){const t=a&&a.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=ee:r.state=ee,r.pure?E.push(r):O.push(r),r.observers&&Ge(r))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(a&&a.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}Je(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}a&&a.running?e.tState=0:e.state=0,e.context=null}function Je(e,t){if(t||(e.tState=0,a.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Je(e.owned[n])}function yt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Le(e){throw e}function me(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:me(e.owner,t):void 0}function Ae(e){if(typeof e=="function"&&!e.length)return Ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ae(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function wt(e,t){return function(r){let s;return M(()=>s=L(()=>(y.context={[e]:r.value},He(()=>r.children))),void 0),s}}function $(e,t){return L(()=>e(t||{}))}function se(){return!0}const ve={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:se,deleteProperty:se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:se,deleteProperty:se}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function bt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function _e(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&le in o,e[i]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=be(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in be(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(be(e[o])));return[...new Set(i)]}},ve);const n={},r={};let s=!1;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);s=s||i!==0&&!!l.length;for(let c=0,f=l.length;c<f;c++){const u=l[c];if(!(u==="__proto__"||u==="constructor"))if(u in n){const d=r[u],h=Object.getOwnPropertyDescriptor(o,u);d?h.get?d.push(h.get.bind(o)):h.value!==void 0&&d.push(()=>h.value):n[u]===void 0&&(n[u]=h.value)}else{const d=Object.getOwnPropertyDescriptor(o,u);d.get?Object.defineProperty(n,u,{enumerable:!0,configurable:!0,get:bt.bind(r[u]=[d.get.bind(o)])}):n[u]=d.value}}}return n}function St(e,...t){if(le in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},ve));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},ve)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,c=0;for(const f of t)f.includes(s)&&(l=!0,o?r[c][s]=i.value:Object.defineProperty(r[c],s,i)),++c;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}function Se(e){let t,n;const r=s=>{const i=P.context;if(i){const[l,c]=N();(n||(n=e())).then(f=>{U(i),c(()=>f.default),U()}),t=l}else if(!t){const[l]=Me(()=>(n||(n=e())).then(c=>c.default));t=l}let o;return A(()=>(o=t())&&L(()=>{if(!i)return o(s);const l=P.context;U(i);const c=o(s);return U(l),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}const xt=e=>`Stale read from <${e}>.`;function Ye(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?L(()=>s(t?r:()=>{if(!L(n))throw xt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Pt=de();function jn(e){let t=0,n,r,s,i,o;const[l,c]=N(!1),f=gt(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:l,effects:[],resolved:!1},d=Ke();if(P.context&&P.load){const S=P.context.id+P.context.count;let w=P.load(S);if(w&&(s=w[0])&&s!=="$$f"){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[C,T]=N(void 0,{equals:!1});i=C,s.then(R=>{if(R||P.done)return R&&(o=R),T();P.gather(S),U(r),T(),U()})}}const h=he(Pt);h&&(n=h.register(u.inFallback));let p;return $e(()=>p&&p()),$(f.Provider,{value:u,get children(){return A(()=>{if(o)throw o;if(r=P.context,i)return i(),i=void 0;r&&s==="$$f"&&U();const S=A(()=>e.children);return A(w=>{const C=u.inFallback(),{showContent:T=!0,showFallback:R=!0}=n?n():{};if((!C||s&&s!=="$$f")&&T)return u.resolved=!0,p&&p(),p=r=s=void 0,ht(u.effects),S();if(R)return p?w:Ce(V=>(p=V,r&&(U({id:r.id+"f",count:0}),r=void 0),e.fallback),d)})})}})}const At=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...At]),Ot=new Set(["innerHTML","textContent","innerText","children"]),Et=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ct=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function $t(e,t){const n=Ct[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Lt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Nt(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,c=t[s-1].nextSibling,f=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const u=i<r?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],u)}else if(i===l)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],u),t[s]=n[i]}else{if(!f){f=new Map;let d=l;for(;d<i;)f.set(n[d],d++)}const u=f.get(t[o]);if(u!=null)if(l<u&&u<i){let d=o,h=1,p;for(;++d<s&&d<i&&!((p=f.get(t[d]))==null||p!==u+h);)h++;if(h>u-l){const S=t[o];for(;l<u;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const je="_$DX_DELEGATE";function Rt(e,t,n,r={}){let s;return Ce(i=>{s=i,t===document?e():ie(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function ne(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>L(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Qe(e,t=window.document){const n=t[je]||(t[je]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Bt))}}function Oe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _t(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function jt(e,t){t==null?e.removeAttribute("class"):e.className=t}function kt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function It(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(ke(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(ke(e,l,!0),n[l]=c)}return n}function Ut(e,t,n){if(!t)return n?Oe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function Vt(e,t={},n,r){const s={};return r||M(()=>s.children=z(e,t.children,s.children)),M(()=>t.ref&&t.ref(e)),M(()=>Dt(e,t,n,!0,s,!0)),s}function ie(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return z(e,t,r,n);M(s=>z(e,t(),s,n),r)}function Dt(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Ie(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||z(e,t.children);continue}const l=t[o];s[o]=Ie(e,o,l,s[o],n,i)}}function qt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ke(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ie(e,t,n,r,s,i){let o,l,c,f,u;if(t==="style")return Ut(e,n,r);if(t==="classList")return It(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),h=Lt.has(d);if(!h&&r){const p=Array.isArray(r)?r[0]:r;e.removeEventListener(d,p)}(h||n)&&(kt(e,d,n,h),h&&Qe([d]))}else if(t.slice(0,5)==="attr:")Oe(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=Ot.has(t))||!s&&((f=$t(t,e.tagName))||(l=vt.has(t)))||(o=e.nodeName.includes("-")))u&&(t=t.slice(5),l=!0),t==="class"||t==="className"?jt(e,n):o&&!l&&!c?e[qt(t)]=n:e[f||t]=n;else{const d=s&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];d?_t(e,d,t,n):Oe(e,Et[t]||t,n)}return n}function Bt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),P.registry&&!P.done&&(P.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,r,s){if(P.context){!n&&(n=[...e.childNodes]);let l=[];for(let c=0;c<n.length;c++){const f=n[c];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():l.push(f)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(P.context)return n;if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=X(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(P.context)return n;n=X(e,n,r)}else{if(i==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=z(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ee(l,t,n,s))return M(()=>n=z(e,l,n,r,!0)),()=>n;if(P.context){if(!l.length)return n;for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=X(e,n,r),o)return n}else c?n.length===0?Ue(e,l,r):Nt(e,n,l):(n&&X(e),Ue(e,l));n=l}else if(t.nodeType){if(P.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=X(e,n,r,t);X(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Ee(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],c=n&&n[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Ee(e,l,c)||s;else if(f==="function")if(r){for(;typeof l=="function";)l=l();s=Ee(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function Ue(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function X(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const c=l.parentNode===e;!i&&!o?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Mt=!1;function Ze(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ft([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Kt(e){try{return document.querySelector(e)}catch{return null}}function et(e,t){const n=Kt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function tt(e,t,n,r){let s=!1;const i=l=>typeof l=="string"?{value:l}:l,o=Ft(N(i(e()),{equals:(l,c)=>l.value===c.value}),void 0,l=>(!s&&t(l),l));return n&&$e(n((l=e())=>{s=!0,o[1](i(l)),s=!1})),{signal:o,utils:r}}function Ht(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function Wt(){return tt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),et(window.location.hash.slice(1),n)},e=>Ze(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Xt(){return tt(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const s=e.indexOf("#"),i=s>=0?e.slice(s+1):"";et(i,n)},e=>Ze(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function zt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:c=>{c&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const Gt=/^(?:[a-z0-9]+:)?\/\//i,Jt=/^\/+|(\/)\/+$/g;function H(e,t=!1){const n=e.replace(Jt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function oe(e,t,n){if(Gt.test(t))return;const r=H(e),s=n&&H(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+H(t,!i)}function Yt(e,t){if(e==null)throw new Error(t);return e}function nt(e,t){return H(e).replace(/\/*(\*.*)?$/g,"")+H(t)}function Qt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Zt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const c=l.split("/").filter(Boolean),f=c.length-o;if(f<0||f>0&&s===void 0&&!t)return null;const u={path:o?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const p=i[h],S=c[h],w=p[0]===":",C=w?p.slice(1):p;if(w&&xe(S,d(C)))u.params[C]=S;else if(w||!xe(S,p))return null;u.path+=`/${S}`}if(s){const h=f?c.slice(-f).join("/"):"";if(xe(h,d(s)))u.params[s]=h;else return null}return u}}function xe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function en(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function rt(e){const t=new Map,n=Ke();return new Proxy({},{get(r,s){return t.has(s)||ft(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function tn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([s,i])=>{i==null||i===""?n.delete(s):n.set(s,String(i))});const r=n.toString();return r?`?${r}`:""}function st(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return st(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const nn=100,it=de(),pe=de(),re=()=>Yt(he(it),"Make sure your app is wrapped in a <Router />");let te;const ye=()=>te||he(pe)||re().base,rn=e=>{const t=ye();return A(()=>t.resolvePath(e()))},sn=e=>{const t=re();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},on=()=>re().navigatorFactory(),ot=()=>re().location,kn=()=>ye().data,In=()=>{const e=ot(),t=on(),n=(r,s)=>{const i=L(()=>tn(e.search,r));t(e.pathname+i+e.hash,{scroll:!1,resolve:!1,...s})};return[e.query,n]};function ln(e,t="",n){const{component:r,data:s,children:i}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,element:r?()=>$(r,{}):()=>{const{element:c}=e;return c===void 0&&n?$(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return lt(e.path).reduce((c,f)=>{for(const u of st(f)){const d=nt(t,u),h=o?d:d.split("/*",1)[0];c.push({...l,originalPath:u,pattern:h,matcher:Zt(h,!o,e.matchFilters)})}return c},[])}function cn(e,t=0){return{routes:e,score:en(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function lt(e){return Array.isArray(e)?e:[e]}function ct(e,t="",n,r=[],s=[]){const i=lt(e);for(let o=0,l=i.length;o<l;o++){const c=i[o];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const f=ln(c,t,n);for(const u of f){r.push(u);const d=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!d)ct(c.children,u.pattern,n,r,s);else{const h=cn([...r],s.length);s.push(h)}r.pop()}}}return r.length?s:s.sort((o,l)=>l.score-o.score)}function un(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function an(e,t){const n=new URL("http://sar"),r=A(c=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),c}},n,{equals:(c,f)=>c.href===f.href}),s=A(()=>r().pathname),i=A(()=>r().search,!0),o=A(()=>r().hash),l=A(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:rt(Fe(i,()=>Qt(r())))}}function fn(e,t="",n,r){const{signal:[s,i],utils:o={}}=Ht(e),l=o.parsePath||(x=>x),c=o.renderPath||(x=>x),f=o.beforeLeave||zt(),u=oe("",t),d=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&i({value:u,replace:!0,scroll:!1});const[h,p]=N(!1),S=async x=>{p(!0);try{await dt(x)}finally{p(!1)}},[w,C]=N(s().value),[T,R]=N(s().state),V=an(w,T),D=[],I={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(x){return oe(u,x)}};if(n)try{te=I,I.data=n({data:void 0,params:{},location:V,navigate:J(I)})}finally{te=void 0}function K(x,g,m){L(()=>{if(typeof g=="number"){g&&(o.go?f.confirm(g,m)&&o.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:j,scroll:q,state:Q}={replace:!1,resolve:!0,scroll:!0,...m},B=j?x.resolvePath(g):oe("",g);if(B===void 0)throw new Error(`Path '${g}' is not a routable path`);if(D.length>=nn)throw new Error("Too many redirects");const Z=w();if((B!==Z||Q!==T())&&!Mt){if(f.confirm(B,m)){const ut=D.push({value:Z,replace:v,scroll:q,state:T()});S(()=>{C(B),R(Q)}).then(()=>{D.length===ut&&Y({value:B,state:Q})})}}})}function J(x){return x=x||he(pe)||I,(g,m)=>K(x,g,m)}function Y(x){const g=D[0];g&&((x.value!==g.value||x.state!==g.state)&&i({...x,replace:g.replace,scroll:g.scroll}),D.length=0)}M(()=>{const{value:x,state:g}=s();L(()=>{x!==w()&&S(()=>{C(x),R(g)})})});{let x=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const m=g.composedPath().find(Z=>Z instanceof Node&&Z.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const v=m.href;if(m.target||!v&&!m.hasAttribute("state"))return;const j=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||j&&j.includes("external"))return;const q=new URL(v);if(q.origin!==window.location.origin||u&&q.pathname&&!q.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const Q=l(q.pathname+q.search+q.hash),B=m.getAttribute("state");g.preventDefault(),K(I,Q,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:B&&JSON.parse(B)})};Qe(["click"]),document.addEventListener("click",x),$e(()=>document.removeEventListener("click",x))}return{base:I,out:d,location:V,isRouting:h,renderPath:c,parsePath:l,navigatorFactory:J,beforeLeave:f}}function dn(e,t,n,r,s){const{base:i,location:o,navigatorFactory:l}=e,{pattern:c,element:f,preload:u,data:d}=r().route,h=A(()=>r().path);u&&u();const p={parent:t,pattern:c,get child(){return n()},path:h,params:s,data:t.data,outlet:f,resolvePath(S){return oe(i.path(),S,h())}};if(d)try{te=p,p.data=d({data:t.data,params:s,location:o,navigate:l(p)})}finally{te=void 0}return p}const hn=ne("<a link>"),gn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||Wt(),l=fn(o,r,s);return $(it.Provider,{value:l,get children(){return e.children}})},mn=e=>{const t=re(),n=ye(),r=He(()=>e.children),s=A(()=>ct(r(),nt(n.pattern,e.base||""),yn)),i=A(()=>un(s(),t.location.pathname)),o=rt(()=>{const u=i(),d={};for(let h=0;h<u.length;h++)Object.assign(d,u[h].params);return d});t.out&&t.out.matches.push(i().map(({route:u,path:d,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:d,params:h})));const l=[];let c;const f=A(Fe(i,(u,d,h)=>{let p=d&&u.length===d.length;const S=[];for(let w=0,C=u.length;w<C;w++){const T=d&&d[w],R=u[w];h&&T&&R.route.key===T.route.key?S[w]=h[w]:(p=!1,l[w]&&l[w](),Ce(V=>{l[w]=V,S[w]=dn(t,S[w-1]||n,()=>f()[w+1],()=>i()[w],o)}))}return l.splice(u.length).forEach(w=>w()),h&&p?h:(c=S[0],S)}));return $(Ye,{get when(){return f()&&c},keyed:!0,children:u=>$(pe.Provider,{value:u,get children(){return u.outlet()}})})},pn=(e,t)=>()=>$(mn,{base:t,children:e}),yn=()=>{const e=ye();return $(Ye,{get when(){return e.child},keyed:!0,children:t=>$(pe.Provider,{value:t,get children(){return t.outlet()}})})};function Ve(e){e=_e({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=St(e,["href","state","class","activeClass","inactiveClass","end"]),n=rn(()=>e.href),r=sn(n),s=ot(),i=A(()=>{const o=n();if(o===void 0)return!1;const l=H(o.split(/[?#]/,1)[0]).toLowerCase(),c=H(s.pathname).toLowerCase();return e.end?l===c:c.startsWith(l)});return(()=>{const o=hn();return Vt(o,_e(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),o})()}const wn="modulepreload",bn=function(e){return"/"+e},De={},Pe=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=bn(i),i in De)return;De[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":wn,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((u,d)=>{f.addEventListener("load",u),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Sn=ne('<main class="bg-gray-100 text-gray-700 p-8"><h1 class="text-2xl font-bold">Home</h1><p class="mt-4">OpenUtil is a open source project that allow you to use and contribute online utilities.</p><h2 class="mt-4 text-xl font-bold">Recent</h2><ul><li><a href="#/u/trans-trainer">Translate Trainer');function xn(){return Sn()}function Pn(e,t){return new Promise(n=>setTimeout(n,e,t))}function An(e,t){return Math.floor(Math.random()*(t-e+1))+e}function vn(){return Pn(An(500,1e3),"Solid")}const On=()=>{const[e]=Me(vn);return e},En=[{path:"/",component:xn},{path:"/about",component:Se(()=>Pe(()=>import("./about-26c46003.js"),[])),data:On},{path:"/u/trans-trainer",component:Se(()=>Pe(()=>import("./index-2f98da95.js"),[]))},{path:"**",component:Se(()=>Pe(()=>import("./404-f3916d87.js"),[]))}],Cn=ne("<b>OpenUtil"),$n=ne('<nav class="bg-gray-200 text-gray-900 px-4"><ul class="flex items-center"><li class="py-2 px-4"></li><li class="py-2 px-4">'),Ln=ne("<main>"),Tn=()=>{const e=pn(En);return[(()=>{const t=$n(),n=t.firstChild,r=n.firstChild,s=r.nextSibling;return ie(r,$(Ve,{href:"/",class:"no-underline hover:underline",get children(){return Cn()}})),ie(s,$(Ve,{href:"/about",class:"no-underline hover:underline",children:"About"})),t})(),(()=>{const t=Ln();return ie(t,$(e,{})),t})()]},Nn=document.getElementById("root");Rt(()=>$(gn,{get source(){return Xt()},get children(){return $(Tn,{})}}),Nn);export{jn as S,$ as a,N as b,_n as c,A as d,Vt as e,Mt as f,In as g,Qe as h,ie as i,_e as m,$e as o,St as s,ne as t,kn as u};