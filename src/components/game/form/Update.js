import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import noop from 'utils/fn/noop';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';

import StyledNameForm from 'common/styled/NameForm';
import NameField from 'common/NameField';
import GameStoreContext from 'components/game/context/Store';
import useValidation from 'utils/validation';

import GameActionRemove from '../action/Remove';
import { renameGame } from '../actionCreators';

export default function GameFormUpdate({ id, name, onChange = noop, onSuccess = noop, onClose = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const [t] = useTranslation();
  const navigate = useNavigate();

  const { error, onSubmit } = useValidation({
    name,
    errorMessage: 'errors.requiredGameName',
    onSubmit: () => {
      dispatch(renameGame(id, name));
      onSuccess();
    },
  });
  const handleShare = () => navigate(`share/${id}`, { from: '/' });

  return (
    <StyledNameForm component="div">
      <div className="field">
        <NameField label={t('placeholder.game_name')} onChange={onChange} onEnter={onSubmit} error={error} value={name} />
        <Fab color="primary" size="small" aria-label={t('button.rename')} onClick={onSubmit}>
          <Icon>check</Icon>
        </Fab>
      </div>
      <ButtonGroup color="secondary" variant="outlined" size="small">
        <Button startIcon={<Icon>cancel</Icon>} onClick={onClose}>
          {t('button.cancel')}
        </Button>
        <Button startIcon={<Icon>mobile_screen_share</Icon>} onClick={handleShare}>
          {t('button.share')}
        </Button>
        <GameActionRemove id={id} />
      </ButtonGroup>
    </StyledNameForm>
  );
}
