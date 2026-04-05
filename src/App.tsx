import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import Layout from '@/components/common/Layout';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import withErrorHandler from '@/error-handling/withErrorHandler';
import Pages from '@/routes/Pages';

const AppWithErrorHandler = withErrorHandler(function App() {
  return (
    <Layout>
      <CssBaseline />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Layout>
  );
}, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
