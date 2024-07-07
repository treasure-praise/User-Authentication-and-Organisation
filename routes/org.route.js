const express = require("express");
const {
  getAllOrgs,
  getOrgById,
  createOrg,
  joinOrg,
} = require("../controllers/Org.Controller");
const router = express.Router();

router.get("/api/users/:id");
router.get("/", getAllOrgs);
router.get("/:orgId", getOrgById);
router.post("/", createOrg);
router.post("/:orgId/users", joinOrg);

module.exports = router;
