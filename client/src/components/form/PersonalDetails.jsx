const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <div className="form-group">
        <label>First Name : </label>
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Last Name : </label>
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Profile Picture : </label>
        <input
          type="file"
          accept="image/*"
          {...register("profileImage", { required: "Image is required" })}
        />
        {errors.profileImage && (
          <p style={{ color: "red" }}>{errors.profileImage.message}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
