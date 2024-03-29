import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import PostProduct from './PostProduct';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// ICONS
import HomeIcon from "@material-ui/icons/Home";

export class Navbar extends Component {
    render() {
      const { authenticated } = this.props
        return (
          <AppBar>
            <Toolbar className="nav-container">
              {authenticated ? (
                <Fragment>
                  <PostProduct/>
                  <Link to='/products'>
                  <MyButton tip="Home">
                    <HomeIcon color="primary" />
                  </MyButton>
                  </Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Button color="inherit" component={Link} to="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} to="/products">
                    Store
                  </Button>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                </Fragment>
              )}
            </Toolbar>
          </AppBar>
        );
    }
}

Navbar.propTypes = {}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(Navbar)
