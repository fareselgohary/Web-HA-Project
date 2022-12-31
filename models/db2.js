const mongoose = require("mongoose");
const schema = mongoose.Schema;
//----------------------------------------------
const feednn = new schema({
    name: String,
    pn: String,
    Feedback: String,
}
);
const Feedp = mongoose.model('Feedp', feednn)
module.exports = Feedp
