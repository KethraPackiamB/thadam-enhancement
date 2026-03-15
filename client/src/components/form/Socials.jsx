const Socials = ({ register }) => {
  return (
    <div>

      <div className="ms-2">
        <div className="col form-group">
          <label>LinkedIn</label>
          <input type="url" {...register("socialMedia.linkedin")} />
        </div>

        <div className="col form-group">
          <label>YouTube</label>
          <input type="url" {...register("socialMedia.youtube")} />
        </div>


        <div className="col form-group">
          <label>Twitter</label>
          <input type="url" {...register("socialMedia.twitter")} />
        </div>

        <div className="col form-group">
          <label>Facebook</label>
          <input type="url" {...register("socialMedia.facebook")} />
        </div>

        <div className="col form-group">
          <label>Instagram</label>
          <input type="url" {...register("socialMedia.instagram")} />
        </div>

      </div>
    </div>
  );
};

export default Socials;
