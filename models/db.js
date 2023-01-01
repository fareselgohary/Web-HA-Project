const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test')
const schema = mongoose.Schema;
//----------------------------------------------
const loginn = new schema({
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true }
}
);
const Loginpa = mongoose.model('Loginpa', loginn, 'Loginpa')
const feednp = new schema({
    name: String,
    pn: String,
    Feedback: String,
}
);
const Feedpu = mongoose.model('Feedpu', feednp)
module.exports = {
    Loginpa,
    Feedpu
}
