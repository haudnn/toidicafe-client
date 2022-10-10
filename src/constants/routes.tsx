import Explore from '../features/explore/pages/Explore';
import Photo from '../features/place/pages/Photo';
import Place from '../features/place/pages/Place';
import Profile from '../features/profile/page/Profile';
import Save from '../features/save/pages/Save';
import Search from '../features/search/pages/Search';
import Home from '../features/home/pages/Home';
import Review from '../features/review/pages/Review';


const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/search',
    component: <Search />,
  },
  {
    path: '/place/:slug',
    component: <Place />,
  },
  {
    path: '/place/:slug/photo',
    component: <Photo />,
  },
  {
    path: '/explore',
    component: <Explore />,
  },
  {
    path: '/save',
    component: <Save />,
  },
  {
    path: '/profile/:username',
    component: <Profile />,
  },
  {
    path: '/review',
    component: <Review />,
  },
];

export default routes;
