import{f as n,i,b as d,t as r,k as u}from"./index-4e49a88e.js";const g=r('<h1 class="text-2xl font-bold">Mathjax Delimiter Converter'),m=r('<section class="mt-2"><p class="text-gray-400">Enter or paste text with Mathjax delimiters (e.g., [ ], () ) below:</p><textarea class="mt-4 w-full h-24 p-2" placeholder="Enter text here"></textarea><button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Convert Delimiters'),h=r('<section class="mt-4"><p class="text-gray-400">Converted text with updated delimiters:</p><textarea class="mt-2 w-full h-24 p-2" readonly>');function f(){const[a,c]=n(""),[s,$]=n(""),o=()=>{let e=a();e=e.replace(/\\\( /g,"$$").replace(/ \\\)/g,"$$"),e=e.replace(/\\\[/g,"$$$$").replace(/\\\]/g,"$$$$"),e=e.replace(/\\\(/g,"$$").replace(/\\\)/g,"$$"),$(e)};return[g(),(()=>{const e=m(),l=e.firstChild,t=l.nextSibling,p=t.nextSibling;return t.$$input=x=>c(x.currentTarget.value),i(t,a),p.$$click=o,e})(),(()=>{const e=h(),l=e.firstChild,t=l.nextSibling;return i(t,s),d(()=>t.value=s()),e})()]}u(["input","click"]);export{f as default};
