import Test from './controllers/test';
import Prueba from './controllers/prueba';


export default [
    {
        url: '/',
        method: 'GET',
        type: 'public',
        handler: function (req, res) {
            res.send('hello desde le home!');
        }
    },
    {
        url: '/all',
        method: 'GET',
        type: 'private',
        handler: new Test().post
    },
    {
        url: '/dos',
        method: 'GET',
        type: 'public',
        handler: new Prueba().get
    }
]
