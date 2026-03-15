 export const LandingPage=()=>{
    const handleLogin = () => {
    window.location.href = "https://thadam-bsba.onrender.com/login";
  };
    return(
 <button onClick={handleLogin}>
      Login with WorkOS
    </button>
    )

}
