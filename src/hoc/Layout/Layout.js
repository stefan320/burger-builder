import React, { Component } from 'react';

import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    toggleDrawerClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    toggleDrawer={this.sideDrawerToggleHandler}
                    showDrawer={this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>)
    }
}

export default Layout;