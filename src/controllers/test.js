class Test {

    get(req,res,next){
        return res.end('hola desde una clase externa');
    }
}


const controller = new Test();

export default  controller;