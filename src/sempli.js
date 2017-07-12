import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import mongoose from 'mongoose';

class Sempli{
    constructor(){
        this.app = express();
        this.cors = cors;
        this.body = bodyParser;
        this.arr = [];
        this.db = {};
        this.config();
    }

    createServer(port){
        this.app.listen(port, err => {
            if(err){
                console.log('-> Error:','=>',err);
            }else{
                console.log(chalk.magenta('-> Sempli server running in port'),chalk.cyan(port));
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

    register(obj){
        this.arr.push(obj);
    }

    routes(routes){

        var app = this.app;
        routes.map(function(i){
            switch (i.method){
                case null || 'undefined':
                    return app.get(i.url,i.handler);
                    break;
                case 'GET' || 'get':
                    return app.get(i.url,i.handler);
                    break;
                case ('POST' || 'post'):
                    return app.post(i.url,i.handler);
                    break;
                case ('PUT' || 'put'):
                    return app.put(i.url,i.handler);
                    break;
                case ('DELETE' || 'delete'):
                    return app.delete(i.url,i.handler);
                    break;
                default:
                    console.log(chalk.red('* Method error => ', this.method , '->'), chalk.blue('url['+ '"'+this.url+'"]'));
            }
        })
    }

    conect(db){
        this.db = db;
        switch (db.engine){
            case"mongodb":
                this.cMongo(db.engine);
                break;

            default:
                console.log(chalk.red('-> Engine database not support =>',chalk.red(db.engine)));
        }
    }

    cMongo(){
        let user = this.db.user;
        let pass = this.db.pass;
        let host = this.db.host;
        let db = this.db.database;

        mongoose.connect(`mongodb://${user}:${pass}@${host}/${db}`, err => {
            if(err) {
                console.log(chalk.red('-> Error en la coneccion con la base de datos =>', err));
            } else {
                console.log(chalk.magenta('-> Conección exitosa con la base de datos =>'), chalk.cyan(db));
            }
        });
    }

}

const app = new Sempli();
export default app;