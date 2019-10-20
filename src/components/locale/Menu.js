import React, { useState, useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import LocaleContext from 'components/locale/Context'

const LocaleMenu = () => {
  const [el, setEl] = useState(null)
  const [locale, setLocale] = useContext(LocaleContext)
  const handleOpen = ({ currentTarget }) => setEl(currentTarget)
  const handleClose = () => setEl(null)
  const handleClick = (value) => () => {
    setEl(null)
    setLocale(value)
  }
  const items = [
    { id: 'es', label: 'Español' },
    { id: 'en', label: 'English' },
    { id: 'fr', label: 'Français' },
  ]
  return (
    <>
      <IconButton
        color="inherit"
        aria-owns={el ? 'locale-menu' : undefined}
        aria-haspopup="true"
        aria-label="Locale"
        onClick={handleOpen}
      >
        <Icon>g_translate</Icon>
      </IconButton>
      <Menu
        id="locale-menu"
        anchorEl={el}
        open={Boolean(el)}
        onClose={handleClose}
      >
        {items.map(({ id, label }) => (
          <MenuItem key={id} selected={id === locale} onClick={handleClick(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LocaleMenu
