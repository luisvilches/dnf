import Sempli from './sempli.js';
import route from './route.js';

Sempli.createServer(3000);

Sempli.conect({
    database: 'blog',
    user: 'blog',
    pass: 'blog',
    host: 'ds151461.mlab.com:51461',
    engine: 'mongodb'
});


Sempli.routes(route);