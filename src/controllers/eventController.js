const client = require('../db/mongoClient');

const eventCollection = () => client.db("dev").collection('events');

const listEvents = async (_, res) => {
    try {
        const events = await eventCollection().find({}).toArray();
        // Send stuff here.
        return res.json(events);
    } catch (e) {
        return res.status(400).json(e.toString());
    }

}

const insertEvent = async (req, res) => {
    const data = req.body;

    await eventCollection().insertOne(eventTemplate);

    return res.status(200);
}

module.exports = {
    listEvents,
    insertEvent
}
