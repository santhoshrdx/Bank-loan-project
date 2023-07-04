import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BsPeople } from 'react-icons/bs';
import { TfiHome } from 'react-icons/tfi';
import { TbMoneybag } from 'react-icons/tb';
import { IoIosArrowForward, IoIosNotificationsOutline, IoMdPersonAdd } from 'react-icons/io';
import { FaRegHandPaper } from 'react-icons/fa';
import { AiOutlineGold,AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlinePayments, MdManageAccounts, MdAdsClick } from 'react-icons/md';
import { RiAuctionLine } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { VscFeedback } from 'react-icons/vsc';
import './Sidebar.css';

export default function Side() {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

    return (
     
        <div style={{ display: 'flex', height: '100%' }}>
          
       <Sidebar style={{ backgroundColor: '#ffffff'}}
        className={`side-bar ${isCollapsed ? 'collapsed' : ''}`}
        width={isCollapsed ? '80px' : '300px'}
      >
        <div className='collapse-button' onClick={handleCollapse}>
        <AiOutlineDoubleRight/>
        </div>
      <Menu transitionDuration={200}>
       
      <MenuItem component={<Link to="/" />} icon={< TfiHome  className="sidebar-icon"/>}  >DashBoard</MenuItem>

      <SubMenu  icon={<BsPeople  className="sidebar-icon"/>} label=" Customer Registration"> 
      <MenuItem component={<Link to="/AddCustomer" />} icon={< IoIosArrowForward/>}> Add Customer</MenuItem>
      <MenuItem component={<Link to="/CustomerList" />} icon={< IoIosArrowForward/>}>CustomerList</MenuItem>
      
      </SubMenu>
    
     <SubMenu  label="Loan Process" icon={<  TbMoneybag  className="sidebar-icon"/>} >
     <MenuItem component={<Link to="/LoanProcess" />}icon={< IoIosArrowForward/>}> Loan Approval</MenuItem>
      <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Repayment</MenuItem>   
     </SubMenu>

     <SubMenu label="Repledge" icon={< FaRegHandPaper  className="sidebar-icon"/>} >
     <MenuItem component={<Link to="/Owner" />}icon={< IoIosArrowForward/>}> Owner</MenuItem>
     <MenuItem component={<Link to="/Repledge_Customer" />}icon={< IoIosArrowForward/>}> Customer</MenuItem>    
     </SubMenu>

     <MenuItem component={<Link to="/GoldRateUpdate"/>} icon={<  AiOutlineGold  className="sidebar-icon"/>}> Gold Rate Update</MenuItem>

      <SubMenu label="PayRoll"icon={< MdOutlinePayments  className="sidebar-icon" />} >
      <MenuItem component={<Link to="/Attendance" />}icon={< IoIosArrowForward/>}>Attendance</MenuItem>
      <MenuItem component={<Link to="/Salary" />} icon={< IoIosArrowForward/>}> Salary</MenuItem>
      </SubMenu>
      <SubMenu label="Accounts" icon={< MdManageAccounts  className="sidebar-icon"/>}>
          <SubMenu label="Scroll">
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Cash Scroll</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Transfer Scroll</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Day Book</MenuItem>
          </SubMenu>
          <SubMenu label="General Ledger">
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}>Capital Account</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Profit & Loss Account</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Cash on Hand</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}>Jewel Loan</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}>Interest Received on Jewel</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Suspence</MenuItem>
          </SubMenu>
        
        <SubMenu label="Furniture">
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Furniture Report</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Metal Furniture</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Wooden Furniture</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}>Electrical Installation</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}>Computer</MenuItem>
          <MenuItem component={<Link to="/" />} icon={< IoIosArrowForward/>}> Bank Account</MenuItem>
          </SubMenu>
          <SubMenu label="Expenses">
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Sundries Others</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Taxes</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Depriciation</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Insurance</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Computer</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Bank Account</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Balance Sheet</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Jewel Particulars</MenuItem>
         
          </SubMenu>
          </SubMenu>
          <SubMenu label="Master"  icon={<MdAdsClick  className="sidebar-icon" />}>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Jewel Type</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> City</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>State</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Purity</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Loan Scheme</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Relation Type</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Id Card</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Company</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Branch</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Role</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Holiday</MenuItem>
          </SubMenu>

          <SubMenu label="Notification Master" icon={<IoIosNotificationsOutline  className="sidebar-icon"/>} >
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Notification</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Message</MenuItem>
          </SubMenu>
          <SubMenu label="EmployeeRegistration" icon={<IoMdPersonAdd  className="sidebar-icon"/>}>
          <MenuItem component={<Link to="/EmployeeRegistration" />}icon={< IoIosArrowForward/>}>EmployeeRegistration</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Employee Details</MenuItem>
          </SubMenu>
          <SubMenu label="Auctions" icon={<RiAuctionLine  className="sidebar-icon"/>}>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>SMS Charges</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Auctioned Loan</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Scheduled Loan</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Auction Active</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Auction Details</MenuItem>

          </SubMenu>
          <SubMenu label="Report" icon={<HiOutlineDocumentReport  className="sidebar-icon"/>}>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Warranty Report</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Stack Report</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Gold Loan Report</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}> Outstanding Report</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Payment Report</MenuItem>
          <MenuItem component={<Link to="/" />}icon={< IoIosArrowForward/>}>Position Report</MenuItem>

          </SubMenu>
          <MenuItem component={<Link to="/" />} icon={< VscFeedback  className="sidebar-icon"/>}>Complaints & Feedback</MenuItem>
      </Menu>
    </Sidebar>
  </div>
)
}