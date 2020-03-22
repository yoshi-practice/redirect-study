'use strict';

const http = require('http');
const server = http.createServer((res, req) => {
    res.writeHead(302, {
        Location: 'https://yoshi1125hisa.com/'
    });
    res.end();
});
const port = 8000;
server.listen(port, () => {
    console.info('Server is listening: ' + port);
});