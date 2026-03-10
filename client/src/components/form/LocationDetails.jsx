const LocationDetails = ({ register, errors }) => {
  return (
    <>
      <div className="form-group">
        <label>Street : </label>
        <input type="text" {...register("street")} />
      </div>
      <div className="form-group">
        <label>City : </label>
        <input
          type="text"
          {...register("city", { required: "City name is required" })}
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
      </div>

      <div className="form-group">
        <label>State : </label>
        <input
          type="text"
          {...register("state", { required: "State name is required" })}
        />
        {errors.state && <p style={{ color: "red" }}>{errors.state.message}</p>}
      </div>

      <div className="form-group">
        <label>Country : </label>
        <input
          type="text"
          {...register("country", { required: "Country name is required" })}
        />
        {errors.country && (
          <p style={{ color: "red" }}>{errors.country.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Post Code : </label>
        <input
          type="number"
          {...register("postCode", { required: "Post Code is required" })}
        />
        {errors.postCode && (
          <p style={{ color: "red" }}>{errors.postCode.message}</p>
        )}
      </div>
    </>
  );
};

export default LocationDetails;
