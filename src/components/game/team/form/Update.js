import noop from 'utils/fn/noop';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Icon from '@mui/material/Icon';

import StyledNameForm from 'common/styled/NameForm';
import StyledFab from 'common/styled/StyledFab';
import NameField from 'common/NameField';
import GameStoreContext from 'components/game/context/Store';
import useValidation from 'utils/validation';

import TeamActionRemove from '../action/Remove';
import { renameTeam } from '../actionCreators';

function TeamFormUpdate({ index, name, onChange = noop, onSuccess = noop, onClose = noop }) {
  const [, dispatch] = useContext(GameStoreContext);
  const { gameKey } = useParams();
  const [t] = useTranslation();
  const { error, onSubmit } = useValidation({
    name,
    errorMessage: 'errors.requiredTeamName',
    onSubmit: () => {
      dispatch(renameTeam(gameKey, index, name));
      onSuccess();
    },
  });

  return (
    <StyledNameForm>
      <div className="field">
        <NameField label={t('placeholder.teamName')} onChange={onChange} onEnter={onSubmit} error={error} value={name} />
        <StyledFab color="primary" size="small" aria-label={t('button.rename')} onClick={onSubmit}>
          <Icon>check</Icon>
        </StyledFab>
      </div>
      <ButtonGroup color="secondary" variant="outlined" size="small">
        <Button startIcon={<Icon>cancel</Icon>} onClick={onClose}>
          {t('button.cancel')}
        </Button>
        <TeamActionRemove name={name} index={index} />
      </ButtonGroup>
    </StyledNameForm>
  );
}

export default TeamFormUpdate;
