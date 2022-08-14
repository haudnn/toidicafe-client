import Place from '../features/place/pages/Place';
import Search from '../features/search/pages/Search';
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
  {
    path: '/place',
    component: <Place/>,
  },
];

export default routes;