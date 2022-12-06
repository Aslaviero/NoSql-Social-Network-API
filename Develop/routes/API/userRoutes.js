const router = require("express").Router();

const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
  deleteUser,
} = require("../../controllers/usercontroller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:Id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
