import{W as S,a0 as A,a as l,j as e,P as E,B as x,H as p}from"./chunk-QFMPRPBF-CZJ-HrMl.js";import{N as h}from"./NameField-D1jHEDPd.js";import{D as N,a as j}from"./DialogBody-BlZPJVT9.js";import{A as T,L as B,a as D,P as F}from"./ProfileAvatar-DbrpiIbD.js";import{P as L}from"./ProfilesContext-CRn7-iud.js";import{c as I}from"./ProfileActions-C6UakniL.js";import{u as $}from"./validation-CHVchdWa.js";import{u as z}from"./useTranslation-CVdUXDBs.js";import{L as H}from"./ListItemText-BmPGfDf8.js";import{D as M}from"./DialogActions-C3EVpxcz.js";import"./TextField-Bz1T0XX6.js";import"./useSlot-wEO3NId2.js";import"./mergeSlotProps-BoOtyqK8.js";import"./App-DuuiYCEN.js";import"./index-Bu95G_gc.js";import"./Portal-Do5yGL6r.js";import"./getReactElementRef-VMyV5Mqg.js";import"./debounce-Be36O1Ab.js";import"./Menu-DOpkHH24.js";import"./index-CZCA_2_Y.js";import"./useSlotProps-Dhskajo4.js";import"./Grow-CYTvBjJz.js";import"./utils-CRTTnyK-.js";import"./Modal-DKIjIoYQ.js";import"./List-DLUOsgWP.js";import"./ListContext-CHYIJxLB.js";import"./useControlled-BBQUcblh.js";import"./isMuiElement-BNbi0OLO.js";import"./Close-DLxFZGAS.js";import"./DialogAriaLabelContext-CQ46vVQb.js";import"./IconButton-DFOtEdGN.js";import"./useMediaQuery-BrIeDvwW.js";import"./DialogContent-ClRnTqXz.js";import"./listItemTextClasses-CaV-vddy.js";const R=[{id:"man-light",label:"👨🏻"},{id:"man-medium",label:"👨🏽"},{id:"man-dark",label:"👨🏿"},{id:"man-blonde",label:"👱‍♂️"},{id:"woman-light",label:"👩🏻"},{id:"woman-medium",label:"👩🏽"},{id:"woman-dark",label:"👩🏿"},{id:"woman-blonde",label:"👱‍♀️"},{id:"dog",label:"🐶"},{id:"cat",label:"🐱"},{id:"elephant",label:"🐘"},{id:"butterfly",label:"🦋"},{id:"raccoon",label:"🦝"},{id:"mouse",label:"🐭"},{id:"koala",label:"🐨"},{id:"fox",label:"🦊"},{id:"pig",label:"🐷"},{id:"hamster",label:"🐹"},{id:"bear",label:"🐻"},{id:"clown",label:"🤡"},{id:"monkey-see-no-evil",label:"🙈"},{id:"monkey-hear-no-evil",label:"🙉"},{id:"monkey-speak-no-evil",label:"🙊"}],q=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--mui-spacing) * 1.5);
  padding: var(--mui-spacing) 0;
`,K=p.button`
  background: ${({selected:t})=>t?"var(--button-active-background-color)":"transparent"};
  border: 2px solid
    ${({selected:t})=>t?"var(--text-field-active-border-color)":"var(--text-field-default-border-color)"};
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
    ${({selected:t})=>t?"var(--text-field-active-border-color)":"var(--text-field-default-border-color)"};
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
`;function Pe(){const[t]=z(),c=S(),{profileKey:n}=A(),[v,g]=l.useContext(L),a=n?v[n]:void 0,u=!!a,[o,y]=l.useState(a?.name??""),[s,k]=l.useState(a?.footline??""),[i,b]=l.useState(a?.avatarType??"emoji"),[m,w]=l.useState(a?.emoji??"man-medium"),f=()=>c("/profiles"),{error:P,onSubmit:d}=$({name:o,onSubmit:()=>{const r=n??Date.now().toString(36);g(I(r,o,s,i,i==="emoji"?m:void 0)),c("/profiles")},errorMessage:"errors.requiredTeamName"});return e.jsxs(e.Fragment,{children:[e.jsxs(N,{title:t(u?"title.editProfile":"title.createProfile"),onClose:f,children:[e.jsx(h,{label:t("placeholder.profileName"),value:o,onChange:y,onEnter:d,error:P}),e.jsx(h,{label:t("placeholder.profileFootline"),value:s,onChange:k,onEnter:d,sx:{mt:2}}),e.jsx(j,{children:t("text.profileAvatarType")}),e.jsxs(q,{children:[R.map(({id:r,label:C})=>e.jsx(K,{type:"button",selected:i==="emoji"&&m===r,onClick:()=>{b("emoji"),w(r)},children:C},r)),e.jsx(O,{type:"button",selected:i==="initials",onClick:()=>b("initials"),children:e.jsx(T,{children:o?o.charAt(0).toUpperCase():"?"})})]}),e.jsx(j,{children:t("text.preview")}),e.jsx(E,{variant:"outlined",children:e.jsxs(B,{children:[e.jsx(D,{children:e.jsx(F,{avatarType:i,emoji:i==="emoji"?m:void 0,name:o||"?"})}),e.jsx(H,{primary:o||t("placeholder.profileName"),secondary:s||t("placeholder.profileFootline")})]})})]}),e.jsxs(M,{children:[e.jsx(x,{onClick:f,children:t("button.cancel")}),e.jsx(x,{variant:"contained",color:"primary",onClick:d,children:t(u?"button.saveProfile":"button.createProfile")})]})]})}export{Pe as default};
