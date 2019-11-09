import React, { Component } from 'react'
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


export class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Button color='inherit'>Store</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
