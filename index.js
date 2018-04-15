const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

var ProductRoutes = require('./routes/ProductRoutes');
var OrderRoutes = require('./routes/OrderRoutes');

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});
app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'It works!'
    })
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    add(10,20);
    res.json({
        error: {
            message: error.message
        }
    })
});

function add(x,y){
    return x+y;
}
app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))
