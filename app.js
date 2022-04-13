const EXPRESS = require ("express");
const APP = EXPRESS();

APP.listen(3030, ()=>(consol.log("Servidor Corriendo")));

APP.get("/", function(req, res){
    res.end("Pagina Web para clonar")
});
