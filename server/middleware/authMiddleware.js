const { WorkOS } = require("@workos-inc/node");
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const jwt = require("jsonwebtoken");

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
    const decoded = jwt.decode(accessToken);

    if (!decoded || !decoded.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.user = decoded;
    req.userId = decoded.sub;

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
