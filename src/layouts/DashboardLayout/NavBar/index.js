import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';
import $ from 'jquery';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  ListItemIcon,
  ListItemText,
  ListItem
} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import WidgetsIcon from '@material-ui/icons/Widgets';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PagesIcon from '@material-ui/icons/Pages';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
// import SettingsIcon from '@material-ui/icons/Settings';

import DnsIcon from '@material-ui/icons/Dns';
import ChatIcon from '@material-ui/icons/Chat';
import RedeemIcon from '@material-ui/icons/Redeem';
import ForumIcon from '@material-ui/icons/Forum';
import ListSubheader from '@material-ui/core/ListSubheader';
import EventIcon from '@material-ui/icons/Event';
import CategoryIcon from '@material-ui/icons/Category';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Dashboard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/Label';
import StoreIcon from '@material-ui/icons/Store';

import { withStyles } from '@material-ui/core/styles';

import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  }
];

const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  first: {
    width: '10%',
    margin: '10%'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);
const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);

  const [open11, setOpen11] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };
  const handleClick8 = () => {
    setOpen8(!open8);
  };
  const handleClick9 = () => {
    setOpen9(!open9);
  };
  const handleClick10 = () => {
    setOpen10(!open10);
  };
  const handleClick11 = () => {
    setOpen11(!open11);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  $('.feat-btn').click(function() {
    $('nav ul .feat-show').toggleClass('show');
    $('nav ul .first').toggleClass('rotate');
  });
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      backgroundColor="black"
    >
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {/* {user.jobTitle} */}
          {'Admin'}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* <List className={useStyles.first}>
          <Dropdown style={{ color: 'black' }}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              href="/app/dashboard"
            >
              Dashboard
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
              <SendIcon
                // badgeContent={notifications.length}
                color="black"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/app/dashboard" id="dropdownMenu">
                Category
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="dropdownMenu">
                Add Category
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
              <SendIcon
                // badgeContent={notifications.length}
                color="black"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/app/dashboard" id="dropdownMenu">
                Category
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="dropdownMenu">
                Add Category
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
              <SendIcon
                // badgeContent={notifications.length}
                color="black"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/app/dashboard" id="dropdownMenu">
                Category
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="dropdownMenu">
                Add Category
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </List> */}
        {/* <nav className="sidebar">
          <div></div>
          <ul>
            <li>
              <a href="/app/dashboard">
                {' '}
                <DashboardIcon color="black" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="feat-btn">
                <CategoryIcon color="black" /> Category
                <span className="fas fa-caret-down first"></span>
              </a>
              <ul className="feat-show">
                <li>
                  <a href="/app/customers">All Category</a>
                </li>
                <li>
                  <a href="#">Add Category</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <DnsIcon color="black" />
                Network
              </a>
              <ul className="feat-show">
                <li>
                  <a href="/app/customers">All Category</a>
                </li>
                <li>
                  <a href="#">Add Category</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <EventIcon color="black" />
                Event
              </a>
              <ul className="feat-show">
                <li>
                  <a href="/app/customers">All Category</a>
                </li>
                <li>
                  <a href="#">Add Category</a>
                </li>
              </ul>
            </li>{' '}
            <li>
              <a href="#">
                {' '}
                <StoreIcon color="black" />
                {'  '}
                Store
              </a>
            </li>
            <li>
              <a href="#">Forum Category</a>
            </li>
          </ul>
        </nav> */}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button href="/app/dashboard">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Dashbord" />
          </ListItem>
          <ListItem button onClick={handleClick1}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
              </ListItem>
            </List>
            <List component="div" disablePadding href="/app/products">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Category" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <DnsIcon />
            </ListItemIcon>
            <ListItemText primary="Network" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Network" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Network" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick2}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Events" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Events" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick3}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Store" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Store" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Store" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick4}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Forum Category" />
            {setOpen4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Forum Category" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Forum Category" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick5}>
            <ListItemIcon>
              <RedeemIcon />
            </ListItemIcon>
            <ListItemText primary="Coupons & Deal" />
            {open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Coupons & Deal" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Coupons & Deal" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick6}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Discussion" />
            {open6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Discussion" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Discussion" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Comments" />
          </ListItem>

          <ListItem button onClick={handleClick7}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
            {open7 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add User" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All User" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick8}>
            <ListItemIcon>
              <WidgetsIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {open8 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open8} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Blog" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Blog" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick9}>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
            {open9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="FAQ category" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="FAQ" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick10}>
            <ListItemIcon>
              <PagesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            {open10 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open10} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Pages" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All Pages" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="Home Banner" />
          </ListItem>

          <ListItem button onClick={handleClick11}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
            {open11 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open11} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="General Setting" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Social" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} m={2} bgcolor="background.dark">
        {/* <Typography align="center" gutterBottom variant="h4">
          Need more?
        </Typography>
        <Typography align="center" variant="body2">
          Upgrade to PRO version and access 20 more screens
        </Typography> */}
        <Box display="flex" justifyContent="center" mt={2}></Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
