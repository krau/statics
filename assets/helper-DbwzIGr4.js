import{R as i,ad as s,K as f}from"./app-DTjO6UXc.js";function m(a,r=!1){const e=i();return s(()=>a,async()=>{let t;if(typeof a=="string"){if(!f)return;t=await fetch(a).then(n=>n.json())||[]}else t=a;e.value=r?Array.from(t).sort(()=>Math.random()-.5):t},{immediate:!0}),{data:e}}export{m as u};