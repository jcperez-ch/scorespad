import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import SlideLongRippleSwitch from 'common/SlideLongRippleSwitch'
import useLongRipple from 'common/useLongRipple'
import CommaList from 'common/CommaList'

import GameFormUpdate from '../form/Update'

export default ({ onClick, id, name, teams }) => {
  const [newName, setNewName] = useState(null)
  const [t] = useTranslation()
  const handleEditMode = () => setNewName(name)
  const handleViewMode = () => setNewName(null)
  const handleClick = () => onClick(id)
  const createdAt = new Date(parseInt(id, 36))
  const rippleProps = useLongRipple({ onLongPress: handleEditMode, onClick: handleClick })

  return (
    <SlideLongRippleSwitch active={newName === null ? 1 : 0}>
      <GameFormUpdate
        id={id}
        name={newName || ''}
        onChange={setNewName}
        onClose={handleViewMode}
        onSuccess={handleViewMode}
      />
      <ListItem button {...rippleProps}>
        <ListItemText
          disableTypography
          secondary={(
            <>
              <Typography variant="body2">
                {t('messages.createdAt', { date: createdAt.toDateString() })}
              </Typography>
              {teams.length > 0 && (
                <Typography variant="overline">
                  <CommaList items={teams} keyedBy="name" attribute="name" />
                </Typography>
              )}
            </>
          )}
        >
          <Typography variant="body1">{name}</Typography>
        </ListItemText>
      </ListItem>
    </SlideLongRippleSwitch>
  )
}
