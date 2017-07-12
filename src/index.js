import Sempli, {ORM} from './sempli.js';

Sempli.conect({
    database: 'blog',
    user: 'blog',
    pass: 'blog',
    host: 'ds151461.mlab.com:51461',
    engine: 'mongodb'
});

Sempli.createServer(3000);

var route = [
    {
        url: '/',
        method: 'GET',
        handler: function (req, res) {
            res.send('hello desde le home!')
        }
    },
    {
        url: '/all',
        method: 'GET',
        handler: function (req, res) {
            res.send('hello desde all!')
        }
    },
    {
        url: '/dos',
        method: 'GET',
        handler: function (req, res) {
            res.send('hello! desde dos')
        }
    }
]

Sempli.routes(route);