import { createSvgIcon } from '@mui/material/utils';

const ClassicDominoesIcon = createSvgIcon(
  <g transform="rotate(-45 12 12)">
    {/* Domino body with 3D relief */}
    <rect x="6.5" y="2.5" width="11" height="19" rx="1.2" fill="currentColor" opacity="0.15" />
    <rect x="6" y="2" width="11" height="19" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1" />
    {/* Divider line */}
    <line x1="7.2" y1="11.5" x2="15.8" y2="11.5" stroke="currentColor" strokeWidth="0.5" />
    {/* Top half: 5 dots */}
    <circle cx="9" cy="4.5" r="0.8" fill="currentColor" />
    <circle cx="14" cy="4.5" r="0.8" fill="currentColor" />
    <circle cx="11.5" cy="6.8" r="0.8" fill="currentColor" />
    <circle cx="9" cy="9" r="0.8" fill="currentColor" />
    <circle cx="14" cy="9" r="0.8" fill="currentColor" />
    {/* Bottom half: 2 dots */}
    <circle cx="9.8" cy="14" r="0.8" fill="currentColor" />
    <circle cx="13.2" cy="17.5" r="0.8" fill="currentColor" />
  </g>,
  'ClassicDominoes',
);

export default ClassicDominoesIcon;
