import{N as t,a as n,j as e,z as c}from"./chunk-QFMPRPBF-C_FclEzk.js";import{T as a}from"./App-DfzVumnm.js";import{C as m}from"./Close-C0Cs4F1p.js";import{D as p}from"./DialogAriaLabelContext-hRQ0KiSe.js";import{I as x}from"./IconButton-S6VcKo87.js";import{a as f}from"./useMediaQuery-CDdI6CQ6.js";import{D as u}from"./DialogContent-BBEJHOP-.js";const g=t(a)`
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
`;function D({children:r,onClose:o},i){const s=n.use(p);return e.jsx(j,{id:s,ref:i,children:e.jsxs(y,{children:[e.jsx(x,{color:"secondary",onClick:o,size:"large",children:e.jsx(m,{})}),e.jsx(h,{children:r})]})})}const v=n.forwardRef(D);function z({children:r,headline:o,onClose:i,title:s}){const l=c(),d=f(l.breakpoints.down("sm"));return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClose:i,children:s}),e.jsxs(u,{dividers:d,children:[e.jsx(n.Activity,{mode:o!=null?"visible":"hidden",children:e.jsx(g,{children:o})}),r]})]})}export{z as D,g as a};
