const {OK, INTERNAL_SERVER_ERROR} = require("http-status-codes");
const client = require('../db/mongoClient');

const eventCollection = () => client.db("dev").collection('events');

const listEvents = async (_, res) => {
    try {
        const events = await eventCollection().find({}).toArray();
        // Send stuff here.
        res.json(events);
    } catch (e) {
        res.status(500).json(e.toString());
    }
}

const listValidEvents = async (req, res, next) => {
    try {
        const validEvents = await eventCollection().find({
            "dateTime": {"$gt": new Date().toISOString()}
        }).toArray();

        res.json(validEvents);
    } catch (e) {
        res.status(500).json(e.toString());
    }
}

const queryEvents = async (req, res) => {
    let query = req.body;

    const defaultQuery = {
        minCost: 0
    }

    query = {...defaultQuery, ...query};

    let costQ = {
        $gte: query.minCost
    }
    if (query.maxCost !== undefined) {
        costQ['$lte'] = Number(query.maxCost);
    }

    try {
        const validEvents = await eventCollection().find({
            "cost": costQ
        }).toArray();
        res.json(validEvents);
    } catch (e) {
        res.status(500).json(e.toString());
    }
}

const insertEvent = async (req, res) => {
    try {
        await eventCollection().insertOne(req.body);
        return res.status(OK).send();
    } catch (e) {
        res.status(INTERNAL_SERVER_ERROR).send(e.toString());
    }
}

module.exports = {
    listEvents,
    insertEvent,
    listValidEvents,
    queryEvents
}
