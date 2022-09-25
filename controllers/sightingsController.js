const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model, commentModel) {
    super(model);
    this.commentModel = commentModel;
  }

  // get all comments
  async getComments(req, res) {
    const { sightingId } = req.params;
    try {
      const comments = await this.commentModel.findAll({
        where: {
          sightingId: sightingId,
        },
      });
      return res.json(comments);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // insert one comment
  async insertOneComment(req, res) {
    const { content } = req.body;
    const { sightingId } = req.params;
    console.log(content, sightingId);
    try {
      const newComment = await this.commentModel.create({
        content: content,
        sightingId: sightingId,
      });

      return res.json(newComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // delete one comment
  async deleteOneComment(req, res) {
    const { content } = req.body;
    const { commentsId } = req.params;
    console.log(content, commentsId);
    // try {
    //   const newComment = await this.commentModel.create({
    //     content: content,
    //     sightingId: sightingId,
    //   });

    //   return res.json(newComment);
    // } catch (err) {
    //   return res.status(400).json({ error: true, msg: err });
    // }
  }

  // insert async insertOne (req, res) here
  async insertOne(req, res) {
    const { date, location, notes } = req.body;
    try {
      const newSighting = await this.model.create({
        date: new Date(date),
        location: location,
        notes: notes,
      });
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;
