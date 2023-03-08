import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch';
import useLongRipple from 'common/useLongRipple';
import CommaList from 'common/CommaList';
import useSnackbar from 'common/useSnackbar';
import GameStoreContext from 'components/game/context/Store';
import GameFormUpdate from 'components/game/form/Update';
import { renameGame } from 'components/game/actionCreators';

export default function GameListItem({ onClick, id, name, teams }) {
  const [, dispatch] = useContext(GameStoreContext);
  const initialName = useRef(name);
  const [newName, setNewName] = useState(null);
  const [t] = useTranslation();
  const { snackbar: gameUpdatedSnackbar, onShow: onShowSnackbar } = useSnackbar({
    onUndo: useCallback(() => {
      dispatch(renameGame(id, initialName.current));
    }, [id]),
  });
  useEffect(
    () => () => {
      initialName.current = name;
    },
    [name],
  );
  const handleEditMode = () => setNewName(name);
  const handleViewMode = () => setNewName(null);
  const handleUpdated = () => {
    setNewName(null);
    onShowSnackbar(t('messages.gameRenamed'));
  };
  const handleClick = () => onClick(id);
  const createdAt = new Date(parseInt(id, 36));
  const rippleProps = useLongRipple({ onLongPress: handleEditMode, onClick: handleClick });

  return (
    <SlideLongRippleSwitch active={newName === null ? 1 : 0}>
      <GameFormUpdate id={id} name={newName || ''} onChange={setNewName} onClose={handleViewMode} onSuccess={handleUpdated} />
      {gameUpdatedSnackbar}
      <ListItem button {...rippleProps}>
        <ListItemText
          disableTypography
          secondary={
            <>
              <Typography variant="body2">{t('messages.createdAt', { date: createdAt.toDateString() })}</Typography>
              {teams.length > 0 && (
                <Typography variant="overline">
                  <CommaList items={teams} keyedBy="name" attribute="name" />
                </Typography>
              )}
            </>
          }
        >
          <Typography variant="body1">{name}</Typography>
        </ListItemText>
      </ListItem>
    </SlideLongRippleSwitch>
  );
}
