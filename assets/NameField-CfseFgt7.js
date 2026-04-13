import{j as a,H as f}from"./chunk-QFMPRPBF-CZJ-HrMl.js";import{T as u}from"./TextField-DwCrvRei.js";const c=f(u)`
  & label.Mui-focused {
    color: var(--text-field-default-border-color);
  }
  input {
    color: var(--text-field-default-border-color);
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: var(--text-field-default-border-color);
    }
    &:hover fieldset {
      border-color: var(--text-field-active-border-color);
    }
    &.Mui-focused fieldset {
      border-color: var(--text-field-active-border-color);
    }
  }
`;function x({error:o,helperText:r,onChange:t,onEnter:l,...d}){return a.jsx(c,{...d,autoComplete:"off",error:o!=null,fullWidth:!0,helperText:r??o,onChange:e=>{e.preventDefault();const{value:i}=e.target;t?.(i)},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),l?.(e))}})}export{x as N};
