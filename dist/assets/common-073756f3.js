const u=(t,e)=>{let r=null;return function(){r&&clearTimeout(r),r=setTimeout(()=>{t.apply(this,arguments),r=null},e)}},a=(t,e)=>new URL(`${t}${e}`,import.meta.url).href,c=()=>{const t=URL.createObjectURL(new Blob),e=t.toString();return URL.revokeObjectURL(t),e.substring(e.lastIndexOf("/")+1)},l=t=>Array.isArray(t)&&t.every(e=>typeof e=="string"),f=(t,e,r)=>{const i=new Set(t),n=new Map;for(const s of e){const o=s[r];i.has(o)&&n.set(o,s)}return t.map(s=>n.get(s)).filter(s=>s!==void 0)};export{u as d,f,a as g,l as i,c as u};