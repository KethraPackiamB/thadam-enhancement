const ContactDetails = ({ register, errors }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Primary Email :<span className="text-danger">*</span></label>
        <input
          type="email" autoComplete="email"
          className={`form-control bg-light ${errors.primaryEmail ? "is-invalid" : ""}`}
          {...register("primaryEmail", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.primaryEmail && (
          <div className="invalid-feedback">{errors.primaryEmail?.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Secondary Email : </label>
        <input
          type="email" autoComplete="additional-email" className="form-control bg-light"
          {...register("secondaryEmail", {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Primary Contact No :<span className="text-danger">*</span></label>
        <input
          type="text"
          className={`form-control bg-light ${errors.primaryContactNo ? "is-invalid" : ""}`}
          {...register("primaryContactNo", {
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        {errors.primaryContactNo && (
          <div className="invalid-feedback">
            {errors.primaryContactNo?.message}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Secondary Contact No. : </label>
        <input
          type="text"
          className="form-control bg-light"
          {...register("secondaryContactNo")}
        />
      </div>
    </>
  );
};

export default ContactDetails;
