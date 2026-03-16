export const Logout = async () => {
  const VITE_BACKEND_LIVE_BASE_URL= import.meta.env.VITE_BACKEND_LIVE_BASE_URL;
  const token = localStorage.getItem("token") ?? "";

  const res = await fetch(`${VITE_BACKEND_LIVE_BASE_URL}/logout`, {
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
