var http = require("http")
var mod_fs = require("fs")
const puerto=  8080
http.createServer((req, res)=>{
    var index_html = false
    var arch_json = false
    var msg_error = ""

    try {
        index_html = mod_fs.readFileSync("./index.html", {encoding: 'utf-8', flag: 'r'})
    } catch (error) {
        msg_error += "Archivo Index.html inexistente. " + error
    }

    try {
        arch_json = JSON.parse(mod_fs.readFileSync(__dirname+ "data.json"))
    } catch (error) {
        msg_error += "Archivo JSOnN no  fue encontrado. " + error
        
    }
    if (index_html){
        if (arch_json){
            arch_json['datos'].forEach(item => {
                index_html = index_html.replace(item.clave, item.valor)
            });
            res.end(index_html)
        }
    }
    else{
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end(msg_error)
    }
}).listen(puerto)

console.log("Servidor iniciado")