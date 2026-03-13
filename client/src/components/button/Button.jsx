

const Button = ({type, onClick, buttonText}) => {


  return (
    <div>
      <button className="btn btn-primary" type={type} onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Button
