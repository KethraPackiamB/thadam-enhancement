const Socials = ({ register }) => {
  return (
    <>
      <div className="row">
        <div className="mb-3">
          <label className="form-label">LinkedIn</label>
          <input
            type="url"
            className="form-control"
            {...register("linkedIn")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">YouTube</label>
          <input type="url" className="form-control" {...register("youtube")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Facebook</label>
          <input
            type="url"
            className="form-control"
            {...register("facebook")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Twitter</label>
          <input type="url" className="form-control" {...register("twitter")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Instagram</label>
          <input
            type="url"
            className="form-control"
            {...register("instagram")}
          />
        </div>
      </div>
    </>
  );
};

export default Socials;
