const References = ({ register, errors }) => {
  return (
    <div className="row mt-4">
      <div className="mb-3">
        <label className="form-label">Last Contacted By:<span className="text-danger">*</span></label>

        <input
          type="date"
          className={`form-control bg-light ${errors.lastContactedDate ? "is-invalid" : ""}`}
          {...register("lastContactedDate", {
            required: "Date is required",
            validate: (value) =>
              new Date(value) <= new Date() || "Future date not allowed",
          })}
        />

        <div className="invalid-feedback">{errors.lastContactedDate?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Referred By:<span className="text-danger">*</span></label>

        <input
          type="text"
          className={`form-control bg-light ${errors.referredBy ? "is-invalid" : ""}`}
          {...register("referredBy", {
            required: "Referred one name is required",
          })}
        />

        <div className="invalid-feedback">{errors.referredBy?.message}</div>
      </div>
    </div>
  );
};

export default References;
