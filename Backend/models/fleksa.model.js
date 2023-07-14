const mongoose = require("mongoose");

const FleksaSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
});

const FleksaModel = mongoose.model("app",FleksaSchema);

module.exports={
    FleksaModel
}