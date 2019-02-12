import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import cors from 'cors'
import App from '../shared/App'
import { templateHTML } from './template'
import { matchPath } from 'react-router-dom'
import routes from '../shared/routes'
import bodyParser from 'body-parser'
import { sendEmail } from './sendEmail';
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/sendEmail', (req, res)=>{
    const { name, email, reason } = req.body
    if(!(name && email && reason)){
        res.json({ error: 'Correct Params Not Provided' })
    }
    sendEmail({ name, email, reason })
        .then( (wasSent) => {
            if(wasSent)
                res.sendStatus(202)
            else{
                res.status(400)
                res.json({ err })
            }
        })
        .catch( (err) => {
            res.status(400)
            res.json({ err })
        })
})
app.get('*', (req, res) => {
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

