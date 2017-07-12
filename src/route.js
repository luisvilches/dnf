export default [
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
