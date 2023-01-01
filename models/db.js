const mongoose = require("mongoose");
const schema = mongoose.Schema;
//----------------------------------------------
const loginn = new schema({
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true }
}
);
const Loginp = mongoose.model('Loginp', loginn)
const feednp = new schema({
    name: String,
    pn: String,
    Feedback: String,
}
);
const Feedpu = mongoose.model('Feedpu', feednp)
module.exports = {
    Loginp,
    Feedpu,
}
