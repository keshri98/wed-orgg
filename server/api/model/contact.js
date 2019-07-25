const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    fname: {
        type: String
    },
    
    acity: {
        type: String
    },
    taddress: {
        type: String
    },
    eemail:{
        type:String
    }
    
}
);

module.exports = mongoose.model('contacts', Contact); 