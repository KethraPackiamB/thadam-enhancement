const { WorkOS } = require("@workos-inc/node");

const workos = new WorkOS(process.env.WORKOS_API_KEY);

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access token missing",
      });
    }

    const accessToken = token.replace("Bearer ", "").trim();

   
    const session = await workos.userManagement.getSession({
      sessionToken: accessToken,
    });

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Invalid session",
      });
    }

    req.user = session.user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
      error: error.message,
    });
  }
};

module.exports = verifyToken;