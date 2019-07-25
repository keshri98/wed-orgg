const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String
    },
   
    city: {
        type: String
    },
    address: {
        type: String
    },
    image:{
        type:String
    },
   Cost:{
        type:String
    }
    
},
);
module.exports = mongoose.model('users', User); 
 