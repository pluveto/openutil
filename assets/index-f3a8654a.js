(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const m={context:void 0,registry:void 0};function U(e){m.context=e}const mt=(e,t)=>e===t,ue=Symbol("solid-proxy"),ae={equals:mt};let Fe=Ye;const k=1,ne=2,Ke={owned:null,cleanups:null,context:null,owner:null},we={};var p=null;let f=null,S=null,C=null,E=null,he=0;const[Xn,Le]=N(!1);function $e(e,t){const n=S,r=p,s=e.length===0,i=t===void 0?r:t,o=s?Ke:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>T(()=>K(o)));p=o,S=null;try{return _(l,!0)}finally{S=n,p=r}}function N(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(f&&f.running&&f.sources.has(n)?s=s(n.tValue):s=s(n.value)),Ge(n,s));return[Je.bind(n),r]}function Ne(e,t,n){const r=me(e,t,!0,k);Y(r)}function V(e,t,n){const r=me(e,t,!1,k);Y(r)}function zn(e,t,n){Fe=Pt;const r=me(e,t,!1,k),s=X&&z(X);s&&(r.suspense=s),(!n||!n.render)&&(r.user=!0),E?E.push(r):Y(r)}function A(e,t,n){n=n?Object.assign({},ae,n):ae;const r=me(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Y(r),Je.bind(r)}function pt(e){return e&&typeof e=="object"&&"then"in e}function He(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let o=null,l=we,u=null,a=!1,c=!1,d="initialValue"in i,g=typeof r=="function"&&A(r);const w=new Set,[x,b]=(i.storage||N)(i.initialValue),[$,L]=N(void 0),[R,q]=N(void 0,{equals:!1}),[B,I]=N(d?"ready":"unresolved");if(m.context){u=`${m.context.id}${m.context.count++}`;let h;i.ssrLoadFrom==="initial"?l=i.initialValue:m.load&&(h=m.load(u))&&(l=h)}function M(h,y,v,j){return o===h&&(o=null,j!==void 0&&(d=!0),(h===l||y===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(j,{value:y})),l=we,f&&h&&a?(f.promises.delete(h),a=!1,_(()=>{f.running=!0,Q(y,v)},!1)):Q(y,v)),y}function Q(h,y){_(()=>{y===void 0&&b(()=>h),I(y!==void 0?"errored":d?"ready":"unresolved"),L(y);for(const v of w.keys())v.decrement();w.clear()},!1)}function Z(){const h=X&&z(X),y=x(),v=$();if(v!==void 0&&!o)throw v;return S&&!S.user&&h&&Ne(()=>{R(),o&&(h.resolved&&f&&a?f.promises.add(o):w.has(h)||(h.increment(),w.add(h)))}),y}function P(h=!0){if(h!==!1&&c)return;c=!1;const y=g?g():r;if(a=f&&f.running,y==null||y===!1){M(o,T(x));return}f&&o&&f.promises.delete(o);const v=l!==we?l:T(()=>s(y,{value:x(),refetching:h}));return pt(v)?(o=v,"value"in v?(v.status==="success"?M(o,v.value,void 0,y):M(o,void 0,void 0,y),v):(c=!0,queueMicrotask(()=>c=!1),_(()=>{I(d?"refreshing":"pending"),q()},!1),v.then(j=>M(v,j,void 0,y),j=>M(v,void 0,et(j),y)))):(M(o,v,void 0,y),v)}return Object.defineProperties(Z,{state:{get:()=>B()},error:{get:()=>$()},loading:{get(){const h=B();return h==="pending"||h==="refreshing"}},latest:{get(){if(!d)return Z();const h=$();if(h&&!o)throw h;return x()}}}),g?Ne(()=>P(!1)):P(!1),[Z,{refetch:P,mutate:b}]}function T(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function We(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i){i=!1;return}const u=T(()=>t(l,s,o));return s=l,u}}function ge(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function Xe(){return p}function yt(e,t){const n=p,r=S;p=e,S=null;try{return _(t,!0)}catch(s){Te(s)}finally{p=n,S=r}}function wt(e){if(f&&f.running)return e(),f.done;const t=S,n=p;return Promise.resolve().then(()=>{S=t,p=n;let r;return X&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),_(e,!1),S=p=null,r?r.done:void 0})}function bt(e){E.push.apply(E,e),e.length=0}function se(e,t){const n=Symbol("context");return{id:n,Provider:vt(n),defaultValue:e}}function z(e){return p&&p.context&&p.context[e.id]!==void 0?p.context[e.id]:e.defaultValue}function ze(e){const t=A(e),n=A(()=>ve(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let X;function St(){return X||(X=se())}function Je(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===k)Y(this);else{const t=C;C=null,_(()=>de(this),!1),C=t}if(S){const t=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(t)):(S.sources=[this],S.sourceSlots=[t]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function Ge(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const s=f.running;(s||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=f&&f.running;o&&f.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?C.push(i):E.push(i),i.observers&&Qe(i)),o?i.tState=k:i.state=k)}if(C.length>1e6)throw C=[],new Error},!1)}return t}function Y(e){if(!e.fn)return;K(e);const t=p,n=S,r=he;S=p=e,Re(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{_(()=>{f&&(f.running=!0),S=p=e,Re(e,e.tValue,r),S=p=null},!1)}),S=n,p=t}function Re(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(f&&f.running?(e.tState=k,e.tOwned&&e.tOwned.forEach(K),e.tOwned=void 0):(e.state=k,e.owned&&e.owned.forEach(K),e.owned=null)),e.updatedAt=n+1,Te(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ge(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function me(e,t,n,r=k,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=r),p===null||p!==Ke&&(f&&f.running&&p.pure?p.tOwned?p.tOwned.push(i):p.tOwned=[i]:p.owned?p.owned.push(i):p.owned=[i]),i}function fe(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===ne)return de(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,i=n[r+1];for(;(s=s.owner)&&s!==i;)if(f.disposed.has(s))return}if((t?e.tState:e.state)===k)Y(e);else if((t?e.tState:e.state)===ne){const s=C;C=null,_(()=>de(e,n[0]),!1),C=s}}}function _(e,t){if(C)return e();let n=!1;t||(C=[]),E?n=!0:E=[],he++;try{const r=e();return xt(n),r}catch(r){n||(E=null),C=null,Te(r)}}function xt(e){if(C&&(Ye(C),C=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,s=f.disposed;E.push.apply(E,f.effects),t=f.resolve;for(const i of E)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,_(()=>{for(const i of s)K(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)K(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Le(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,E),E=null,Le(!0);return}}const n=E;E=null,n.length&&_(()=>Fe(n),!1),t&&t()}function Ye(e){for(let t=0;t<e.length;t++)fe(e[t])}function Pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:fe(r)}if(m.context){if(m.count){m.effects||(m.effects=[]),m.effects.push(...e.slice(0,n));return}else m.effects&&(e=[...m.effects,...e],n+=m.effects.length,delete m.effects);U()}for(t=0;t<n;t++)fe(e[t])}function de(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const i=n?s.tState:s.state;i===k?s!==t&&(!s.updatedAt||s.updatedAt<he)&&fe(s):i===ne&&de(s,t)}}}function Qe(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=ne:r.state=ne,r.pure?C.push(r):E.push(r),r.observers&&Qe(r))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)K(e.tOwned[t]);delete e.tOwned}Ze(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function Ze(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Ze(e.owned[n])}function et(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Te(e,t=p){throw et(e)}function ve(e){if(typeof e=="function"&&!e.length)return ve(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ve(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vt(e,t){return function(r){let s;return V(()=>s=T(()=>(p.context={...p.context,[e]:r.value},ze(()=>r.children))),void 0),s}}function O(e,t){return T(()=>e(t||{}))}function oe(){return!0}const Ae={get(e,t,n){return t===ue?n:e.get(t)},has(e,t){return t===ue?!0:e.has(t)},set:oe,deleteProperty:oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:oe,deleteProperty:oe}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function At(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function _e(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&ue in o,e[i]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=be(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in be(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(be(e[o])));return[...new Set(i)]}},Ae);const n={},r={},s=new Set;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);for(let u=0,a=l.length;u<a;u++){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const d=Object.getOwnPropertyDescriptor(o,c);if(!s.has(c))d.get?(s.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:At.bind(r[c]=[d.get.bind(o)])})):(d.value!==void 0&&s.add(c),n[c]=d.value);else{const g=r[c];g?d.get?g.push(d.get.bind(o)):d.value!==void 0&&g.push(()=>d.value):n[c]===void 0&&(n[c]=d.value)}}}return n}function Ot(e,...t){if(ue in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Ae));return i.push(new Proxy({get(o){return s.has(o)?void 0:e[o]},has(o){return s.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!s.has(o))}},Ae)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const a of t)a.includes(s)&&(l=!0,o?r[u][s]=i.value:Object.defineProperty(r[u],s,i)),++u;l||(o?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}function Se(e){let t,n;const r=s=>{const i=m.context;if(i){const[l,u]=N();m.count||(m.count=0),m.count++,(n||(n=e())).then(a=>{U(i),m.count--,u(()=>a.default),U()}),t=l}else if(!t){const[l]=He(()=>(n||(n=e())).then(u=>u.default));t=l}let o;return A(()=>(o=t())&&T(()=>{if(!i)return o(s);const l=m.context;U(i);const u=o(s);return U(l),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let Et=0;function Ct(){const e=m.context;return e?`${e.id}${e.count++}`:`cl-${Et++}`}const $t=e=>`Stale read from <${e}>.`;function tt(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?T(()=>s(t?r:()=>{if(!T(n))throw $t("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Tt=se();function Jn(e){let t=0,n,r,s,i,o;const[l,u]=N(!1),a=St(),c={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:l,effects:[],resolved:!1},d=Xe();if(m.context&&m.load){const x=m.context.id+m.context.count;let b=m.load(x);if(b&&(typeof b!="object"||b.status!=="success")&&(s=b),s&&s!=="$$f"){const[$,L]=N(void 0,{equals:!1});i=$,s.then(()=>{m.gather(x),U(r),L(),U()}).catch(R=>{if(R||m.done)return R&&(o=R),L()})}}const g=z(Tt);g&&(n=g.register(c.inFallback));let w;return ge(()=>w&&w()),O(a.Provider,{value:c,get children(){return A(()=>{if(o)throw o;if(r=m.context,i)return i(),i=void 0;r&&s==="$$f"&&U();const x=A(()=>e.children);return A(b=>{const $=c.inFallback(),{showContent:L=!0,showFallback:R=!0}=n?n():{};if((!$||s&&s!=="$$f")&&L)return c.resolved=!0,w&&w(),w=r=s=void 0,bt(c.effects),x();if(R)return w?b:$e(q=>(w=q,r&&(U({id:r.id+"f",count:0}),r=void 0),e.fallback),d)})})}})}const Lt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Nt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Lt]),Rt=new Set(["innerHTML","textContent","innerText","children"]),_t=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),jt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function kt(e,t){const n=jt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const It=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Mt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ut(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,a=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!a){a=new Map;let d=l;for(;d<i;)a.set(n[d],d++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let d=o,g=1,w;for(;++d<s&&d<i&&!((w=a.get(t[d]))==null||w!==c+g);)g++;if(g>c-l){const x=t[o];for(;l<c;)e.insertBefore(n[l++],x)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const je="_$DX_DELEGATE";function Vt(e,t,n,r={}){let s;return $e(i=>{s=i,t===document?e():le(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function H(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>T(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function nt(e,t=window.document){const n=t[je]||(t[je]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Xt))}}function Oe(e,t,n){m.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function qt(e,t,n,r){m.context||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function Bt(e,t){m.context||(t==null?e.removeAttribute("class"):e.className=t)}function Dt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Ft(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||t[l]||(ke(e,l,!1),delete n[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(ke(e,l,!0),n[l]=u)}return n}function Kt(e,t,n){if(!t)return n?Oe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function Ee(e,t={},n,r){const s={};return r||V(()=>s.children=G(e,t.children,s.children)),V(()=>t.ref&&t.ref(e)),V(()=>Ht(e,t,n,!0,s,!0)),s}function le(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return G(e,t,r,n);V(s=>G(e,t(),s,n),r)}function Ht(e,t,n,r,s={},i=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=Ie(e,o,null,s[o],n,i)}for(const o in t){if(o==="children"){r||G(e,t.children);continue}const l=t[o];s[o]=Ie(e,o,l,s[o],n,i)}}function Wt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ke(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ie(e,t,n,r,s,i){let o,l,u,a,c;if(t==="style")return Kt(e,n,r);if(t==="classList")return Ft(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),g=It.has(d);if(!g&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(d,w)}(g||n)&&(Dt(e,d,n,g),g&&nt([d]))}else if(t.slice(0,5)==="attr:")Oe(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=Rt.has(t))||!s&&((a=kt(t,e.tagName))||(l=Nt.has(t)))||(o=e.nodeName.includes("-"))){if(c)t=t.slice(5),l=!0;else if(m.context)return n;t==="class"||t==="className"?Bt(e,n):o&&!l&&!u?e[Wt(t)]=n:e[a||t]=n}else{const d=s&&t.indexOf(":")>-1&&Mt[t.split(":")[0]];d?qt(e,d,t,n):Oe(e,_t[t]||t,n)}return n}function Xt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,r,s){if(m.context){!n&&(n=[...e.childNodes]);let l=[];for(let u=0;u<n.length;u++){const a=n[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(m.context)return n;if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=J(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(m.context)return n;n=J(e,n,r)}else{if(i==="function")return V(()=>{let l=t();for(;typeof l=="function";)l=l();n=G(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(Ce(l,t,n,s))return V(()=>n=G(e,l,n,r,!0)),()=>n;if(m.context){if(!l.length)return n;if(r===void 0)return[...e.childNodes];let a=l[0],c=[a];for(;(a=a.nextSibling)!==r;)c.push(a);return n=c}if(l.length===0){if(n=J(e,n,r),o)return n}else u?n.length===0?Me(e,l,r):Ut(e,n,l):(n&&J(e),Me(e,l));n=l}else if(t.nodeType){if(m.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=J(e,n,r,t);J(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Ce(e,l,u)||s;else if(a==="function")if(r){for(;typeof l=="function";)l=l();s=Ce(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function Me(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function J(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const zt=!1;const rt=se(),Jt=["title","meta"],Ue=[],Ve=["name","http-equiv","content","charset","media"].concat(["property"]),qe=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([r])=>t.includes(r)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function Gt(){if(!m.context){const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,r=>r.parentNode.removeChild(r))}const e=new Map;function t(n){if(n.ref)return n.ref;let r=document.querySelector(`[data-sm="${n.id}"]`);return r?(r.tagName.toLowerCase()!==n.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(n.tag)),r.removeAttribute("data-sm")):r=document.createElement(n.tag),r}return{addTag(n){if(Jt.indexOf(n.tag)!==-1){const i=n.tag==="title"?Ue:Ve,o=qe(n,i);e.has(o)||e.set(o,[]);let l=e.get(o),u=l.length;l=[...l,n],e.set(o,l);let a=t(n);n.ref=a,Ee(a,n.props);let c=null;for(var r=u-1;r>=0;r--)if(l[r]!=null){c=l[r];break}return a.parentNode!=document.head&&document.head.appendChild(a),c&&c.ref&&document.head.removeChild(c.ref),u}let s=t(n);return n.ref=s,Ee(s,n.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(n,r){const s=n.tag==="title"?Ue:Ve,i=qe(n,s);if(n.ref){const o=e.get(i);if(o){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let l=r-1;l>=0;l--)o[l]!=null&&document.head.appendChild(o[l].ref)}o[r]=null,e.set(i,o)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const Yt=e=>{const t=Gt();return O(rt.Provider,{value:t,get children(){return e.children}})},Qt=(e,t,n)=>(Zt({tag:e,props:t,setting:n,id:Ct(),get name(){return t.name||t.property}}),null);function Zt(e){let t;if(t=t||z(rt),!t)throw new Error("<MetaProvider /> should be in the tree");V(()=>{const n=t.addTag(e);ge(()=>t.removeTag(e,n))})}const en=e=>Qt("title",e,{escape:!0,close:!0});function st(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function tn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function nn(e){try{return document.querySelector(e)}catch{return null}}function it(e,t){const n=nn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function ot(e,t,n,r){let s=!1;const i=l=>typeof l=="string"?{value:l}:l,o=tn(N(i(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&ge(n((l=e())=>{s=!0,o[1](i(l)),s=!1})),{signal:o,utils:r}}function rn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function sn(){return ot(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),it(window.location.hash.slice(1),n)},e=>st(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function on(){return ot(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const s=e.indexOf("#"),i=s>=0?e.slice(s+1):"";it(i,n)},e=>st(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function ln(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(s,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const cn=/^(?:[a-z0-9]+:)?\/\//i,un=/^\/+|(\/)\/+$/g;function W(e,t=!1){const n=e.replace(un,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ce(e,t,n){if(cn.test(t))return;const r=W(e),s=n&&W(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+W(t,!i)}function an(e,t){if(e==null)throw new Error(t);return e}function lt(e,t){return W(e).replace(/\/*(\*.*)?$/g,"")+W(t)}function fn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function dn(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),a=u.length-o;if(a<0||a>0&&s===void 0&&!t)return null;const c={path:o?"":"/",params:{}},d=g=>n===void 0?void 0:n[g];for(let g=0;g<o;g++){const w=i[g],x=u[g],b=w[0]===":",$=b?w.slice(1):w;if(b&&xe(x,d($)))c.params[$]=x;else if(b||!xe(x,w))return null;c.path+=`/${x}`}if(s){const g=a?u.slice(-a).join("/"):"";if(xe(g,d(s)))c.params[s]=g;else return null}return c}}function xe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function hn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ct(e){const t=new Map,n=Xe();return new Proxy({},{get(r,s){return t.has(s)||yt(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function gn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([s,i])=>{i==null||i===""?n.delete(s):n.set(s,String(i))});const r=n.toString();return r?`?${r}`:""}function ut(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return ut(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const mn=100,at=se(),pe=se(),ie=()=>an(z(at),"Make sure your app is wrapped in a <Router />");let re;const ye=()=>re||z(pe)||ie().base,pn=e=>{const t=ye();return A(()=>t.resolvePath(e()))},yn=e=>{const t=ie();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},wn=()=>ie().navigatorFactory(),ft=()=>ie().location,Gn=()=>ye().data,Yn=()=>{const e=ft(),t=wn(),n=(r,s)=>{const i=T(()=>gn(e.search,r));t(e.pathname+i+e.hash,{scroll:!1,resolve:!1,...s})};return[e.query,n]};function bn(e,t="",n){const{component:r,data:s,children:i}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,element:r?()=>O(r,{}):()=>{const{element:u}=e;return u===void 0&&n?O(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return dt(e.path).reduce((u,a)=>{for(const c of ut(a)){const d=lt(t,c),g=o?d:d.split("/*",1)[0];u.push({...l,originalPath:c,pattern:g,matcher:dn(g,!o,e.matchFilters)})}return u},[])}function Sn(e,t=0){return{routes:e,score:hn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function dt(e){return Array.isArray(e)?e:[e]}function ht(e,t="",n,r=[],s=[]){const i=dt(e);for(let o=0,l=i.length;o<l;o++){const u=i[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=bn(u,t,n);for(const c of a){r.push(c);const d=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!d)ht(u.children,c.pattern,n,r,s);else{const g=Sn([...r],s.length);s.push(g)}r.pop()}}}return r.length?s:s.sort((o,l)=>l.score-o.score)}function xn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Pn(e,t){const n=new URL("http://sar"),r=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),s=A(()=>r().pathname),i=A(()=>r().search,!0),o=A(()=>r().hash),l=A(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:ct(We(i,()=>fn(r())))}}function vn(e,t="",n,r){const{signal:[s,i],utils:o={}}=rn(e),l=o.parsePath||(P=>P),u=o.renderPath||(P=>P),a=o.beforeLeave||ln(),c=ce("",t),d=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[g,w]=N(!1),x=async P=>{w(!0);try{await wt(P)}finally{w(!1)}},[b,$]=N(s().value),[L,R]=N(s().state),q=Pn(b,L),B=[],I={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(P){return ce(c,P)}};if(n)try{re=I,I.data=n({data:void 0,params:{},location:q,navigate:Q(I)})}finally{re=void 0}function M(P,h,y){T(()=>{if(typeof h=="number"){h&&(o.go?a.confirm(h,y)&&o.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:j,scroll:D,state:ee}={replace:!1,resolve:!0,scroll:!0,...y},F=j?P.resolvePath(h):ce("",h);if(F===void 0)throw new Error(`Path '${h}' is not a routable path`);if(B.length>=mn)throw new Error("Too many redirects");const te=b();if((F!==te||ee!==L())&&!zt){if(a.confirm(F,y)){const gt=B.push({value:te,replace:v,scroll:D,state:L()});x(()=>{$(F),R(ee)}).then(()=>{B.length===gt&&Z({value:F,state:ee})})}}})}function Q(P){return P=P||z(pe)||I,(h,y)=>M(P,h,y)}function Z(P){const h=B[0];h&&((P.value!==h.value||P.state!==h.state)&&i({...P,replace:h.replace,scroll:h.scroll}),B.length=0)}V(()=>{const{value:P,state:h}=s();T(()=>{P!==b()&&x(()=>{$(P),R(h)})})});{let P=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const y=h.composedPath().find(te=>te instanceof Node&&te.nodeName.toUpperCase()==="A");if(!y||!y.hasAttribute("link"))return;const v=y.href;if(y.target||!v&&!y.hasAttribute("state"))return;const j=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||j&&j.includes("external"))return;const D=new URL(v);if(D.origin!==window.location.origin||c&&D.pathname&&!D.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const ee=l(D.pathname+D.search+D.hash),F=y.getAttribute("state");h.preventDefault(),M(I,ee,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};nt(["click"]),document.addEventListener("click",P),ge(()=>document.removeEventListener("click",P))}return{base:I,out:d,location:q,isRouting:g,renderPath:u,parsePath:l,navigatorFactory:Q,beforeLeave:a}}function An(e,t,n,r,s){const{base:i,location:o,navigatorFactory:l}=e,{pattern:u,element:a,preload:c,data:d}=r().route,g=A(()=>r().path);c&&c();const w={parent:t,pattern:u,get child(){return n()},path:g,params:s,data:t.data,outlet:a,resolvePath(x){return ce(i.path(),x,g())}};if(d)try{re=w,w.data=d({data:t.data,params:s,location:o,navigate:l(w)})}finally{re=void 0}return w}const On=H("<a link>"),En=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||sn(),l=vn(o,r,s);return O(at.Provider,{value:l,get children(){return e.children}})},Cn=e=>{const t=ie(),n=ye(),r=ze(()=>e.children),s=A(()=>ht(r(),lt(n.pattern,e.base||""),Tn)),i=A(()=>xn(s(),t.location.pathname)),o=ct(()=>{const c=i(),d={};for(let g=0;g<c.length;g++)Object.assign(d,c[g].params);return d});t.out&&t.out.matches.push(i().map(({route:c,path:d,params:g})=>({originalPath:c.originalPath,pattern:c.pattern,path:d,params:g})));const l=[];let u;const a=A(We(i,(c,d,g)=>{let w=d&&c.length===d.length;const x=[];for(let b=0,$=c.length;b<$;b++){const L=d&&d[b],R=c[b];g&&L&&R.route.key===L.route.key?x[b]=g[b]:(w=!1,l[b]&&l[b](),$e(q=>{l[b]=q,x[b]=An(t,x[b-1]||n,()=>a()[b+1],()=>i()[b],o)}))}return l.splice(c.length).forEach(b=>b()),g&&w?g:(u=x[0],x)}));return O(tt,{get when(){return a()&&u},keyed:!0,children:c=>O(pe.Provider,{value:c,get children(){return c.outlet()}})})},$n=(e,t)=>()=>O(Cn,{base:t,children:e}),Tn=()=>{const e=ye();return O(tt,{get when(){return e.child},keyed:!0,children:t=>O(pe.Provider,{value:t,get children(){return t.outlet()}})})};function Be(e){e=_e({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Ot(e,["href","state","class","activeClass","inactiveClass","end"]),n=pn(()=>e.href),r=yn(n),s=ft(),i=A(()=>{const o=n();if(o===void 0)return!1;const l=W(o.split(/[?#]/,1)[0]).toLowerCase(),u=W(s.pathname).toLowerCase();return e.end?l===u:u.startsWith(l)});return(()=>{const o=On();return Ee(o,_e(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),o})()}const Ln="modulepreload",Nn=function(e){return"/"+e},De={},Pe=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Nn(i),i in De)return;De[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const d=s[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ln,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Rn=H('<h1 class="text-2xl font-bold">Home'),_n=H('<p class="mt-4">OpenUtil is a open source project that allow you to use and contribute online utilities.'),jn=H('<h2 class="mt-4 text-xl font-bold">Recent'),kn=H('<ul><li><a href="#/u/trans-trainer">Translate Trainer');function In(){return[Rn(),_n(),jn(),kn()]}function Mn(e,t){return new Promise(n=>setTimeout(n,e,t))}function Un(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Vn(){return Mn(Un(500,1e3),"Solid")}const qn=()=>{const[e]=He(Vn);return e},Bn=[{path:"/",component:In},{path:"/about",component:Se(()=>Pe(()=>import("./about-8d2207fc.js"),[])),data:qn},{path:"/u/trans-trainer",component:Se(()=>Pe(()=>import("./index-7add5815.js"),[]))},{path:"**",component:Se(()=>Pe(()=>import("./404-12d2570a.js"),[]))}],Dn=H("<b>OpenUtil"),Fn=H('<nav class="bg-gray-200 text-gray-900 px-4"><ul class="flex items-center"><li class="py-2 px-4"></li><li class="py-2 px-4">'),Kn=H('<main class="bg-gray-100 text-gray-700 p-8">'),Hn=()=>{const e=$n(Bn);return[O(en,{children:"OpenUtil"}),(()=>{const t=Fn(),n=t.firstChild,r=n.firstChild,s=r.nextSibling;return le(r,O(Be,{href:"/",class:"no-underline hover:underline",get children(){return Dn()}})),le(s,O(Be,{href:"/about",class:"no-underline hover:underline",children:"About"})),t})(),(()=>{const t=Kn();return le(t,O(e,{})),t})()]},Wn=document.getElementById("root");Vt(()=>O(Yt,{get children(){return O(En,{get source(){return on()},get children(){return O(Hn,{})}})}}),Wn);export{Jn as S,en as T,O as a,N as b,zn as c,A as d,Ee as e,zt as f,Yn as g,nt as h,le as i,_e as m,ge as o,Ot as s,H as t,Gn as u};
