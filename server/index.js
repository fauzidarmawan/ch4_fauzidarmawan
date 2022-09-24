const http = require('http');
const { PORT = 8000 } = process.env;

const fsj = require('fs');
const pathj = require('path');
const PUBLIC_DIRECTORY = pathj.join(__dirname, '../public');

function HTML(htmlF) {
    const htmlFilePath = pathj.join(PUBLIC_DIRECTORY, htmlF);
    return fsj.readFileSync(htmlFilePath, 'UTF-8');
}
function Image(imageF) {
    const imageFilePath = pathj.join(PUBLIC_DIRECTORY, imageF);
    return fsj.readFileSync(imageFilePath);
}
function CSS(cssF) {
    const cssFilePath = pathj.join(PUBLIC_DIRECTORY, cssF);
    return fsj.readFileSync(cssFilePath, 'UTF-8');
}
function JS(jsF) {
    const jsFilePath = pathj.join(PUBLIC_DIRECTORY, jsF);
    return fsj.readFileSync(jsFilePath, 'UTF-8');
}

function onRequest(req, res) {
    let css = '';
    let js = '';
    let img = '';
    if (req.url.match('.css$')) {
        css = req.url;
    } else if (req.url.match('.js$')) {
        js = req.url;
    } else if (req.url.match('.png$') || req.url.match('.jpg$')) {
        img = req.url;
    }
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(HTML('index.html'));
            return;
        case '/mobil.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(HTML('mobil.html'));
            return;
        case css:
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(CSS(css));
            return;
        case js:
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(JS(js));
            return;
        case img:
            res.writeHead(200, { 'Content-Type': 'image' });
            res.end(Image(img));
            return;
        default:
            res.writeHead(404);
            res.end(HTML('not.html'));
            break;
    }
}

const server = http.createServer(onRequest);
server.listen(PORT, '0.0.0.0', () => {
    console.log('server sudah berjalan, silahkan buka http://localhost:%d', PORT);
});


