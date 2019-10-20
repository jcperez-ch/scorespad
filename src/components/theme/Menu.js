import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import ThemeContext from './Context'

const ThemeMenu = () => {
  const [el, setEl] = useState(null)
  const [t] = useTranslation()
  const [theme, setTheme] = useContext(ThemeContext)
  const handleOpen = ({ currentTarget }) => setEl(currentTarget)
  const handleClose = () => setEl(null)
  const handleClick = (value) => () => {
    setEl(null)
    setTheme(value)
  }

  const items = [{ id: 'minimal', label: t('skins.minimal') }, { id: 'girlish', label: t('skins.girlish') }, { id: 'dark', label: t('skins.dark') }]
  return (
    <>
      <IconButton color="inherit" aria-owns={el ? 'theme-menu' : undefined} aria-haspopup="true" aria-label="Theme" onClick={handleOpen}>
        <Icon>color_lens</Icon>
      </IconButton>
      <Menu id="theme-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        {items.map(({ id, label }) => (
          <MenuItem key={id} selected={id === theme} onClick={handleClick(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ThemeMenu
