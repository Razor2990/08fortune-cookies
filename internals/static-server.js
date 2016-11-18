var mime = require("mime"),
<<<<<<< HEAD
fs = require("fs");

// Exportando la funcionalidad del servidor
// Estatico
exports.serve = function(url, res){
    
    var filePath = './static' +     url;
    console.log(`> Se servirá archivo: ${filePath}`);
    //Seleccionar el tipo de mime
    var mimeType = mime.lookup(filePath);
=======
    fs = require("fs")

//Esportando la funcionalidad del servidor estatico
exports.serve = function(url, res){
    var filePath = './static' +     url;
   console.log(`> Se servirá archivo: ${filePath}`);
        
    //Seleccionar el tipo de mime
    var mimeType = mime.lookup(filePath);

>>>>>>> 040b315ad240d5a4b48eff4ef7c03e9e022dd82a
    fs.readFile(filePath, function(err, content){
        if(err){
            //Hubo un error
                res.writeHead(500,{
                    'Content-Type': "text/html"
                });
                console.log('> Error en la lectura de un archivo: l20 server.js');
                res.end("<h1>Error interno</h1>");
        }else{
            //No hubo error
                res.writeHead(200,{
                    'Content-Type': mimeType
                });
                console.log(`> Sirviendo: ${filePath}`);
                res.end(content);
        }
        });
};