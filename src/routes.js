import React from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
// Company
const Company = React.lazy(()=> import('./components/company/index'));
const RewardTicket = React.lazy(()=> import('./components/company/manage/RewardTicket'));
const Ready = React.lazy(()=> import('./components/company/manage/ready/Ready'));
const Mention = React.lazy(()=> import('./components/company/manage/Mentions/Mention'));
const TokenPantip = React.lazy(()=> import('./components/company/manage/TokenPantip'));
const JobQueue = React.lazy(()=> import('./components/company/manage/JobQueue'));
const TriggerCondition = React.lazy(()=> import('./components/company/manage/TriggerCondition'));
const Bida = React.lazy(()=> import('./components/company/manage/Bida'));
const FeedHistory = React.lazy(()=> import('./components/company/manage/FeedHistory'));
const ManualAddLink = React.lazy(()=> import('./components/company/manage/manualAddLink/ManualAddLink'));
const EditForm = React.lazy(()=> import('./components/company/EditCompany'));
//User
const ManageUser = React.lazy(() => import('./components/user/ManageUser'));
const UserOnline = React.lazy(() => import('./components/user/UserOnline'));

const TokenFacebook = React.lazy(() => import('./components/token/TokenFacebook'))
const TokenInstagram = React.lazy(() => import('./components/token/TokenInstagram'))
const TokenTwitter = React.lazy(() => import('./components/token/TokenTwitter'))
const TokenYoutube = React.lazy(() => import('./components/token/TokenYoutube'))

const ManageWatch = React.lazy(() => import('./components/socialMediaManagement/ManageWatch'))
const MediaSource = React.lazy(() => import('./components/socialMediaManagement/MediaSource'))

//Support
const DataFeed = React.lazy(()=> import('./components/support/datafeed/index'));
const DataKeyword = React.lazy(()=>import('./components/support/datakeyword/index'));

const Test = React.lazy(() => import('./components/Test'))
const UploadFile = React.lazy(()=> import('./components/uploadFile/index'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/company', exact: true, name: 'Company', component: Company },
  { path: '/company/rewardticket', exact: true, name: 'Reward Ticket', component: RewardTicket },
  { path: '/company/ready', exact: true, name: 'Ready', component: Ready },
  { path: '/company/mention', exact: true, name: 'Mention', component: Mention },
  { path: '/company/tokenpantip', exact: true, name: 'Token Pantip', component: TokenPantip },
  { path: '/company/jobqueue', exact: true, name: 'Job Queue', component: JobQueue },
  { path: '/company/triggercondition', exact: true, name: 'Trigger Condition', component: TriggerCondition },
  { path: '/company/bida', exact: true, name: 'Bida', component: Bida },
  { path: '/company/feedhistory', exact: true, name: 'Feed History', component: FeedHistory },
  { path: '/company/manualaddlink', exact: true, name: 'Manual Add Link', component: ManualAddLink },
  { path: '/company/editForm/:selectCompony', exact: true, name: 'Edit Form', component: EditForm },

  { path: '/user/manage-user', name: 'Manage User', component: ManageUser },
  { path: '/user/user-online', name: 'User Online', component: UserOnline },

  { path: '/token/facebook', name: 'Facebook', component: TokenFacebook },
  { path: '/token/instagram', name: 'Instagram', component: TokenInstagram },
  { path: '/token/twitter', name: 'Twitter', component: TokenTwitter },
  { path: '/token/youtube', name: 'Youtube', component: TokenYoutube },

  { path: '/support/data-feed',exact: true, name: 'Data Feed', component: DataFeed },
  { path: '/support/data-keyword',exact: true, name: 'Data Keyword', component: DataKeyword },

  { path: '/social-media-management/manage-watch', name: 'Manage Watch', component: ManageWatch },
  { path: '/social-media-management/media-source', name: 'Media Source', component: MediaSource },
  { path: '/test', name: 'Test', component: Test },
  { path: '/upload-file', name: 'Upload File', component: UploadFile },

];

export default routes;
