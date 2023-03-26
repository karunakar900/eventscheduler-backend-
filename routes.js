const express = require('express');
const datarouter = express.Router();
const dataschema = require('./models');
const bodyparser = require("body-parser");


datarouter.post("/v1/events", async (req, res) => { //creating events using post..........
    const { title, description, location, starttime, endtime } = req.body;

    if (req.body.title = "") {
        res.status(404).json({
            status: "validation error"
        })
    } if (req.body.description = "") {
        res.status(404).json({
            status: "validation error"
        })
    }
    if (req.body.location = "") {
        res.status(404).json({
            status: "validation error"
        })
    }
    if (req.body.starttime = "") {
        res.status(404).json({
            status: "validation error"
        })
    }
    if (req.body.endtime = "") {
        res.status(404).json({
            status: "validation error"
        })
    }
    try {
        const new_event = await dataschema.create({
            title: title,
            description: description,
            location: location,
            starttime: starttime,
            endtime: endtime,
        })
        res.status(201).json({
            status: "success",
            result: new_event
        });
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

});

datarouter.get("/v1/events", async (req, res) => {  //getting all the created events lists.............
    try {
        const events = await dataschema.find()
        res.status(201).json({
            status: "success",
            result: events
        })
    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});


datarouter.get("/v1/events/:id", async (req, res) => {  //getting specific events with unique ID.........
    try {
        const specific_event = await dataschema.findOne({ _id: req.params.id });
        res.status(201).json({
            status: "success",
            result: specific_event
        })
    }
    catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});


datarouter.delete("/v1/events/:id", async (req, res) => { //deleting the specific event based on id........
    try {
        const delete_event = await dataschema.findOne({ _id: req.params.id });
        if (delete_event) {
            await dataschema.deleteOne({ _id: req.params.id });
            res.status(200).json({
                status: "successfully deleted"
            })

        } else {
            res.status(404).json({
                status: "id not found"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
});


datarouter.put("/v1/events/:id", async (req, res) => { //updating the event based on unique id..............
    try {
        const update = await dataschema.updateOne({ _id: req.params.id }, req.body);
        if (update) {
            await dataschema.updateOne({ _id: req.params.id }, req.body);
            res.status(200).json({
                status: "updated successfully"
            })
        } else {
            res.status(404).json({
                status: "id not found"
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

});



























module.exports = datarouter;
