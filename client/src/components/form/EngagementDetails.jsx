const EngagementDetails = ({ register, errors }) => {
  return (
    <div className="row">
      <div className="col-6 form-group">
        <label> Last Contacted By :<span className="text-danger">*</span></label>
        <input
          type="date" 
          {...register("lastContactedDate", {
            required: "Date is required",
            validate: (value) =>
              new Date(value) <= new Date() || "Future date not allowed",
          })}
        />
        {errors.lastContactedDate && (
          <p style={{ color: "red" }}>{errors.lastContactedDate.message}</p>
        )}
      </div>

      <div className="col-6 form-group">
        <label>Referred By : <span className="text-danger">*</span></label>
        <input
          type="text"
          {...register("referredBy", {
            required: "Referred one name is required",
          })}
        />
        {errors.referredBy && (
          <p style={{ color: "red" }}>{errors.referredBy.message}</p>
        )}
      </div>
    </div>
  );
};

export default EngagementDetails;
