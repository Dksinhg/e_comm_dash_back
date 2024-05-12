const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ecommerce',{
   useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4
})
.then(db => console.log('Database is connect'))
.catch(err => console.log('err'))
