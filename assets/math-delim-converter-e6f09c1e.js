import{f as i,c as b,b as s,t as u,k as f}from"./index-f3191721.js";const m=u('<div class="bg-white text-black dark:bg-gray-900 dark:text-white"><h1 class="text-2xl font-bold">Mathjax Delimiter Converter</h1><section class="mt-2"><p class="text-gray-600 dark:text-gray-300">Enter or paste text with Mathjax delimiters (e.g., $$ $$, $$$$ ) below:</p><textarea class="mt-4 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white" placeholder="Enter text here"></textarea></section><section class="mt-4"><p class="text-gray-600 dark:text-gray-300">Converted text with updated delimiters:</p><textarea class="mt-2 w-full h-24 p-2 bg-white text-black dark:bg-gray-800 dark:text-white" readonly>');function v(){const[a,n]=i(""),[c,$]=i(""),x=t=>{let e=t;return e=e.replace(/\\\( /g,"$$").replace(/ \\\)/g,"$$"),e=e.replace(/\\\[/g,"$$$$").replace(/\\\]/g,"$$$$"),e=e.replace(/\\\(/g,"$$").replace(/\\\)/g,"$$"),e};return b(()=>{const t=a(),e=x(t);$(e)}),(()=>{const t=m(),e=t.firstChild,r=e.nextSibling,d=r.firstChild,l=d.nextSibling,g=r.nextSibling,o=g.firstChild,p=o.nextSibling;return l.$$input=h=>n(h.currentTarget.value),s(()=>l.value=a()),s(()=>p.value=c()),t})()}f(["input"]);export{v as default};