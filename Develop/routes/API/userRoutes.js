const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
  deleteUser,
} = require("../../controllers/usercontroller");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:Id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
