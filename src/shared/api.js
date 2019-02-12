import React from 'react'
const projects = [
    {
        name: "Skagen",
        url: "https://www.skagen.com/en-us/",
        img: "/assets/images/skagen.png",
        description: `<p>E-Commerce app done when I was on contract with <a href="https://www.fossil.com" target="_blank"> Fossil <i class='material-icons tiny'>open_in_new</i> </a></p>`,
        tech: ['Magento', 'JavaScript', 'html5', 'MySql', 'Sass', 'css3']
    },
    {
        name: "Autoquip",
        url: "https://autoquip.com",
        img: "/assets/images/autoquip.png",
        description: `<p>A very interesting project where started with Wordpress and then had to add some good old ReactJS. So some custom endpoints had to made for that consume some data. Worked on with the <a href="https://square205.com" target="_blank">Sqaure205  <i class='material-icons tiny'>open_in_new</i> </a> team.</p> `,
        tech: ['React', 'Wordpress', 'sass', 'html', 'css3', 'JavaScript']
    },
    {
        name: "Snapup Realestate",
        url: "https://www.snapuprealestate.ca",
        img: "/assets/images/snapup.png",
        description: `<p> My chance to jump into something I didn't know and learn. They asked if I had <strong>Grails</strong> experience and I said nope but, let me see if I can fix your problem. I did well wouldn't you say? </p>`,
        tech: ['Grails', 'postgres-sql', 'groovy', 'JavaScript', 'html', 'css3']
    }
]
export function fetchProjects(){
    return new Promise(res=>{
        res({projects})
    })
}

export function sendContactEmail(body){
    return fetch('./sendEmail', { body:JSON.stringify(body) , method: "POST", headers: { 'Content-Type': 'application/json' } })
}