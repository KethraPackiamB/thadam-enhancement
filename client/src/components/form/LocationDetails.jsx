const LocationDetails = ({ register, errors }) => {
  return (
    <>
      <div className="row">
        <div className="mb-3">
          <label className="form-label">Street : </label>
          <input type="text" className="form-control bg-light" {...register("street")} />
        </div>

        <div className="mb-3">
          <label className="form-label">City : </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.city ? "is-invalid" : ""}`}
            {...register("city", { required: "City name is required" })}
          />
          <div className="invalid-feedback">{errors.city?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">State : </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.state ? "is-invalid" : ""}`}
            {...register("state", { required: "State name is required" })}
          />
          <div className="invalid-feedback">{errors.state?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Country : </label>
          <input
            type="text"
            className={`form-control bg-light ${errors.country ? "is-invalid" : ""}`}
            {...register("country", { required: "Country name is required" })}
          />
          <div className="invalid-feedback">{errors.country?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Post Code : </label>
          <input
            type="number"
            className={`form-control bg-light ${errors.postCode ? "is-invalid" : ""}`}
            {...register("postCode", { required: "Post Code is required" })}
          />
          <div className="invalid-feedback">{errors.postCode?.message}</div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
