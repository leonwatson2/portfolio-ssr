import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import PropTypes from 'prop-types'

export default class SideNav extends Component {
    static propTypes = {
        closeNav: PropTypes.func,
    }
    render() {
        return (
            <ul className="sidenav" id="side-nav">
                <li><NavLink to={'/projects'} onClick={this.props.closeNav}>Projects</NavLink></li>
                <li><NavLink to={'/contact'} onClick={this.props.closeNav}>Contact</NavLink></li>
                <li><NavLink to={'/ran'} onClick={this.props.closeNav}>Projects</NavLink></li>
            </ul>
        )
    }
}
