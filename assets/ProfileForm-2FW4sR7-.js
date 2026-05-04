import{W as S,a0 as A,a as l,j as e,P as E,B as x,H as p}from"./chunk-QFMPRPBF-CZJ-HrMl.js";import{N as h}from"./NameField-CNof9oXy.js";import{D as N,a as j}from"./DialogBody-Q8sBhbmz.js";import{A as T,L as B,P as D}from"./ProfileAvatar-DvDqAy2p.js";import{P as F}from"./ProfilesContext-CRn7-iud.js";import{c as L}from"./ProfileActions-C6UakniL.js";import{u as I}from"./validation-BVgj33yL.js";import{u as $}from"./useTranslation-DmYadAJT.js";import{L as z}from"./ListItem-JMuM2QWg.js";import{L as H}from"./ListItemText-DK9mL0EC.js";import{D as M}from"./DialogActions-C3EVpxcz.js";import"./TextField-DZ3y-jnl.js";import"./useSlot-wEO3NId2.js";import"./mergeSlotProps-BoOtyqK8.js";import"./App-DISiX59_.js";import"./index-DkYmt4en.js";import"./Portal-Do5yGL6r.js";import"./getReactElementRef-VMyV5Mqg.js";import"./debounce-Be36O1Ab.js";import"./Menu-ZHruDul8.js";import"./index-CZCA_2_Y.js";import"./useSlotProps-Dhskajo4.js";import"./Grow-CYTvBjJz.js";import"./utils-CRTTnyK-.js";import"./Modal-DhqXaecO.js";import"./List-DLUOsgWP.js";import"./ListContext-CHYIJxLB.js";import"./useControlled-BBQUcblh.js";import"./Close-DLxFZGAS.js";import"./DialogAriaLabelContext-CQ46vVQb.js";import"./IconButton-DFOtEdGN.js";import"./useMediaQuery-BrIeDvwW.js";import"./DialogContent-ClRnTqXz.js";import"./listItemTextClasses-CaV-vddy.js";const R=[{id:"man-light",label:"👨🏻"},{id:"man-medium",label:"👨🏽"},{id:"man-dark",label:"👨🏿"},{id:"man-blonde",label:"👱‍♂️"},{id:"woman-light",label:"👩🏻"},{id:"woman-medium",label:"👩🏽"},{id:"woman-dark",label:"👩🏿"},{id:"woman-blonde",label:"👱‍♀️"},{id:"dog",label:"🐶"},{id:"cat",label:"🐱"},{id:"elephant",label:"🐘"},{id:"butterfly",label:"🦋"},{id:"raccoon",label:"🦝"},{id:"mouse",label:"🐭"},{id:"koala",label:"🐨"},{id:"fox",label:"🦊"},{id:"pig",label:"🐷"},{id:"hamster",label:"🐹"},{id:"bear",label:"🐻"},{id:"clown",label:"🤡"},{id:"monkey-see-no-evil",label:"🙈"},{id:"monkey-hear-no-evil",label:"🙉"},{id:"monkey-speak-no-evil",label:"🙊"}],q=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--mui-spacing) * 1.5);
  padding: var(--mui-spacing) 0;
`,K=p.button`
  background: ${({selected:o})=>o?"var(--button-active-background-color)":"transparent"};
  border: 2px solid
    ${({selected:o})=>o?"var(--text-field-active-border-color)":"var(--text-field-default-border-color)"};
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.8rem;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`,O=p.button`
  background: transparent;
  border: 2px solid
    ${({selected:o})=>o?"var(--text-field-active-border-color)":"var(--text-field-default-border-color)"};
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiAvatar-root {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`;function Pe(){const[o]=$(),c=S(),{profileKey:n}=A(),[v,g]=l.useContext(F),r=n?v[n]:void 0,u=!!r,[t,y]=l.useState(r?.name??""),[s,k]=l.useState(r?.footline??""),[i,b]=l.useState(r?.avatarType??"emoji"),[m,w]=l.useState(r?.emoji??"man-medium"),f=()=>c("/profiles"),{error:P,onSubmit:d}=I({name:t,onSubmit:()=>{const a=n??Date.now().toString(36);g(L(a,t,s,i,i==="emoji"?m:void 0)),c("/profiles")},errorMessage:"errors.requiredTeamName"});return e.jsxs(e.Fragment,{children:[e.jsxs(N,{title:o(u?"title.editProfile":"title.createProfile"),onClose:f,children:[e.jsx(h,{label:o("placeholder.profileName"),value:t,onChange:y,onEnter:d,error:P}),e.jsx(h,{label:o("placeholder.profileFootline"),value:s,onChange:k,onEnter:d,sx:{mt:2}}),e.jsx(j,{children:o("text.profileAvatarType")}),e.jsxs(q,{children:[R.map(({id:a,label:C})=>e.jsx(K,{type:"button",selected:i==="emoji"&&m===a,onClick:()=>{b("emoji"),w(a)},children:C},a)),e.jsx(O,{type:"button",selected:i==="initials",onClick:()=>b("initials"),children:e.jsx(T,{children:t?t.charAt(0).toUpperCase():"?"})})]}),e.jsx(j,{children:o("text.preview")}),e.jsx(E,{variant:"outlined",children:e.jsxs(z,{children:[e.jsx(B,{children:e.jsx(D,{avatarType:i,emoji:i==="emoji"?m:void 0,name:t||"?"})}),e.jsx(H,{primary:t||o("placeholder.profileName"),secondary:s||o("placeholder.profileFootline")})]})})]}),e.jsxs(M,{children:[e.jsx(x,{onClick:f,children:o("button.cancel")}),e.jsx(x,{variant:"contained",color:"primary",onClick:d,children:o(u?"button.saveProfile":"button.createProfile")})]})]})}export{Pe as default};
