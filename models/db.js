const mongoose = require("mongoose");
const schema = mongoose.Schema;
//----------------------------------------------
const loginn = new schema({
    user: String,
    pass: String,
}
);
const Loginp = mongoose.model('Loginp', loginn)
module.exports = Loginp