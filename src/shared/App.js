import React, { Component, Fragment } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Navigation/NavBar'
import FourOhFour from './404';
import Footer from './Footer';

const App = () => {
    return (
        <Fragment>
            <NavBar />
            <Switch>
                {
                    routes.map(({ path, exact, component: C, ...rest }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={props => <C {...props} {...rest} />}
                        />
                    ))
                }
                <Route
                    render={props => <FourOhFour {...props} />}
                />
            </Switch>
            <Footer />
        </Fragment>
    )
}

export default App