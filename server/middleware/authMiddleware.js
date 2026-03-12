const { WorkOS } = require("@workos-inc/node");
<<<<<<< HEAD
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const jwt = require("jsonwebtoken");
=======

const workos = new WorkOS(process.env.WORKOS_API_KEY);
>>>>>>> 04ff348f1497219299a61b9645397cc7623431e7

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
<<<<<<< HEAD
    const decoded = jwt.decode(accessToken);

    if (!decoded || !decoded.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.user = decoded;
    req.userId = decoded.sub;
=======

   
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
>>>>>>> 04ff348f1497219299a61b9645397cc7623431e7

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
      error: error.message,
    });
  }
};

<<<<<<< HEAD
module.exports = verifyToken;
=======
module.exports = verifyToken;
>>>>>>> 04ff348f1497219299a61b9645397cc7623431e7
