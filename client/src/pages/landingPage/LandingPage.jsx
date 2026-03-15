import React from "react";
import thadam from "../../assets/thadamLogo.svg";
const BACKEND_LIVE_BASE_URL= import.meta.env.BACKEND_LIVE_BASE_URL;
export const LandingPage = () => {

  const handleLogin = () => {
    window.location.href = `${BACKEND_LIVE_BASE_URL}/login"`;
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow-lg p-4 text-center" style={{ width: "350px" }}>

        <img
          src={thadam}
          alt="logo"
          className="mb-3 mx-auto"
         
        />

        <p className="text-muted mb-4">
          Manage and track your customer details efficiently in one place.
        </p>

        <button
          className="btn btn-primary btn-lg w-100"
          onClick={handleLogin}
        >
          Get Started
        </button>

      </div>

    </div>
  );
};