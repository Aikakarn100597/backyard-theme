import React from 'react';


const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Company = React.lazy(()=> import('./components/company/index'))
const ManageUser = React.lazy(() => import('./components/user/ManageUser'))
const UserOnline = React.lazy(() => import('./components/user/UserOnline'))

const TokenFacebook = React.lazy(() => import('./components/token/TokenFacebook'))
const TokenInstagram = React.lazy(() => import('./components/token/TokenInstagram'))
const TokenTwitter = React.lazy(() => import('./components/token/TokenTwitter'))
const TokenYoutube = React.lazy(() => import('./components/token/TokenYoutube'))

const ManageWatch = React.lazy(() => import('./components/socialMediaManagement/ManageWatch'))
const MediaSource = React.lazy(() => import('./components/socialMediaManagement/MediaSource'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', name: 'Company', component: Company },
  { path: '/user/manage-user', name: 'Manage User', component: ManageUser },
  { path: '/user/user-online', name: 'User Online', component: UserOnline },
  { path: '/token/facebook', name: 'Facebook', component: TokenFacebook },
  { path: '/token/instagram', name: 'Instagram', component: TokenInstagram },
  { path: '/token/twitter', name: 'Twitter', component: TokenTwitter },
  { path: '/token/youtube', name: 'Youtube', component: TokenYoutube },
  { path: '/social-media-management/manage-watch', name: 'Manage Watch', component: ManageWatch },
  { path: '/social-media-management/media-source', name: 'Media Source', component: MediaSource },
];

export default routes;
