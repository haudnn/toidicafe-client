import { Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';

function RoutesConfig() {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}
export default RoutesConfig;