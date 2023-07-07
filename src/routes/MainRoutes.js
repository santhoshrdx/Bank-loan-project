import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsList = Loadable(lazy(() => import('views/utilities/List')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Registration')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const UtilsApproval = Loadable(lazy(() => import('views/utilities/Approval')));
const UtilsRepayment = Loadable(lazy(() => import('views/utilities/Repayment')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const UtilsCustomer= Loadable(lazy(() => import('views/utilities/Customer')));
const UtilsOwner= Loadable(lazy(() => import('views/utilities/Owner')));
const UtilsGold= Loadable(lazy(() => import('views/utilities/Gold')));
const UtilsAttendance= Loadable(lazy(() => import('views/utilities/Attendance')));
const UtilsSalary= Loadable(lazy(() => import('views/utilities/Salary')));
const UtilsAccounts= Loadable(lazy(() => import('views/utilities/Account')));
const UtilsEregistration= Loadable(lazy(() => import('views/utilities/Eregistration')));
const UtilsDetails= Loadable(lazy(() => import('views/utilities/Details')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-list',
          element: <UtilsList />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-Registration',
          element: <UtilsColor />
        }
      ]
    },
   
    {
      path: 'utils',
      children: [
        {
          path: 'util-approval',
          element: <UtilsApproval />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-repayment',
          element: <UtilsRepayment />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-owner',
          element: <UtilsOwner />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-customer',
          element: <UtilsCustomer />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-gold',
          element: <UtilsGold />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-attendance',
          element: <UtilsAttendance />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-salary',
          element: <UtilsSalary/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-accounts',
          element: <UtilsAccounts />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-eregistration',
          element: <UtilsEregistration />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-details',
          element: <UtilsDetails />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
