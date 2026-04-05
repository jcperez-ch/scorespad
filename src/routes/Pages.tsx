import { Routes } from 'react-router';

import Box from '@mui/material/Box';

import { renderRoutes } from '@/utils/routeUtils';

import routes from '.';

function Pages() {
  return (
    <Box
      id="pages-root-container"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Routes>{renderRoutes(routes)}</Routes>
    </Box>
  );
}

export default Pages;
