export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-home'
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Company',
    to: '/company',
    icon: 'cil-building',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    to: '/user',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage User',
        to: '/user/manage-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'User Online',
        to: '/user/user-online',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Token',
    route: '/token',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Facebook',
        to: '/token/facebook',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Twitter',
        to: '/token/twitter',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Instagram',
        to: '/token/instagram',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Youtube',
        to: '/token/youtube',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Support',
    route: '/support',
    icon: 'cil-description',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Data Feed',
        to: '/support/data-feed',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Data Keyword',
        to: '/support/data-keyword',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Social Media Management',
    route: '/social-media-management',
    icon: 'cil-globe-alt',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Watch',
        to: '/social-media-management/manage-watch',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Media Source',
        to: '/social-media-management/media-source',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Upload File',
    to: '/upload-file',
    icon: 'cil-cloud-upload',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

