const Button = ({ type, onClick, buttonText, className, icon, disabled }) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
