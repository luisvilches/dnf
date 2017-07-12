import Sempli, {ORM} from './sempli.js';

const DB = new ORM({
    database: 'blog',
    user: 'blog',
    pass: 'blog',
    host: 'ds151461.mlab.com:51461',
    engine: 'mongodb'
});

export default DB;

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