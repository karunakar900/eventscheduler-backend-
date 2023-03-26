const mongoose = require('mongoose');

const eventschema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    starttime: { type: String, required: true },
    endtime: { type: String, required: true }
})

const dataschema = mongoose.model("eventcollection", eventschema);
module.exports = dataschema;