"use strict";(globalThis.webpackChunkscorespad=globalThis.webpackChunkscorespad||[]).push([[255],{664:(e,n,t)=>{t.r(n),t.d(n,{default:()=>he});var r=t(2791),o=t(2020),s=t(7689),a=t(2637),i=t(9509),c=t(4180);const l=e=>{let{children:n,fallback:t=null}=e;const{round:r}=(0,s.UO)(),{teams:o}=(0,c.Z)();return o.some((e=>Object.keys(e.rounds).includes(r)))?n:t};var d=t(6513),u=t(2373);const m=u.ZP.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;

  > button {
    flex: 1 1 100%;
    margin: 0.25rem 0;
  }
`;var x=t(2059);const p=(0,r.createContext)([]);var h=t(8176),Z=t(7462),j=t(5987),v=(t(2007),t(8182)),g=t(9526),y=t(8317),f=r.forwardRef((function(e,n){var t=e.classes,o=e.className,s=e.raised,a=void 0!==s&&s,i=(0,j.Z)(e,["classes","className","raised"]);return r.createElement(g.Z,(0,Z.Z)({className:(0,v.Z)(t.root,o),elevation:a?8:1,ref:n},i))}));const b=(0,y.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(f);var C=t(2067),k=t(6950);const T=(0,u.ZP)(k.Z)`
  padding: 0.5rem;

  span {
    font-size: 11px;
  }
`;var P=t(8096),w=t(3659),S=t(8302);const E=(0,u.ZP)(S.Z).attrs({align:"center",component:"div"})`
  width: 100%;
  display: flex;
  justify-content: center;
`;var N=t(8592),$=t(7025),I=t(9418),K=t(159),R=t(3958);const z=(e,n,t)=>({type:"S++",key:e,round:n,scores:t}),O=(e,n,t,r)=>({type:"S-",key:e,round:n,index:t,scoreIndex:r});var U=t(184);const F=(0,u.ZP)(K.Z)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 5px;
`;function D(e){let{score:n,index:t,scoreIndex:a,onSuccess:i=h.Z,onClose:c=h.Z}=e;const{gameKey:l,round:d}=(0,s.UO)(),[,u]=(0,r.useContext)(x.Z),[m]=(0,o.$)();return(0,U.jsxs)(F,{component:"div",disableTypography:!0,children:[(0,U.jsx)(R.Z,{color:"primary",cancelText:m("button.cancel"),confirmText:m("button.remove"),title:m("title.removeScore"),subtitle:m("messages.confirmRemoveScore"),size:"small",onConfirm:()=>{u(O(l,d,t,a)),i()}}),(0,U.jsx)(S.Z,{align:"center",variant:"body2",children:n}),(0,U.jsx)($.Z,{color:"primary",size:"small","aria-label":m("button.cancel"),onClick:c,children:(0,U.jsx)(I.Z,{children:"check"})})]})}function G(e){let{index:n,score:t,scoreIndex:o}=e;const[s,a]=(0,r.useState)(!1),i=()=>a(!1),c=(0,N.Z)({onLongPress:()=>a(!0)});return(0,U.jsxs)(w.Z,{active:s?0:1,children:[(0,U.jsx)(D,{onClose:i,onSuccess:i,scoreIndex:o,score:t,index:n}),(0,U.jsx)(P.Z,{button:!0,dense:!0,...c,children:(0,U.jsx)(E,{variant:"body2",children:t})})]})}var A=t(6659);const B=(0,u.ZP)(P.Z)`
  border-top: 1px solid ${A.lB.border};
`;function M(e){let{rounds:n=[],round:t}=e;return(0,U.jsx)(B,{component:"div",children:(0,U.jsx)(E,{variant:"overline",children:n[t].reduce(((e,n)=>n+e),0)})})}var H=t(9104),L=t(2115);const _=(0,u.ZP)(L.Z).attrs({margin:"dense",variant:"outlined",type:"text"})`
  width: 100px;

  input {
    text-align: center;
  }
`,q=u.ZP.div`
  padding: 16px;
  text-align: center;
`;function J(e){let{index:n,name:t,rounds:o,round:s,onEnter:a}=e;const i=o[s],[c,l]=(0,r.useContext)(p),d=c[n];return(0,U.jsx)("li",{children:(0,U.jsxs)(b,{children:[(0,U.jsx)(T,{title:t,titleTypographyProps:{align:"center"}}),(0,U.jsxs)(q,{children:[(0,U.jsxs)(C.Z,{component:"div",dense:!0,children:[i.map(((e,t)=>(0,U.jsx)(G,{score:e,index:n,scoreIndex:t},t))),(0,U.jsx)(M,{rounds:o,round:s})]}),(0,U.jsx)(_,{inputProps:{tabIndex:n+1,pattern:"-?\\d*"},onChange:e=>{let{target:t}=e;l(c.map(((e,r)=>r===n?t.value:e)))},onKeyDown:(0,H.gT)(a,(e=>!!(e.key.length>1||/[0-9]|-|\.|,/.test(e.key))||(e.preventDefault(),!1))),value:d})]})]})})}const Q=u.ZP.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  padding: 1rem;
`;function V(e){let{teams:n=[],round:t,onSubmit:r=h.Z}=e;const[s]=(0,o.$)();return 0===n.length?(0,U.jsx)(a.Z,{icon:"people",message:s("text.noTeams")}):(0,U.jsx)(Q,{children:n.map(((e,n)=>(0,U.jsx)(J,{index:n,round:t,onEnter:r,...e},e.name)))})}var W=t(5939),X=t(2404),Y=t(2334),ee=t(5084);function ne(e){let{gameKey:n,round:t,onEnd:s=h.Z}=e;const[a,i]=(0,r.useState)(!1),[c]=(0,o.$)(),[,l]=(0,r.useContext)(x.Z),u=()=>i(!a);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(m,{children:(0,U.jsx)(d.Z,{color:"primary",variant:"contained","aria-owns":a?"confirm-end-dialog":void 0,"aria-haspopup":"true",onClick:u,children:c("button.endGame")})}),(0,U.jsx)(W.Z,{id:"confirm-end-dialog","aria-labelledby":"confirm-end-title","aria-describedby":"confirm-end-description",open:a,onClose:u,children:(0,U.jsxs)(Y.Z,{children:[(0,U.jsx)(S.Z,{variant:"h6",id:"confirm-end-title",children:c("button.endGame")}),(0,U.jsx)(S.Z,{variant:"subtitle1",id:"confirm-end-description",children:c("messages.confirmEndGame")}),(0,U.jsxs)(X.Z,{children:[(0,U.jsx)(d.Z,{onClick:u,children:c("button.cancel")}),(0,U.jsx)(d.Z,{color:"primary",variant:"contained",autoFocus:!0,onClick:()=>{l((0,ee.Ad)(n,t)),i(!1),s(t)},children:c("button.endGame")})]})]})})]})}function te(e){let{round:n,onEnd:t}=e;const{gameKey:a}=(0,s.UO)(),{teams:i=[]}=(0,c.Z)(),[,l]=(0,r.useContext)(x.Z),u=Array.from({length:i.length},(()=>"")),h=(0,r.useState)(u),[Z]=(0,o.$)(),j=()=>{const[e,t]=h;e.some((e=>"number"===typeof Number(e)))&&(l(z(a,n,e.map((e=>Number.parseInt(e,10))))),t(u))};return(0,U.jsxs)(p.Provider,{value:h,children:[(0,U.jsx)(V,{teams:i,round:n,onSubmit:j}),(0,U.jsx)(m,{children:(0,U.jsx)(d.Z,{icon:"plus",color:"primary",variant:"contained",onClick:j,children:Z("button.sum")})}),(0,U.jsx)(ne,{gameKey:a,round:n,onEnd:t})]})}var re=t(692),oe=t(68);function se(e){let{round:n,onSuccess:t=h.Z}=e;const[,a]=(0,r.useContext)(x.Z),{gameKey:i}=(0,s.UO)(),[c]=(0,o.$)();return(0,U.jsx)(R.Z,{cancelText:c("button.cancel"),confirmText:c("button.remove"),title:c("title.removeTeam"),subtitle:c("messages.confirmRemoveRound"),color:"primary",fab:!0,size:"small",variant:"contained",onConfirm:()=>{t(),a((0,oe.UB)(i,n))}})}const ae=(0,u.ZP)(S.Z).attrs({variant:"overline"})`
  && {
    font-size: 2rem;
    text-align: right;
    line-height: 1.2;
  }
`,ie=(0,u.ZP)(S.Z).attrs({variant:"overline"})`
  && {
    font-size: 0.875rem;
    margin-left: 0.875rem;
  }
`;function ce(e){let{teams:n,round:t,onDelete:r=h.Z}=e;const o=e=>{let{rounds:n}=e;return n[t].reduce(((e,n)=>n+e),0)},s=[...n].sort(((e,n)=>o(n)-o(e)));return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C.Z,{component:"div",children:s.map((e=>(0,U.jsx)(P.Z,{children:(0,U.jsxs)(K.Z,{disableTypography:!0,children:[(0,U.jsxs)(re.Z,{display:!0,items:"center",justify:"space-between",children:[(0,U.jsx)(S.Z,{variant:"body1",children:e.name}),(0,U.jsx)(ae,{children:o(e)})]}),(0,U.jsx)(re.Z,{component:"ul",display:!0,items:"center",justify:"flex-end",children:e.rounds[t].map(((e,n)=>(0,U.jsx)("li",{children:(0,U.jsx)(ie,{children:e})},n)))})]})},`${e.name}${t}`)))}),(0,U.jsx)(m,{children:(0,U.jsx)(se,{round:t,onSuccess:r})})]})}var le=t(4508),de=t(5429),ue=t(7923),me=t(5749);function xe(){const e=(0,s.s0)();return(0,U.jsxs)(le.Z,{children:[(0,U.jsx)($.Z,{color:"inherit",onClick:()=>e(-1),children:(0,U.jsx)(I.Z,{children:"arrow_back"})}),(0,U.jsx)(de.Z,{pl:"0.5rem"}),(0,U.jsx)(ue.Z,{}),(0,U.jsx)(me.Z,{})]})}var pe=t(1685);function he(){const{gameKey:e,round:n}=(0,s.UO)(),t=(0,c.Z)(),[r]=(0,o.$)(),d=(0,s.s0)(),u=()=>d(`/games/${e}`),m=t&&t.round===n;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(xe,{}),(0,U.jsx)(i.Z,{children:(0,U.jsx)(l,{fallback:(0,U.jsx)(a.Z,{icon:"warning",message:r("text.roundNotFound")}),children:m?(0,U.jsx)(te,{round:n,onEnd:u}):(0,U.jsx)(ce,{teams:t?t.teams:[],round:n,onDelete:u})})}),(0,U.jsx)(pe.Z,{})]})}},6950:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),o=t(5987),s=t(2791),a=(t(2007),t(8182)),i=t(8317),c=t(8302),l=s.forwardRef((function(e,n){var t=e.action,i=e.avatar,l=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,x=e.disableTypography,p=void 0!==x&&x,h=e.subheader,Z=e.subheaderTypographyProps,j=e.title,v=e.titleTypographyProps,g=(0,o.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=j;null==y||y.type===c.Z||p||(y=s.createElement(c.Z,(0,r.Z)({variant:i?"body2":"h5",className:l.title,component:"span",display:"block"},v),y));var f=h;return null==f||f.type===c.Z||p||(f=s.createElement(c.Z,(0,r.Z)({variant:i?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},Z),f)),s.createElement(m,(0,r.Z)({className:(0,a.Z)(l.root,d),ref:n},g),i&&s.createElement("div",{className:l.avatar},i),s.createElement("div",{className:l.content},y,f),t&&s.createElement("div",{className:l.action},t))}));const d=(0,i.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)}}]);
//# sourceMappingURL=r.df634ec5.chunk.js.map