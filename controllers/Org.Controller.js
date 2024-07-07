const getAllOrgs = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "<message>",
      data: {
        organisations: [
          {
            orgId: "string",
            name: "string",
            description: "string",
          },
        ],
      },
    });
  } catch (error) {}
};

const getOrgById = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "<message>",
      data: {
        orgId: "string", // Unique
        name: "string", // Required and cannot be null
        description: "string",
      },
    });
  } catch (error) {}
};

const createOrg = async (req, res) => {
  const { name, description } = req.body;
  try {
    res.status(201).json({
      status: "success",
      message: "Organisation created successfully",
      data: {
        orgId: "string",
        name: "string",
        description: "string",
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Bad Request",
      message: "Client error",
      statusCode: 400,
    });
  }
};

// adds a user to a particular organisation
const joinOrg = async (req, res) => {
  const { userId } = req.body;
  try {
    res.status(200).json({
      status: "success",
      message: "User added to organisation successfully",
    });
  } catch (error) {}
};

module.exports = { joinOrg, createOrg, getAllOrgs, getOrgById };
