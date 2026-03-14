const ContactDetails = ({ register, errors }) => {
  return (
    <>
      <div className="form-group">
        <label>Primary Email : </label>
        <input
          type="email" name="primaryEmail"
          {...register("primaryEmail", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.primaryEmail && (
          <p style={{ color: "red" }}>{errors.primaryEmail.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Secondary Email : </label>
        <input
          type="email" name="secondaryEmail"
          {...register("secondaryEmail", {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.secondaryEmail && (
          <p style={{ color: "red" }}>{errors.secondaryEmail.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Primary Contact No. : </label>
        <input
          type="text"
          {...register("primaryContactNo", {
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        {errors.primaryContactNo && (
          <p style={{ color: "red" }}>{errors.primaryContactNo.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Secondary Contact No. : </label>
        <input
          type="text"
          {...register("secondaryContactNo", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        {errors.secondaryContactNo && (
          <p style={{ color: "red" }}>{errors.secondaryContactNo.message}</p>
        )}
      </div>
    </>
  );
};

export default ContactDetails;
