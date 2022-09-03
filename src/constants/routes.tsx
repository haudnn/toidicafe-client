import Explore from '../features/explore/pages/Explore';
import Place from '../features/place/pages/Place';
import Profile from '../features/profile/page/Profile';
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
  {
    path: '/explore',
    component: <Explore/>,
  },
  {
    path: '/profile/:username',
    component: <Profile/>,
  },
];

export default routes;