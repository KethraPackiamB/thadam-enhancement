const PersonalDetails = ({ register, errors }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">First Name : </label>
        <input
          type="text"
          className={`form-control bg-light ${errors.firstname ? "is-invalid" : ""}`}
          {...register("firstname", { required: "First name is required" })}
        />

        {errors.firstname && (
          <div className="invalid-feedback">{errors.firstname.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name : </label>
        <input
          type="text"
          className={`form-control bg-light ${errors.lastname ? "is-invalid" : ""}`}
          {...register("lastname", { required: "Last name is required" })}
        />

        {errors.lastname && (
          <div className="invalid-feedback">{errors.lastname.message}</div>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
