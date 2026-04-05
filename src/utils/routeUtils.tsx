import { Route } from 'react-router';

import { Routes } from '@/routes/types';
import { objectInsertIf } from '@/utils/insertIf';

function renderRoutes(routes: Routes) {
  return routes.map(({ path, component: Component, routes: nestedRoutes }) => {
    return (
      <Route
        key={path}
        path={path}
        element={<Component />}
        {...objectInsertIf(nestedRoutes, {
          children: nestedRoutes && renderRoutes(nestedRoutes as Routes),
        })}
      />
    );
  });
}

export { renderRoutes };
