const http = require('http');
// const services = require('../../services');
const url = require('url');
const jsonBody = require('body/json');
const fs = require('fs');
const formidable = require('formidable');
const { on } = require('events');

const server = http.createServer();

server.on('request', (request, response) => {
  request.on('error', (err) => {
    console.error('request error');
  });
  response.on('error', (err) => {
    console.error('response error');
  });
  const parsedUrl = url.parse(request.url, true);
  if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
    const { id } = parsedUrl.query;
    // const metadata = services.fetchImageMetadata(id);
    const metadata = '{id: 1, "title":"Disney World", "description": "Welcome to this world"}'
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    const serializedJSON = JSON.stringify(metadata);
    response.write(serializedJSON);
    response.end();
  } else if (request.method === 'POST' && parsedUrl.pathname === '/users') {
    jsonBody(request, response, (err, body) => {
      if (err) {
        console.log(err);
      } else {
        services.createUser(body['userName']);
      }
    });
  } else if (request.method === 'POST' && parsedUrl.pathname === '/upload') {
    const form = new formidable.IncomingForm({
        multiples: true,
        maxFileSize: 5*1024*1024,
        encoding: 'utf-8',
        maxFields: 20,
        keepExtensions: true
    });
    form.parse(request)
        .on('fileBegin', (name, file) => {
            console.log('upload has started');
        }).on('file', (name,file) => {
            console.log('field and file pair received');
        }).on('field', (name, file) => {
            console.log('field received');
        }).on('progress', (bytesReceived, bytesExpected) => {
            console.log(bytesReceived , ' / ', bytesExpected);
        }).on('error', (err) => {
            console.log(err);
            request.resume();
        }).on('aborted', () => {
            console.log('aborted');
        }).on('end', () => {
            console.log('Done - sucessfully uploaded');
        })
  } else {
    // fs.createReadStream("../../index.html").pipe(response);
  }
});

server.listen(8080);