// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};
const utilities = {
  id: 'utilities',
  title: 'Master',
  type: 'group',
  children: [
    {
      id: 'registration',
      title: 'Customer Registration',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Add Customer',
          type: 'item',
          url: '/utils/util-registration',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'List Customer',
          type: 'item',
        
          url: '/utils/util-list',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'icons',
      title: 'Loan Process',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Loan Approval',
          type: 'item',
          url: '/utils/util-approval',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Repayment',
          type: 'item',
         
          url: '/utils/util-repayment',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'icons',
      title: 'Repledge',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Owner',
          type: 'item',
          url: '/utils/util-owner',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Customer',
          type: 'item',
         
          url: '/utils/util-customer',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'util-gold',
      title: 'Gold Rate Update',
      type: 'item',
      url: '/utils/util-gold',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'PayRoll',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Attendance',
          type: 'item',
          url: '/utils/util-attendance',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Salary',
          type: 'item',
          url: '/utils/util-salary',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'util-color',
      title: 'Accounts',
      type: 'item',
      url: '/utils/util-registration',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Master',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Employee Registration',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Employee Registration',
          type: 'item',
          url: '/utils/util-eregistration',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Employee Details',
          type: 'item',
         
          url: '/utils/util-details',
          breadcrumbs: false
        }
      ]

    },
    {
      id: 'util-shadow',
      title: 'Auction',
      type: 'item',
      url: '/utils/util-auction',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-report',
      title: 'Report',
      type: 'item',
      url: '/utils/util-report',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-feedback',
      title: 'Complaints&feedback',
      type: 'item',
      url: '/utils/util-feedback',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
  ]
};

export default utilities;
