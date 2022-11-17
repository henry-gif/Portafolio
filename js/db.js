var mysql=require('mysql');
var conexion= mysql.createConnection({
    host:'localhost',
    database:'images',
    user:'root',
    password:'mysql2019'

});

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('conexion establecida');
    }
})