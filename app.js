const express = require('express');
const path = require('path');
const app = express();
const db=require('./config/mongoose_connect');
const ownersRoutes=require('./routes/ownersRouter');
const usersRoutes=require('./routes/usersRouter');
const productsRoutes=require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookiesParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/owners',ownersRoutes);
app.use('/users',usersRoutes);
app.use('/products',productsRoutes);


app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});