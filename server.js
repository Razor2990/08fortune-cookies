// Importando dependencias
var http = require('http');
var fs = require('fs');
var mime = require('mime')

var staticServer = require("./internals/static-server") 

var staticServer= require("./internals/static-server.js");



//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

// Código del Server
var server = http.createServer(function(req, res){
    var url = req.url;
    if(url == "/"){
        url = '/index.html'
    }

    // Generar la ruta real
    // del archivo Solicitado

    console.log(`> Recurso solicitado> ${url}`);
    staticServer.serve(url, res);



    console.log(`> Recurso solicitado> ${url}`);
    staticServer.serve(url,res);
    

    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});
// COmentario de prueba git