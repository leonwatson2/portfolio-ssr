import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Projects extends Component {
    static propTypes = {
        projects: PropTypes.array
    }
    constructor(props){
        super(props)

        let projects
        if(__isBrowser__){
            projects = window.__STATE__.projects
            delete window.__STATE__.projects
        } else {
            projects = props.staticContext.projects
        }

        this.state = {
            projects,
        }
    }

    componentDidMount(){
        if(!this.state.projects){
            this.fetchProjects()
        }
    }
    fetchProjects = () => {
        this.props.fetchInitialData().then(({ projects }) => {
            this.setState({ projects })
        })
    }
    render() {
        if(!this.state.projects)
            return (
                <h2>No Projects Here</h2>
            )
        return (
            <ul>
                {this.state.projects.map(p => <li key = {p.name}> {p.name} </li>)}
            </ul>
        )
    }
}