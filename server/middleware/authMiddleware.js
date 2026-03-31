const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    // 1. Get Authorization header
    const authHeader = req.headers["authorization"];

    // 2. Check if header exists and format is correct
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access token missing",
      });
    }

    // 3. Extract token
    const accessToken = authHeader.split(" ")[1];

    // 4. Decode token (NO verification)
    const decoded = jwt.decode(accessToken);

    // 5. Validate decoded data
    if (!decoded || !decoded.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    // 6. Attach user info to request
    req.user = decoded;
    req.userId = decoded.sub;

    // 7. Continue
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