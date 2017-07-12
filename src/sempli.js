import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Sequelize from 'Sequelize';

class Sempli{
    constructor(){
        //this.port = port;
        this.app = express();
        this.cors = cors;
        this.body = bodyParser;
        this.orm = Sequelize;
        this.config();
        //this.createServer();
    }

    createServer(port){
        this.app.listen(port, err => {
            if(err){
                console.log('Error:','->',err);
            }else{
                console.log('Sempli server running in ', port);
            }
        })
    }

    config(){
        this.app.use(this.cors());
        this.app.use(this.body.json());
    }

    use(args){
        return this.app.use(args);
    }

    set(args){
        return this.app.set(args);
    }

    point(obj){
        this.method = obj.method;
        this.url = obj.url;
        this.handler = obj.handler;

        switch (this.method){
            case null || 'undefined':
                return this.app.get(this.url,this.handler)
                break
            case 'GET' || 'get':
                return this.app.get(this.url,this.handler)
                break
            case ('POST' || 'post'):
                return this.app.post(this.url,this.handler)
                break
            case ('PUT' || 'put'):
                return this.app.put(this.url,this.handler)
                break
            case ('DELETE' || 'delete'):
                return this.app.delete(this.url,this.handler)
                break;
            default:
                console.log('Metodo erroneo', this.method , '->', 'url['+ '"'+this.url+'"]')
        }
    }
}

export class ORM extends Sempli {
    constructor(name){
        super();
        this.name = name;
    }

    conexion(msg){
        console.log(msg);
    }
}

const app = new Sempli();
export default app;