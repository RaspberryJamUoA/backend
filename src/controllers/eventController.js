

export const eventCollection = client.db("dev").collection('events');

eventTemplate = {
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
        const events = await eventCollection.findOne({});
        // Send stuff here.
        res.json(events);
    } catch (e) {
        res.status(500).json(e.toString());
    }

}

const insertEvent = async (req, res, next) => {

   await eventCollection.insertOne(eventTemplate);

    res.json(
        events
    );
}

module.exports = {
    listEvents,
    insertEvent
}