export const Logout = async () => {
  const BACKEND_LIVE_BASE_URL= import.meta.env.BACKEND_LIVE_BASE_URL;
  const token = localStorage.getItem("token") ?? "";

  const res = await fetch(`${BACKEND_LIVE_BASE_URL}logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    localStorage.removeItem("token");
    window.location.href = "/";
  } else {
    console.error("Logout failed");
  }
};
