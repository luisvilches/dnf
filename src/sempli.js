import express from 'express';
import cors from 'cors';
import middelwareParse from 'connect-multiparty';
import chalk from 'chalk';
import mongoose from 'mongoose';



const body = middelwareParse();

class Sempli{
    constructor(){
        this.app = express();
        this.cors = cors;
        this.arr = [];
        this.db = {};
        this.conf;
        this.config();
    }

    init(conf){
        this.conf = conf;
        this.app.listen(this.conf.server.port, err => {
            if(err){
                console.log('-> Error:','=>',err);
            }else{
                if (process.env.NODE_ENV != "production") {
                    console.log(chalk.magenta('-> Sempli server running in port'),chalk.cyan(this.conf.server.port));
                } else {
                    console.log(chalk.magenta('-> Sempli server running in port'),chalk.cyan(this.conf.server.port));
                }
            }
        })

        if(this.conf.database == null || this.conf.database === "undefined"){
            return;
        }else{
            mongoose.connect(`mongodb://${this.conf.database.user}:${this.conf.database.password}@${this.conf.database.host}/${this.conf.database.name}`, err => {
                if(err) {
                    console.log(chalk.red('-> Error en la coneccion con la base de datos =>', err));
                } else {
                    console.log(chalk.magenta('-> Conección exitosa con la base de datos =>'), chalk.cyan(this.conf.database.name));
                }
            });
        }
    }
    

    config(){
        this.app.use(this.cors());
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
                    return app.get(i.url,body,i.handler);
                    break;
                case 'GET' || 'get':
                    return app.get(i.url,body,i.handler);
                    break;
                case ('POST' || 'post'):
                    return app.post(i.url,body,i.handler);
                    break;
                case ('PUT' || 'put'):
                    return app.put(i.url,body,i.handler);
                    break;
                case ('DELETE' || 'delete'):
                    return app.delete(i.url,body,i.handler);
                    break;
                default:
                    console.log(chalk.red('* Method error => ', this.method , '->'), chalk.blue('url['+ '"'+this.url+'"]'));
            }
        })
    }
}

const app = new Sempli();
export default app;
