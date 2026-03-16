
const DeleteConfirmation=({ show, onCancel, onConfirm }) =>{
  if (!show) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <p>Are you sure you want to delete this customer?</p>

        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>

        <button className="btn btn-danger" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;