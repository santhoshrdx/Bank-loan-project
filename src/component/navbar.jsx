import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ReportIcon from '@mui/icons-material/Report';
import ForumIcon from '@mui/icons-material/Forum';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListIcon from '@mui/icons-material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);


  const handleDrawerOpen = (index, link) => {
    setSelectedItem((prevItem) => (prevItem === index ? null : index));
    setOpen(true);
    if (link) {
      window.location.href = link;
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const DropdownList = ({ items }) => (
    <List>
      {items.map((item, index) => (
        <ListItem disablePadding key={item.text} onClick={() => handleDrawerOpen(index, item.link)}>
       <ListItemButton sx={{ justifyContent: 'center', px: 2.5 }}>
         <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
         {item.icon}
         </ListItemIcon>
           <ListItemText primary={item.text} />
        </ListItemButton>
        </ListItem>
        
      ))}
    </List>
  );



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SR Bankers
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Dashboard',
            icon: <GridViewIcon color ="primary" /> 
          },
            {
              text: 'Customer Registration',
              icon: <ManageAccountsIcon color ="primary" /> ,
              dropdown: [
                { text: 'Customer Registration', icon: <ArrowRightIcon color ="primary" /> ,link:'/AddCustomer' },
                { text: 'Customer List', icon: <ArrowRightIcon color ="primary" /> ,link:'/CustomerRegistration'},
              ],
            },
            {
              text: 'Loan Process',
              icon: <MailIcon />,
              dropdown: [
                { text: 'Loan Approval', icon: <ArrowRightIcon color ="primary" /> ,link: '/loan-approval'},
                { text: 'Repayment',icon: <ArrowRightIcon color ="primary" />  ,link: '/loan-repayment'},
              ],
            
            },
            {
              text: 'Repledge',
              icon: <MailIcon />,
              dropdown:[
                { text: 'Owner', icon: <ArrowRightIcon color ="primary" />,link :'/repledge-owner'  },
                { text: 'Customer', icon: <ArrowRightIcon color ="primary" />,link:'/repledge-customer' },
              ]
            },
            { text: 'Gold Rate Updates',  icon: < CurrencyRupeeIcon color ="primary" />,link:'/goldrate' },
            {
              text: 'Payroll',
              icon: <PaymentIcon color ="primary" />,
              dropdown: [
                { text: 'Attendance',icon: <ArrowRightIcon color ="primary" /> ,link:'/payroll-attendance'},
                { text: 'Salary', icon: <ArrowRightIcon color ="primary" /> ,link:'/payroll-salary' },
              ],
            },
            {
              text: 'Accounts',
              icon: <MailIcon />,
              dropdown:  [
                { text: 'Cash Scroll', icon: <ArrowRightIcon color ="primary" />,link:'/cash-scroll' },
                { text: 'Transfer Scroll', icon: <ArrowRightIcon color ="primary" />,link:'/transfer-scroll' },
              ],
            },
            {
              text: 'Master',
              icon: <InboxIcon />,
              dropdown: [
                { text: 'Jewel Type',icon: <ArrowRightIcon color ="primary" />,link:'/jewel-type' },
                { text: 'City', icon: <ArrowRightIcon color ="primary" /> ,link:'/city'},
                { text: 'State', icon: <ArrowRightIcon color ="primary" /> ,link:'/state'},
                { text: 'Purity', icon: <ArrowRightIcon color ="primary" />,link:'/purity'},
                { text: 'Loan Scheme', icon: <ArrowRightIcon color ="primary" />,link:'/loan-scheme'},
                { text: 'Relation Type', icon: <ArrowRightIcon color ="primary" />,link:'/relation-type' },
                { text: 'Id Card', icon: <ArrowRightIcon color ="primary" /> ,link:'/id-card'},
                { text: 'Company', icon: <ArrowRightIcon color ="primary" />,link:'/company' },
                { text: 'Branch', icon: <ArrowRightIcon color ="primary" /> ,link:'/branch'},
                { text: 'Role', icon: <ArrowRightIcon color ="primary" /> ,link:'/role'},
                { text: 'Holiday', icon: <ArrowRightIcon color ="primary" />,link:'/holiday' },
              ],
            },
            {
              text: 'Notification Master',
              icon: <NotificationsIcon color="primary"/>,
              dropdown: [
                { text: 'Notification',icon: <ArrowRightIcon color ="primary" /> ,link:''},
                { text: 'Message', icon: <ArrowRightIcon color ="primary" />,link:'' },
              ],
            },
            {
              text: 'Employee Registration',
              icon: <InboxIcon />,
            
              dropdown: [
                { text: 'Employee Registration', icon: <ArrowRightIcon color ="primary" /> ,link:'/employee-reg'},
                { text: 'Employee Details', icon: <ArrowRightIcon color ="primary" /> ,link:'/employee-details'},
              ],
            },
            {
              text: 'Auctions',
              icon: <MailIcon />,
              dropdown: [
                { text: 'Auctioned Loan', icon: <ArrowRightIcon color ="primary" />,link:'/auctioned-loan' },
                { text: 'Scheduled Loan', icon: <ArrowRightIcon color ="primary" />,link:'/scheduled-loan' },
                { text: 'Auction Active', icon: <ArrowRightIcon color ="primary" />,link:'/auction-active' },
                { text: 'Auction Details', icon: <ArrowRightIcon color ="primary" />,link:'/auction-details' },
              ],
            },
            {
              text: 'Report',
              icon: <ReportIcon color ="primary"/>,
              dropdown: [
                { text: 'Warranty Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/warranty-report'},
          { text: 'Stack Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/stack-report'},
          { text: 'Gold Loan Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/goldloan-report'},
          
          { text: 'Outstanding Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/outstanding-report'},
          { text: 'Payment Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/payment-report' },
          { text: 'Position Report', icon: <ArrowRightIcon color ="primary" /> ,link:'/position-report'},
              ],
            },
            { text: 'Complaints & Feedback', icon: <ForumIcon color ="primary"/> ,link:'/complaints-feedback'},


          ].map((item, index) => (
           

<ListItem
  key={item.text}
  disablePadding
  onClick={() => handleDrawerOpen(index, item.link)}
  sx={{ display: 'block' }}
>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }
              }
           
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              {selectedItem === index && item.dropdown && (
                <DropdownList items={item.dropdown} />
                
              )}
            </ListItem>
          ))}
        </List>
        <Divider />


 
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
      }