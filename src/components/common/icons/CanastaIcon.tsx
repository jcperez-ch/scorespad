import { createSvgIcon } from '@mui/material/utils';

const CanastaIcon = createSvgIcon(
  <>
    <defs>
      <mask id="canasta-heart-mask">
        <rect width="24" height="24" fill="white" />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fontSize="7"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="black"
        >
          7
        </text>
      </mask>
    </defs>
    <rect
      x="1.2"
      y="0.86"
      width="21.6"
      height="22.29"
      rx="1.37"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <path
      d="M12 8.5c0-2.2-5.2-2.2-5.2 1.1 0 3.3 5.2 7.4 5.2 7.4s5.2-4.1 5.2-7.4c0-3.3-5.2-3.3-5.2-1.1z"
      fill="currentColor"
      mask="url(#canasta-heart-mask)"
    />
    <circle cx="4.5" cy="4" r="1" fill="currentColor" />
    <circle cx="19.5" cy="20" r="1" fill="currentColor" />
  </>,
  'Canasta',
);

export default CanastaIcon;
