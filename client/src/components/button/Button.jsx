import { useNavigate } from 'react-router-dom';

const Button = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard')
  }
  return (
    <>
      <button type="submit" className="btn btn-primary mt-5">
        Submit
      </button>
      <button type="" className="btn btn-secondary mt-5" onClick={handleNavigate}>cancel</button>
    </>
  );
};

export default Button
