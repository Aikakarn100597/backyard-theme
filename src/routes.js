import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Company = React.lazy(()=> import('./components/company/index'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', name: 'Company', component: Company }
];

export default routes;
