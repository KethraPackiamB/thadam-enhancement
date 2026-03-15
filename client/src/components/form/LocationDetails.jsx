const LocationDetails = ({ register, errors }) => {
  return (
    <>
      <div className="form-group">
        <label>Street : </label>
        <input type="text" {...register("address.street")} />
      </div>
      <div className="form-group">
        <label>City : </label>
        <input
          type="text"
          {...register("address.city", { required: "City name is required" })}
        />
        {errors?.addess?.city && <p style={{ color: "red" }}>{errors.addess.city.message}</p>}
      </div>

      <div className="form-group">
        <label>State : </label>
        <input
          type="text"
          {...register("address.state", { required: "State name is required" })}
        />
        {errors?.address?.state && <p style={{ color: "red" }}>{errors.address.state.message}</p>}
      </div>

      <div className="form-group">
        <label>Country : </label>
        <input
          type="text"
          {...register("address.country", { required: "Country name is required" })}
        />
        {errors?.address?.country && (
          <p style={{ color: "red" }}>{errors.address.country.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Post Code : </label>
        <input
          type="number"
          {...register("address.postCode", { required: "Post Code is required" })}
        />
        {errors?.address?.postCode && (
          <p style={{ color: "red" }}>{errors.address.postCode.message}</p>
        )}
      </div>
    </>
  );
};

export default LocationDetails;
