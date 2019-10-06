import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flex: '1 1 100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0',
    padding: '1.5rem',
  },
})

const CommonRoutePaper = ({ children, ...props }) => {
  const { root } = useStyles()
  return <Paper classes={{ root }} role="tabpanel" elevation={5} {...props}>{children}</Paper>
}

export default CommonRoutePaper
