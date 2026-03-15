const Button = ({ type, onClick, buttonText, className }) => {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
