import{O as t,a as n,j as e,A as c}from"./chunk-QFMPRPBF-DDhRdzzq.js";import{T as a}from"./App-D32luPdW.js";import{C as m}from"./Close-DlT_PP4e.js";import{D as p}from"./DialogAriaLabelContext-CaFXV15p.js";import{I as x}from"./IconButton-iBWHl1_9.js";import{a as f}from"./useMediaQuery-CCMO0MEM.js";import{D as u}from"./DialogContent-BTC4sGjd.js";const g=t(a)`
  padding: 1rem 0 0.5rem;
  font: var(--mui-font-body2);
`,j=t.h4`
  border-bottom: 1px solid var(--miu-palette-divider);
`,y=t.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`,h=t(a)`
  && {
    margin-left: 0.75rem;
  }
`;function D({children:r,onClose:o},i){const s=n.use(p);return e.jsx(j,{id:s,ref:i,children:e.jsxs(y,{children:[e.jsx(x,{color:"secondary",onClick:o,size:"large",children:e.jsx(m,{})}),e.jsx(h,{children:r})]})})}const v=n.forwardRef(D);function k({children:r,headline:o,onClose:i,title:s}){const l=c(),d=f(l.breakpoints.down("sm"));return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClose:i,children:s}),e.jsxs(u,{dividers:d,children:[e.jsx(n.Activity,{mode:o!=null?"visible":"hidden",children:e.jsx(g,{children:o})}),r]})]})}export{k as D,g as a};
