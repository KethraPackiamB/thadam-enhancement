const roles = ["Lead", "Prospect", "Client", "Partner"];

const ProfessionalDetails = ({ register, errors }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Company : </label>
        <input className="form-control bg-light" {...register("company")} />
      </div>

      <div className="mb-3">
        <label className="form-label">Role : </label>
        <select
          className={`form-select bg-light ${errors.role ? "is-invalid" : ""}`}
          {...register("role", { required: "Role is required" })}
          defaultValue="Prospect"
        >
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>

        {errors.role && (
          <div className="invalid-feedback">{errors.role.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Designation : </label>
        <input
          type="text"
          className={`form-control bg-light ${errors.designation ? "is-invalid" : ""}`}
          {...register("designation", {
            required: "Designation is required",
          })}
        />

        {errors.designation && (
          <div className="invalid-feedback">{errors.designation.message}</div>
        )}
      </div>
    </>
  );
};

export default ProfessionalDetails;
