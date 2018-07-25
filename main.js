var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    console.log(url.parse(req.url,true).query.id);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<!doctype html>
  ﻿<html>
  <head>
      <title>Node.js</title>
      <meta charset="utf-8">
      <style>
          li a {
              color :black;
          }
      </style>
  <head>
  
  <body>
      <h1><a href="?id=WELCOME">WEB</a></h1>
        <ol>
            <li><a href="?id=HTML">HTML</a></li>
            <li><a href="?id=CSS">CSS</a></li>
          <li><a href="?id=JavaScript">JavaScript</a></li>
          <li><a href="?id=Node.js">Node.js</a></li>
      </ol>
  
      <!-- <ol>
          <li><a href="1.html"><font color="red">HTML</font></a></li>
          <li><a href="2.html"><font color="red">CSS</font></a></li>
          <li><a href="3.html"><font color="red">JavaScript</font></a></li> -->
  
    </ol>
  
  <h2>${url.parse(req.url,true).query.id}</h2>
  ${url.parse(req.url,true).query.id} is...
  
  </body>
  </html>
  `)
  res.end();
}).listen(8080);