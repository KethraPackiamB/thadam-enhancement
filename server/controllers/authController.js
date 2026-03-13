const { WorkOS } = require("@workos-inc/node");

const workos = new WorkOS(process.env.WORKOS_API_KEY);

exports.home = (req, res) => {
  res.send("Server Started");
};

exports.login = (req, res) => {
  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    clientId: process.env.WORKOS_CLIENT_ID,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    provider: "authkit",
  });

  res.redirect(authorizationUrl);
};

exports.callback = async (req, res) => {
  const { code } = req.query;
  try {
    const { user, accessToken, refreshToken } =
      await workos.userManagement.authenticateWithCode({
        clientId: process.env.WORKOS_CLIENT_ID,
        code,
      });

    // console.log("WorkOS user object:", user);

    const name = user?.firstName || "Guest";

    const redirectBaseUrl =
      process.env.NODE_ENV === "development"
        ? process.env.FRONTEND_LOCAL_BASE_URL
        : process.env.FRONTEND_LIVE_BASE_URL;
    const redirectUri = `${redirectBaseUrl}?accessToken=${accessToken}&name=${name}`;

    res.redirect(redirectUri);
  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(500).send("Authentication failed");
  }
};

exports.logout = async (req, res) => {
  const token = req.headers["authorization"] ?? "";
  const accessToken = token.replace("Bearer ", "").trim();
  console.log(accessToken);
  const payload = JSON.parse(
    Buffer.from(accessToken.split(".")[1], "base64").toString(),
  );
  const sessionId = payload.sid;
  console.log(sessionId);

  await workos.userManagement.revokeSession({ sessionId });

  res.send("Logout");
};