import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Company = React.lazy(()=> import('./components/company/index'))
const ManageUser = React.lazy(() => import('./components/user/ManageUser'))
const UserOnline = React.lazy(() => import('./components/user/UserOnline'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', name: 'Company', component: Company },
  { path: '/user/manage-user', name: 'Manage User', component: ManageUser },
  { path: '/user/user-online', name: 'User Online', component: UserOnline },
];

export default routes;
