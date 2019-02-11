import serialize from 'serialize-javascript'

export function templateHTML(title, markup, initialState = {}) {
    let scripts = '';
    if (markup) {
        scripts = `<script>
                     window.__STATE__ = ${serialize(initialState)}
                  </script>
                  <script src="bundle.js"></script>
                  <script src="js/bin/materialize.min.js"></script>
                  `
    } else {
        scripts = ` 
            <script src="bundle.js"> </script> 
            <script src="js/bin/materialize.min.js"></script>

        `
    }
    let styles = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">    
    `
    let template = `<!DOCTYPE html>
    <html>

    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
        ${styles}
    </head>
    
    <body>
        <div id="app">${markup}</div>
        ${scripts}
    </body>

    </html>
`
    return template
}