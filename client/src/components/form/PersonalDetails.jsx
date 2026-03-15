const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <div className="form-group">
        <label>First Name : </label>
        <input
          type="text"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstname && (
          <p style={{ color: "red" }}>{errors.firstname.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Last Name : </label>
        <input
          type="text"
          {...register("lastname", { required: "Last name is required" })}
        />
        {errors.lastname && (
          <p style={{ color: "red" }}>{errors.lastname.message}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
