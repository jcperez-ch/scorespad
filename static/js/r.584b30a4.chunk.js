"use strict";(globalThis.webpackChunkscorespad=globalThis.webpackChunkscorespad||[]).push([[255],{7071:(e,n,t)=>{t.r(n),t.d(n,{default:()=>fe});var r=t(2791),o=t(6237),s=t(7689),a=t(2637),i=t(9509),l=t(4180);const c=e=>{let{children:n,fallback:t=null}=e;const{round:r}=(0,s.UO)(),{teams:o}=(0,l.Z)();return o.some((e=>Object.keys(e.rounds).includes(r)))?n:t};var d=t(4518),u=t(225);const m=u.Z.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;

  > button {
    flex: 1 1 100%;
    margin: 0.25rem 0;
  }
`;var x=t(2059);const p=(0,r.createContext)([]);var h=t(8176),Z=t(7462),v=t(3366),j=t(8182),g=t(4419),f=t(3794),y=t(3736),b=t(5527),C=t(5878),S=t(1217);function k(e){return(0,S.Z)("MuiCard",e)}(0,C.Z)("MuiCard",["root"]);var w=t(184);const T=["className","raised"],P=(0,f.ZP)(b.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"}))),R=r.forwardRef((function(e,n){const t=(0,y.Z)({props:e,name:"MuiCard"}),{className:r,raised:o=!1}=t,s=(0,v.Z)(t,T),a=(0,Z.Z)({},t,{raised:o}),i=(e=>{const{classes:n}=e;return(0,g.Z)({root:["root"]},k,n)})(a);return(0,w.jsx)(P,(0,Z.Z)({className:(0,j.Z)(i.root,r),elevation:o?8:void 0,ref:n,ownerState:a},s))}));var N=t(493),$=t(9585);const M=(0,u.Z)($.Z)`
  padding: 0.5rem;

  span {
    font-size: 11px;
  }
`;var I=t(4852),E=t(3659),H=t(1123);const K=(0,u.Z)(H.Z)`
  width: 100%;
  display: flex;
  justify-content: center;
`;K.defaultProps={align:"center",component:"div"};const z=K;var O=t(8592),U=t(3400),F=t(9875),A=t(9900),D=t(4091);const G=(e,n,t)=>({type:"S++",key:e,round:n,scores:t}),B=(e,n,t,r)=>({type:"S-",key:e,round:n,index:t,scoreIndex:r}),_=(0,u.Z)(A.Z)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 5px;
`;function L(e){let{score:n,index:t,scoreIndex:a,onSuccess:i=h.Z,onClose:l=h.Z}=e;const{gameKey:c,round:d}=(0,s.UO)(),[,u]=(0,r.useContext)(x.Z),[m]=(0,o.$)(),[p,Z]=(0,r.useState)(!1),v=()=>Z(!1);return(0,w.jsxs)(_,{component:"div",disableTypography:!0,children:[(0,w.jsx)(U.Z,{color:"primary","aria-label":m("title.removeScore"),"aria-owns":p?"confirm-dialog":void 0,"aria-haspopup":"true",onClick:()=>Z(!0),size:"large",children:(0,w.jsx)(F.Z,{children:"delete_outline"})}),(0,w.jsx)(D.Z,{cancelText:m("button.cancel"),confirmText:m("button.remove"),open:p,title:m("title.removeScore"),subtitle:m("messages.confirmRemoveScore"),onConfirm:()=>{u(B(c,d,t,a)),i(),v()},onClose:v}),(0,w.jsx)(H.Z,{align:"center",variant:"body2",children:n}),(0,w.jsx)(U.Z,{color:"primary",size:"small","aria-label":m("button.cancel"),onClick:l,children:(0,w.jsx)(F.Z,{children:"check"})})]})}function q(e){let{index:n,score:t,scoreIndex:o}=e;const[s,a]=(0,r.useState)(!1),i=()=>a(!1),l=(0,O.Z)({onLongPress:()=>a(!0)});return(0,w.jsxs)(E.Z,{active:s?0:1,children:[(0,w.jsx)(L,{onClose:i,onSuccess:i,scoreIndex:o,score:t,index:n}),(0,w.jsx)(I.ZP,{button:!0,dense:!0,...l,children:(0,w.jsx)(z,{variant:"body2",children:t})})]})}var J=t(1259);const Q=(0,u.Z)(I.ZP)`
  border-top: 1px solid ${J.lB.border};
`;function V(e){let{rounds:n=[],round:t}=e;return(0,w.jsx)(Q,{component:"div",children:(0,w.jsx)(z,{variant:"overline",children:n[t].reduce(((e,n)=>n+e),0)})})}var W=t(9104),X=t(4741);const Y=(0,u.Z)(X.Z)`
  width: 100px;

  input {
    text-align: center;
  }
`;Y.defaultProps={margin:"dense",variant:"outlined",type:"text"};const ee=Y,ne=u.Z.div`
  padding: 16px;
  text-align: center;
`;function te(e){let{index:n,name:t,rounds:o,round:s,onEnter:a}=e;const i=o[s],[l,c]=(0,r.useContext)(p),d=l[n];return(0,w.jsx)("li",{children:(0,w.jsxs)(R,{children:[(0,w.jsx)(M,{title:t,titleTypographyProps:{align:"center"}}),(0,w.jsxs)(ne,{children:[(0,w.jsxs)(N.Z,{component:"div",dense:!0,children:[i.map(((e,t)=>(0,w.jsx)(q,{score:e,index:n,scoreIndex:t},t))),(0,w.jsx)(V,{rounds:o,round:s})]}),(0,w.jsx)(ee,{inputProps:{tabIndex:n+1,pattern:"-?\\d*"},onChange:e=>{let{target:t}=e;c(l.map(((e,r)=>r===n?t.value:e)))},onKeyDown:(0,W.gT)(a,(e=>!!(e.key.length>1||/[0-9]|-|\.|,/.test(e.key))||(e.preventDefault(),!1))),value:d})]})]})})}const re=u.Z.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  padding: 1rem;
`;function oe(e){let{teams:n=[],round:t,onSubmit:r=h.Z}=e;const[s]=(0,o.$)();return 0===n.length?(0,w.jsx)(a.Z,{icon:"people",message:s("text.noTeams")}):(0,w.jsx)(re,{children:n.map(((e,n)=>(0,w.jsx)(te,{index:n,round:t,onEnter:r,...e},e.name)))})}var se=t(5084);function ae(e){let{gameKey:n,round:t,onEnd:s=h.Z}=e;const[a,i]=(0,r.useState)(!1),[l]=(0,o.$)(),[,c]=(0,r.useContext)(x.Z);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(d.Z,{color:"primary",variant:"contained","aria-owns":a?"confirm-end-dialog":void 0,"aria-haspopup":"true",onClick:()=>i(!0),children:l("button.endGame")})}),(0,w.jsx)(D.Z,{open:a,cancelText:l("button.cancel"),confirmText:l("button.endGame"),onClose:()=>i(!1),title:l("button.endGame"),subtitle:l("messages.confirmEndGame"),onConfirm:()=>{c((0,se.Ad)(n,t)),i(!1),s(t)}})]})}function ie(e){let{round:n,onEnd:t}=e;const{gameKey:a}=(0,s.UO)(),{teams:i=[]}=(0,l.Z)(),[,c]=(0,r.useContext)(x.Z),u=Array.from({length:i.length},(()=>"")),h=(0,r.useState)(u),[Z]=(0,o.$)(),v=()=>{const[e,t]=h;e.some((e=>"number"===typeof Number(e)))&&(c(G(a,n,e.map((e=>Number.parseInt(e,10))))),t(u))};return(0,w.jsxs)(p.Provider,{value:h,children:[(0,w.jsx)(oe,{teams:i,round:n,onSubmit:v}),(0,w.jsx)(m,{children:(0,w.jsx)(d.Z,{icon:"plus",color:"primary",variant:"contained",onClick:v,children:Z("button.sum")})}),(0,w.jsx)(ae,{gameKey:a,round:n,onEnd:t})]})}var le=t(692),ce=t(68);function de(e){let{round:n,onSuccess:t=h.Z}=e;const[,a]=(0,r.useContext)(x.Z),{gameKey:i}=(0,s.UO)(),[l]=(0,o.$)(),[c,u]=(0,r.useState)(!1);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.Z,{color:"primary",variant:"contained",startIcon:(0,w.jsx)(F.Z,{children:"delete_outline"}),onClick:()=>u(!0),children:l("button.remove")}),(0,w.jsx)(D.Z,{cancelText:l("button.cancel"),confirmText:l("button.remove"),open:c,title:l("title.removeRound"),subtitle:l("messages.confirmRemoveRound"),onClose:()=>u(!1),onConfirm:()=>{t(),a((0,ce.UB)(i,n))}})]})}const ue=(0,u.Z)(H.Z)`
  && {
    font-size: 2rem;
    text-align: right;
    line-height: 1.2;
  }
`;ue.defaultProps={variant:"overline"};const me=(0,u.Z)(H.Z)`
  && {
    font-size: 0.875rem;
    margin-left: 0.875rem;
  }
`;function xe(e){let{teams:n,round:t,onDelete:r=h.Z}=e;const o=e=>{let{rounds:n}=e;return n[t].reduce(((e,n)=>n+e),0)},s=[...n].sort(((e,n)=>o(n)-o(e)));return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(N.Z,{component:"div",children:s.map((e=>(0,w.jsx)(I.ZP,{children:(0,w.jsxs)(A.Z,{disableTypography:!0,children:[(0,w.jsxs)(le.Z,{display:!0,items:"center",justify:"space-between",children:[(0,w.jsx)(H.Z,{variant:"body1",children:e.name}),(0,w.jsx)(ue,{children:o(e)})]}),(0,w.jsx)(le.Z,{component:"ul",display:!0,items:"center",justify:"flex-end",children:e.rounds[t].map(((e,n)=>(0,w.jsx)("li",{children:(0,w.jsx)(me,{children:e})},n)))})]})},`${e.name}${t}`)))}),(0,w.jsx)(m,{children:(0,w.jsx)(de,{round:t,onSuccess:r})})]})}me.defaultProps={variant:"overline"};var pe=t(4508),he=t(5429),Ze=t(7923),ve=t(5749);function je(){const e=(0,s.s0)();return(0,w.jsxs)(pe.Z,{children:[(0,w.jsx)(U.Z,{color:"inherit",onClick:()=>e(-1),size:"large",children:(0,w.jsx)(F.Z,{children:"arrow_back"})}),(0,w.jsx)(he.Z,{pl:"0.5rem"}),(0,w.jsx)(Ze.Z,{}),(0,w.jsx)(ve.Z,{})]})}var ge=t(1685);function fe(){const{gameKey:e,round:n}=(0,s.UO)(),t=(0,l.Z)(),[r]=(0,o.$)(),d=(0,s.s0)(),u=()=>d(`/games/${e}`),m=t&&t.round===n;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(je,{}),(0,w.jsx)(i.Z,{children:(0,w.jsx)(c,{fallback:(0,w.jsx)(a.Z,{icon:"warning",message:r("text.roundNotFound")}),children:m?(0,w.jsx)(ie,{round:n,onEnd:u}):(0,w.jsx)(xe,{teams:t?t.teams:[],round:n,onDelete:u})})}),(0,w.jsx)(ge.Z,{})]})}},9585:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(3366),o=t(7462),s=t(2791),a=t(8182),i=t(4419),l=t(1123),c=t(3736),d=t(3794),u=t(5878),m=t(1217);function x(e){return(0,m.Z)("MuiCardHeader",e)}const p=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=t(184);const Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,n)=>(0,o.Z)({[`& .${p.title}`]:n.title,[`& .${p.subheader}`]:n.subheader},n.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,n)=>n.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,n)=>n.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,n)=>n.content})({flex:"1 1 auto"}),y=s.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:d,className:u,component:m="div",disableTypography:p=!1,subheader:y,subheaderTypographyProps:b,title:C,titleTypographyProps:S}=t,k=(0,r.Z)(t,Z),w=(0,o.Z)({},t,{component:m,disableTypography:p}),T=(e=>{const{classes:n}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,n)})(w);let P=C;null==P||P.type===l.Z||p||(P=(0,h.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"h5",className:T.title,component:"span",display:"block"},S,{children:P})));let R=y;return null==R||R.type===l.Z||p||(R=(0,h.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},b,{children:R}))),(0,h.jsxs)(v,(0,o.Z)({className:(0,a.Z)(T.root,u),as:m,ref:n,ownerState:w},k,{children:[d&&(0,h.jsx)(j,{className:T.avatar,ownerState:w,children:d}),(0,h.jsxs)(f,{className:T.content,ownerState:w,children:[P,R]}),s&&(0,h.jsx)(g,{className:T.action,ownerState:w,children:s})]}))}))}}]);
//# sourceMappingURL=r.584b30a4.chunk.js.map