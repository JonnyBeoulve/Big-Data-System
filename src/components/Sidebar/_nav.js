export default {
  items: [
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'Marketing Analysis',
      url: '/admin/dashboard',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Add Keyword',
          url: '/admin/addkeyword',
          icon: 'icon-pie-chart'
        },
        {
          name: 'Analysis Results',
          url: '/admin/marketinganalysis',
          icon: 'icon-pie-chart'
        }
      ]
    },
    {
      name: 'Event Analysis',
      url: '/admin/eventanalysis',
      icon: 'icon-pie-chart',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'Competitor Analysis',
      url: '/admin/competitoranalysis',
      icon: 'icon-chart',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'Reputation Report',
      url: '/admin/reputationreport',
      icon: 'icon-chart',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'My Campaigns',
      url: '/admin/mycampaigns',
      icon: 'icon-layers',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'My Profile',
      url: '/admin/myprofile',
      icon: 'icon-user',
      badge: {
        variant: 'info'
      }
    },
    {
      name: 'Help',
      url: '/admin/help',
      icon: 'icon-question',
      badge: {
        variant: 'info'
      }
    }
  ]
};
