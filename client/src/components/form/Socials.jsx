const Socials = ({ register }) => {
  return (
    <>
      <div className="row">
        <div className="mb-3">
          <label className="form-label">LinkedIn</label>
          <input
            type="url"
            className="form-control"
            {...register("socialMedia.linkedin")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">YouTube</label>
          <input type="url" className="form-control" {...register("socialMedia.youtube")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Facebook</label>
          <input
            type="url"
            className="form-control"
            {...register("socialMedia.facebook")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Twitter</label>
          <input type="url" className="form-control" {...register("socialMedia.twitter")} />
        </div>

        <div className="mb-3">
          <label className="form-label">Instagram</label>
          <input
            type="url"
            className="form-control"
            {...register("socialMedia.instagram")}
          />
        </div>
      </div>
    </>
  );
};

export default Socials;
