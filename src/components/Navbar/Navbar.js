import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

import { updateSearchDataAction } from '../../store/actions/rootActions';
import Logo from '../../assets/images/logo.png';

const LogoWrapper = styled.section`
  a {
    img {
      width: 50px;
      padding: 10px;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  grow: {
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  link: {
    color: "#fff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [searchData, setSearchData] = useState('');
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      open={false}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    />
  );

  useEffect(() => {
    dispatch(updateSearchDataAction(searchData))
  }, [dispatch, searchData]);

  return (
    <nav className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <LogoWrapper>
            <Link to={"/"}>
              <img src={Logo} alt="Blog app" title="Blog app" />
            </Link>
          </LogoWrapper>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link className={classes.link} to="/posts">
              Posts
            </Link>
          </Typography>
          {location.pathname !== "/" && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(e)=>setSearchData(e.target.value)}
              />
            </div>
          )}
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/max-pashynov-080a451a1/">By Pashynov M.</a>
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </nav>
  );
};

export default Navbar;
