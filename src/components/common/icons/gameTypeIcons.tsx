import Extension from '@mui/icons-material/Extension';
import Train from '@mui/icons-material/Train';

import { GameType } from '@/store/State';

import CanastaIcon from './CanastaIcon';
import ClassicDominoesIcon from './ClassicDominoesIcon';
import ContinentalIcon from './ContinentalIcon';

const gameTypeIcons: Record<GameType, React.ReactNode> = {
  continental: <ContinentalIcon />,
  canasta: <CanastaIcon />,
  classic_dominoes: <ClassicDominoesIcon />,
  mexican_train: <Train />,
  other: <Extension />,
};

export default gameTypeIcons;
