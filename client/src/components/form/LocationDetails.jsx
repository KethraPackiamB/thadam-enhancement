const LocationDetails = ({ register, errors }) => {
  return (
    <>
      <div className="row">

        <div className="mb-3">
          <label className="form-label">Street :</label>
          <input
            type="text"
            className="form-control bg-light"
            {...register("address.street")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City :<span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.city ? "is-invalid" : ""}`}
            {...register("address.city", { required: "City name is required" })}
          />
          <div className="invalid-feedback">
            {errors.address?.city?.message}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">State :<span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.state ? "is-invalid" : ""}`}
            {...register("address.state", { required: "State name is required" })}
          />
          <div className="invalid-feedback">
            {errors.address?.state?.message}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Country : <span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.country ? "is-invalid" : ""}`}
            {...register("address.country", { required: "Country name is required" })}
          />
          <div className="invalid-feedback">
            {errors.address?.country?.message}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Post Code :<span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control bg-light ${errors.address?.postCode ? "is-invalid" : ""}`}
            {...register("address.postCode", { required: "Post Code is required" })}
          />
          <div className="invalid-feedback">
            {errors.address?.postCode?.message}
          </div>
        </div>

      </div>
    </>
  );
};

export default LocationDetails;