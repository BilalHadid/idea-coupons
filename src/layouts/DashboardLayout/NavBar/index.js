import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import './NavBar.css';
import $ from 'jquery';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';

import CategoryIcon from '@material-ui/icons/Category';
import DnsIcon from '@material-ui/icons/Dns';
import EventIcon from '@material-ui/icons/Event';
import StoreIcon from '@material-ui/icons/Store';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

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

const useStyles = makeStyles(() => ({
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toggle, setToggle] = useState(false);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
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
          {user.jobTitle}
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
        <nav className="sidebar">
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
            </li>
            <li>
              <a href="#">
                <EventIcon color="black" />
                Event
              </a>
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
        </nav>
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
