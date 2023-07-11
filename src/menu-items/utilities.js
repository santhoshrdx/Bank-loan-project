// assets
import { IconUserCircle, IconUserPlus, IconList, IconCheckupList, IconChecklist, 
  IconRepeat, IconHandStop, IconChessKing, IconUser, IconMoneybag,
  IconReportMoney, IconUserCheck, IconCurrencyRupee, IconAddressBook,
  IconListDetails, IconHammer, IconMessageReport, IconMessages, IconDatabaseImport} from '@tabler/icons';

// constant
const icons = {
IconUserCircle,
IconUserPlus,
IconList,
IconCheckupList,
IconChecklist,
IconRepeat,
IconHandStop,
IconChessKing,
IconUser,
IconMoneybag,
IconReportMoney,
IconUserCheck,
IconCurrencyRupee,
IconAddressBook,
IconListDetails,
IconHammer,
IconMessageReport,
IconMessages,
IconDatabaseImport
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
icon: icons.IconUserCircle,
children: [
 {
   id: 'tabler-icons',
   title: 'Add Customer',
   type: 'item',
   icon: icons.IconUserPlus,
   url: '/utils/util-registration',
   breadcrumbs: false
 },
 {
   id: 'material-icons',
   title: 'List Customer',
   type: 'item',
   icon: icons.IconList,
   url: '/utils/util-list',
   breadcrumbs: false
 }
]
},
{
id: 'icons',
title: 'Loan Process',
type: 'collapse',
icon: icons.IconCheckupList,
children: [
 {
   id: 'tabler-icons',
   title: 'Loan Approval',
   type: 'item',
   icon: icons.IconChecklist,
   url: '/utils/util-approval',
   breadcrumbs: false
 },
 {
   id: 'material-icons',
   title: 'Repayment',
   type: 'item',
   icon: icons.IconRepeat,
   url: '/utils/util-repayment',
   breadcrumbs: false
 }
]
},
{
id: 'icons',
title: 'Repledge',
type: 'collapse',
icon:icons.IconHandStop,
children: [
 {
   id: 'tabler-icons',
   title: 'Owner',
   type: 'item',
   icon:icons.IconChessKing,
   url: '/utils/util-owner',
   breadcrumbs: false
 },
 {
   id: 'material-icons',
   title: 'Customer',
   type: 'item',
   icon:icons.IconUser,
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
icon: icons.IconMoneybag,
breadcrumbs: false
},
{
id: 'icons',
title: 'PayRoll',
type: 'collapse',
icon: icons.IconReportMoney,
children: [
 {
   id: 'tabler-icons',
   title: 'Attendance',
   type: 'item',
   icon: icons.IconUserCheck,
   url: '/utils/util-attendance',
   breadcrumbs: false
 },
 {
   id: 'material-icons',
   title: 'Salary',
   type: 'item',
   icon: icons.IconCurrencyRupee,
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
icon: icons.IconAddressBook,
breadcrumbs: false
},
{
id: 'util-shadow',
title: 'Master',
type: 'item',
url: '/utils/util-shadow',
icon: icons.IconDatabaseImport,
breadcrumbs: false
},
{
id: 'icons',
title: 'Employee Registration',
type: 'collapse',
icon: icons.IconUserCircle,
children: [
 {
   id: 'tabler-icons',
   title: 'Employee Registration',
   type: 'item',
   icon: icons.IconUserPlus,
   url: '/utils/util-eregistration',
   breadcrumbs: false
 },
 {
   id: 'material-icons',
   title: 'Employee Details',
   type: 'item',
   icon: icons.IconListDetails,
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
icon: icons.IconHammer,
breadcrumbs: false
},
{
id: 'util-report',
title: 'Report',
type: 'item',
url: '/utils/util-report',
icon: icons.IconMessageReport,
breadcrumbs: false
},
{
id: 'util-feedback',
title: 'Complaints & Feedback',
type: 'item',
url: '/utils/util-feedback',
icon: icons.IconMessages,
breadcrumbs: false
},
]
};

export default utilities;