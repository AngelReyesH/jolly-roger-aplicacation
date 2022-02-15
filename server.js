const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist/aplicacionEmpresarial'));
app.get("/*",function(req, res){
    res.sendFile("index.html",{root: './dist/aplicacionEmpresarial/'});
});

app.listen(process.env.PORT || 8080);
console.log('running in ${process.env.PORT || 8080}');