export const Logout = async () => {
  const token = localStorage.getItem("token") ?? "";

  const res = await fetch("http://localhost:5000/logout", {
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
