require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const Product = require('./models/products.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

app.use(express.static('public'));


//Set up middleware
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
mongoose.set('strictQuery', true);
//index route = Show all records

app.get('/products', (req, res) => {
    
    Product.find({}, (error, allProducts) => {
        res.render('Index', {
            product: allProducts//getting all product from db to pass as props
        });
    });
});

//New - get a form to create a new record
//put this above your Show route

app.get('/products/new', (req, res) => {
    res.render('New');
});


//Delete - Delete  this one record
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/products');//redirect back to product index
    });
});
//Update - modifying a record
app.put('/products/:id', (req, res) => {
   
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        console.log(updatedProduct)
        res.redirect(`/products/${req.params.id}`);
    });
});
//Create - send the filled form to DB and create a new record

app.post('/products', (req, res) => {
    
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/products'); // send the user back to /products
    });
    
});

//Edit - go to DB to and get the record to update

app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => { //find the product
        if (!err) {
            res.render(
                'Edit',
                {
                    product: foundProduct //pass in the found product so we can prefill the form
                }
            );
        } else {
            res.send({ msg: err.message })
        }
    });
});

//Show route = Show a particular record
//add show route


app.get('/products/:id', function (req, res) {
    Product.findById(req.params.id, (err, foundProduct) => {
        console.log(foundProduct)
        res.render('Show', { //second param must be an object
            product: foundProduct
        });
    });
});

app.listen(port, () => {
    console.log('Listening');
});