import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SideNav from './SideNav';
export default class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            instances: null
        }
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
            this.setState({ instances })
        });
    }
    openNav = () => {
        if(this.state.instances)
            this.state.instances[0].open()
    }
    closeNav = () => {
        if(this.state.instances)
            this.state.instances[0].close()
    }
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="top-nav">
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="brand-logo">Leon</div>
                            <a href="#" data-target="side-nav" className="sidenav-trigger" onClick={this.openNav}><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                    <SideNav closeNav={this.closeNav} />
                </nav>
            </div>
        )
    }
}
