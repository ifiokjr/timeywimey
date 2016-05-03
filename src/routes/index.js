// We only need to import the modules necessary for the initial render
// import CoreLayout from '../layouts/CoreLayout/CoreLayout';
// import Home from './Home';
// import CounterRoute from './Counter';

/* Note: Instead of using JSX, it is recommended to use react-router
   PlainRoute objects to build route definitions.       */

export const createRoutes = (store) => ({
  path: '/',
  component: null,
  indexRoute: null,
  childRoutes: [

  ]
});


export default createRoutes;
