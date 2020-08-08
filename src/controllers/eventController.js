const client = require('../db/mongoClient');

const eventCollection = () => client.db("dev").collection('events');

const eventTemplate = {
    eventName: "WDCC x AUCS Hack Weekend",
    description: "Learn it, code it, win it",
    dateTime: "9th August, 2020",
    clubName: "WDCC",
    cost: "",
    location: "Grid AKL, New Zealand",
    membershipRequired: true,
    keywords: ["Code", "React", "JavaScript"]
};

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
    await eventCollection().insertOne(eventTemplate);

    return res.status(200);
}

module.exports = {
    listEvents,
    insertEvent
}
