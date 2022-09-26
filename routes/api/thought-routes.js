const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/")
  .get(getAllThought)
  .post(createThought);

// /api/thoughts/:id
router.route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:id/reactions
router.route("/:thoughtId/reactions")
  .post(addReaction);

// /api/thoughts/:id/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;