import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { BiCog } from "react-icons/bi";
import { AiFillHeart} from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Sidebar.css';
const routes = [

  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Customer Registration",
    icon: <ManageAccountsIcon />,
    subRoutes: [
      {
        path: "/CustomerRegistration/AddCustomer",
        name: "Add Customer ",
        icon: <FaUser />,
      },
      {
        path: "/CustomerRegistration/CustomerList",
        name: "Customer List",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/LoanProcess",
    name: "Loan Process",
    icon: <CreditScoreIcon />,
     subRoutes: [
      {
        path: "/LoanProcess/LoanApproval",
        name: "Loan Approval ",
        icon: <FaUser />,
      },
      {
        path: "/LoanProcess/LoanApproval",
        name: "Customer List",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/Replegde",
    name: "Replegde",
    icon: <FaUser />,
     subRoutes: [
      {
        path: "/Owner",
        name: "Owner",
        icon: <FaUser />,
      },
      {
        path: "/Replegde/Customer",
        name: "Customer",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/GoldRateUpdate",
    name: "Gold Rate Update",
    icon: <CurrencyRupeeIcon />,
  },
  {
    path: "/PayRoll",
    name: "PayRoll",
    icon: <AccountBalanceIcon />,
    exact: true,
    subRoutes: [
      {
        path: "/Attendance",
        name: "Attendance",
        icon: <FaUser />,
      },
      {
        path: "/PayRoll/Salary",
        name: "Salary",
        icon: <FaLock />,
      },
     ],
  },
  {
    path: "/Acounts",
    name: "Accounts",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/Accounts/Scroll",
        name: "Scroll",
        icon: <FaUser />,    
      },
      {
        path: "/Accounts/DayBook",
        name: "DayBook",
        icon: <FaUser />,
   
      },
      {
        path: "/Accounts/GeneralLedger",
        name: "General Ledger",
        icon: <FaLock />,
      },
      {
        path: "/Accounts/BalanceSheet",
        name: "BalanceSheet",
        icon: <FaUser />,     
      },
      {
        path: "/Accounts/Furniture",
        name: "Furinture",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Accounts/Expense",
        name: "Expense",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Master",
    name: "Master",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/Master/Jeweltype",
        name: "Jewel Type",
        icon: <FaUser />,
     
      },
      {
        path: "/Master/City",
        name: "City",
        icon: <FaUser />,

      },
      {
        path: "/Master/State",
        name: "State",
        icon: <FaLock />,
      },
      {
        path: "/Master/Purity",
        name: "Purity",
        icon: <FaUser />,
      
      },
      {
        path: "/Master/LoanScheme",
        name: "Loan Scheme",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/RelatioType",
        name: "Relation Type",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/IdCard",
        name: "IdCard",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/Company",
        name: "Company",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/Branch",
        name: "Branch",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/Role",
        name: "Role",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Master/Holiday",
        name: "Holiday",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/NotificationMaster",
    name: "Notification Master",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {

        path: "/NotificationMaster/profile",

        name: "Profile ",

        icon: <FaUser />,

      },

      {

        path: "/settings/2fa",

        name: "2FA",

        icon: <FaLock />,

      },

      {

        path: "/settings/billing",

        name: "Billing",

        icon: <FaMoneyBill />,

      },

    ],

  },

  {

    path: "/Report",

    name: "Report",

    icon: <BiCog />,

    exact: true,

    subRoutes: [

      {

        path: "/Report/WarrantyReport",

        name: "Warranty Report",

        icon: <FaUser />,

       

      },

      {

        path: "/Report/StackReport",

        name: "Stack Report",

        icon: <FaUser />,

       

      },

      {

        path: "/Report/GoldLoanReport",

        name: "GoldLoan Report",

        icon: <FaLock />,

      },

      {

        path: "/Report/OutstandingReport",

        name: "Outstanding Report",

        icon: <FaUser />,

      },

      {

        path: "/Report/PaymentReport",

        name: "Payment Report",

        icon: <FaMoneyBill />,

      },

      {

        path: "/Report/PositionReport",

        name: "PositionReport",

        icon: <FaMoneyBill />,

      },

    ]

  },

  {

    path: "/saved",

    name: "Saved",

    icon: <AiFillHeart />,

  },

];




const Sidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);




  const showAnimation = {

    hidden: {

      width: 0,

      opacity: 0,

     

    },

    show: {

      opacity: 1,

      width: "auto",

     

    },

  };




  return (

    <>

      <div className="main-container">

        <motion.div

          animate={{

            width: isOpen ? "200px" : "60px",

            transition: {

              duration: 0.5,

             

             

            },

          }}

          className={`sidebar `}

        >

          <div className="top_section">

            <AnimatePresence>

              {isOpen && (

                <motion.h1

                  variants={showAnimation}

                  initial="hidden"

                  animate="show"

                  exit="hidden"

                  className="logo"

                >

                  SR BANK

                </motion.h1>

              )}

            </AnimatePresence>




            <div className="bars">

              <FaBars onClick={toggle} />

            </div>

          </div>

         

           

          <section className="routes">

            {routes.map((route, index) => {

              if (route.subRoutes) {

                return (

                  <SidebarMenu

                    setIsOpen={setIsOpen}

                    route={route}

                    showAnimation={showAnimation}

                    isOpen={isOpen}

                  />

                );

              }




              return (

                <NavLink

                  to={route.path}

                  key={index}

                  className="link"

                  activeClassName="active"

                >

                  <div className="icon">{route.icon}</div>

                  <AnimatePresence>

                    {isOpen && (

                      <motion.div

                        variants={showAnimation}

                        initial="hidden"

                        animate="show"

                        exit="hidden"

                        className="link_text"

                      >

                        {route.name}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </NavLink>

              );

            })}

          </section>

        </motion.div>

        <main>{children}</main>

      </div>

    </>

  );

};

export default Sidebar;


