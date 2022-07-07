import clientPromise from "../../lib/mongodb";
const { ObjectID } = require("mongodb");

const handler = async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("Votecast");
    const polls = db.collection("Polls");
    const poll = await polls.findOne({ _id: ObjectID(req.query.id) });

    res.json(poll.options);
    polls.updateOne({ _id: ObjectID(req.query.id) }, { $inc: { votes: 1 } });
  } catch (e) {
    console.error(e);
    res.status(200).json({ error: true });
  }
};

export default handler;
