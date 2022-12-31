const mongoose = require("mongoose");
const schema = mongoose.Schema;
//----------------------------------------------
const loginn = new schema({
    user: String,
    pass: String,
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
