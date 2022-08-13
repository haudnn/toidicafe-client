import Search from '../features/Search/pages/Search';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/search',
    component: <Search/>,
  },
];

export default routes;