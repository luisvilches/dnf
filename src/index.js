import Sempli, {ORM} from './sempli.js';

const DB = new ORM();

Sempli.createServer(3000);



Sempli.point({
    method: 'GET',
    url: '/all',
    handler: function(req,res){
        DB.conexion('hola');
    }
});

Sempli.point({
    method: 'GET',
    url: '/add',
    handler: function(req,res){

    }
});