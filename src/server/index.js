import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import cors from 'cors'
import App from '../shared/App'
import { templateHTML } from './template'
import { matchPath } from 'react-router-dom'
import routes from '../shared/routes'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.static("public"))

app.get('*', (req, res, next) => {
    const activeRoute = routes.find(route => matchPath(req.url, route)) || {} 

    const promise = activeRoute.fetchInitialData 
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve({})

    promise.then( data => {
        const markup = renderToString(
            <StaticRouter location={ req.url } context={ data }>
                <App />
            </StaticRouter>
        )
        res.send(templateHTML("L", markup, data))
    } )
})


app.listen(PORT, ()=>{
    console.log("Server is running on " + PORT)
})

