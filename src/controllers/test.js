import fetch from 'node-fetch';

class Test {

    get(req,res,next){
        return res.json({title: 'hola hola hola'})
    }
    post(req,res,next){

    }
}
export default  Test;