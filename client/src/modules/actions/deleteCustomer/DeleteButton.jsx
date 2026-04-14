import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerTableContext } from "../../context/CustomerTableContext";
import Button from "../button/Button";
import DeleteConfirmation from "../deleteConfirmation/DeleteConfirmation";

const DeleteButton = ({ id, redirect = false ,icon,style,className="btn btn-sm",text}) => {
  const { deleteCustomer } = useContext(CustomerTableContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteCustomer(id);
    setShowConfirm(false);

    if (redirect) {
      navigate("/"); 
    }
  };

  return (
    <>
      <Button
        onClick={(e) => {
          e?.stopPropagation();
          setShowConfirm(true);
        }}
        icon={icon ||(<i className="fa-regular fa-trash-can text-danger"></i>)}
        style={style}
        className={className}
       buttonText={text} 
      />

      <DeleteConfirmation
        show={showConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default DeleteButton;