import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

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
});

function CommonRoutePaper({ children, ...props }) {
  const { root } = useStyles();
  return <Paper classes={{ root }} role="tabpanel" elevation={5} {...props}>{children}</Paper>;
}

export default CommonRoutePaper;
