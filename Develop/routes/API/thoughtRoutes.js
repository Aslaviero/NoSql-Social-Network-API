const router = require("express").Router();

const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  addreaction,
  removeReaction,
  deleteThought,
} = require("../../controllers/thoughtcontroller");

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/students/:studentId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/students/:studentId/assignments
router.route("/:thoughtId/reactions").post(addreaction);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
