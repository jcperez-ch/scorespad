import{l as m,j as e,a as h,O as o}from"./chunk-QFMPRPBF-GHvaBMHy.js";import{C as x}from"./Close-BzgUhftD.js";import{L as v}from"./LocaleContext-CReF0_0-.js";import{u as a}from"./useTranslation-DHfB0S-c.js";import{B as p}from"./Modal-CsgoUq2x.js";import{T as g}from"./App-DV8FzLsg.js";import{I as j}from"./IconButton-XP_BW1Bq.js";import{L as u}from"./List-CdwyzgNT.js";import{L as r}from"./ListItemText-9lBQyF0l.js";import{L as f}from"./ListItemButton-xwUgleGY.js";import{M as L}from"./MenuItem-CCv8UY5v.js";import{T as b}from"./ThemeContext-D1HVQfxm.js";import{L as S}from"./ListItemIcon-ajbM9zm0.js";const N=m(e.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"})),Q={continental:"var(--game-type-continental)",canasta:"var(--game-type-canasta)",classic_dominoes:"var(--game-type-classic-dominoes)",mexican_train:"var(--game-type-mexican-train)",other:"var(--game-type-other)"},C=o.div`
  background: var(--backdrop-background-color);
  color: var(--top-bar-text-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,k=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 8px;
`,T=o(f)`
  padding: 16px 24px;
`,z=[{id:"es",label:"Español"},{id:"en",label:"English"},{id:"fr",label:"Français"}];function U({open:n,onClose:s}){const[i,l]=h.useContext(v),[c]=a(),d=t=>()=>{l(t),s()};return e.jsx(p,{open:n,sx:{zIndex:t=>t.zIndex.drawer+1},children:e.jsxs(C,{children:[e.jsxs(k,{children:[e.jsx(g,{variant:"h5",fontWeight:"bold",children:c("settings.changeLocale")}),e.jsx(j,{color:"inherit",onClick:s,"aria-label":"Close",children:e.jsx(x,{})})]}),e.jsx(u,{children:z.map(({id:t,label:I})=>e.jsx(T,{selected:t===i,onClick:d(t),children:e.jsx(r,{primary:I,slotProps:{primary:{variant:"h6"}}})},t))})]})})}const B=m(e.jsx("path",{d:"m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z"})),y=o(S)`
  color: var(--menu-icon-color);
`;function X({onClick:n}){const[s]=a();return e.jsxs(L,{onClick:n,children:[e.jsx(y,{children:e.jsx(B,{})}),e.jsx(r,{children:s("settings.changeLocale")})]})}const M=o.div`
  background: var(--backdrop-background-color);
  color: var(--top-bar-text-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,w=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 8px;
`,H=o(f)`
  padding: 16px 24px;
`,E=["minimal","aurora","girlish","dark","forest"];function Y({open:n,onClose:s}){const[i,l]=h.useContext(b),[c]=a(),d=t=>()=>{l(t),s()};return e.jsx(p,{open:n,sx:{zIndex:t=>t.zIndex.drawer+1},children:e.jsxs(M,{children:[e.jsxs(w,{children:[e.jsx(g,{variant:"h5",fontWeight:"bold",children:c("settings.changeTheme")}),e.jsx(j,{color:"inherit",onClick:s,"aria-label":"Close",children:e.jsx(x,{})})]}),e.jsx(u,{children:E.map(t=>e.jsx(H,{selected:t===i,onClick:d(t),children:e.jsx(r,{primary:c(`skins.${t}`),slotProps:{primary:{variant:"h6"}}})},t))})]})})}const P=m(e.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}));function Z({onClick:n}){const[s]=a();return e.jsxs(L,{onClick:n,children:[e.jsx(y,{children:e.jsx(P,{})}),e.jsx(r,{children:s("settings.changeTheme")})]})}export{X as L,N as S,Z as T,U as a,Y as b,y as c,Q as g};
