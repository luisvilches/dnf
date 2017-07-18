import Test from './controllers/test';
import Prueba from './controllers/prueba'


export default [
    {
        url: '/',
        method: 'GET',
        handler: function (req, res) {
            res.send('hello desde le home!');
        }
    },
    {
        url: '/all',
        method: 'GET',
        handler: new Test().get
    },
    {
        url: '/dos',
        method: 'GET',
        handler: new Prueba().get
    }
]
