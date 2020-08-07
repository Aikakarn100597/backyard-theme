import React from 'react';


const Dashboard = React.lazy(() => import('./components/Dashboard'));
// Company
const Company = React.lazy(()=> import('./components/company/index'))
const RewardTicket = React.lazy(()=> import('./components/company/manage/RewardTicket'))
const Ready = React.lazy(()=> import('./components/company/manage/Ready'))
const Mention = React.lazy(()=> import('./components/company/manage/Mention'))
const TokenPantip = React.lazy(()=> import('./components/company/manage/TokenPantip'))
const JobQueue = React.lazy(()=> import('./components/company/manage/JobQueue'))
const TriggerCondition = React.lazy(()=> import('./components/company/manage/TriggerCondition'))
const Bida = React.lazy(()=> import('./components/company/manage/Bida'))
const FeedHistory = React.lazy(()=> import('./components/company/manage/FeedHistory'))
const ManualAddLink = React.lazy(()=> import('./components/company/manage/ManualAddLink'))
//User
const ManageUser = React.lazy(() => import('./components/user/ManageUser'))
const UserOnline = React.lazy(() => import('./components/user/UserOnline'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', name: 'Company', component: Company },
  { path: '/company/rewardticket', name: 'Reward Ticket', component: RewardTicket },
  { path: '/company/ready', name: 'Ready', component: Ready },
  { path: '/company/mention', name: 'Mention', component: Mention },
  { path: '/company/tokenpantip', name: 'Token Pantip', component: TokenPantip },
  { path: '/company/jobqueue', name: 'Job Queue', component: JobQueue },
  { path: '/company/triggercondition', name: 'Trigger Condition', component: TriggerCondition },
  { path: '/company/bida', name: 'Bida', component: Bida },
  { path: '/company/feedhistory', name: 'Feed History', component: FeedHistory },
  { path: '/company/manualaddlink', name: 'Manual Add Link', component: ManualAddLink },

  { path: '/user/manage-user', name: 'Manage User', component: ManageUser },
  { path: '/user/user-online', name: 'User Online', component: UserOnline },
];

export default routes;
