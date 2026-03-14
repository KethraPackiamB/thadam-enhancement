const roles = ["Lead","Prospect", "Client", "Partner"]
const ProfessionalDetails = ({ register, errors }) => {
  return (
    <>
      <div className="form-group">
        <label>Role : </label>
        <select {...register("role", {required: "Role is required"})} defaultValue= "Prospect"
         className="form-control">
          
          {roles.map((role,index)=>(
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}
      </div>

      <div className="form-group">
        <label>Designation : </label>
        <input
          type="text"
          {...register("designation", { required: "Designation is required" })}
        />
        {errors.designation && (
          <p style={{ color: "red" }}>{errors.designation.message}</p>
        )}
      </div>
    </>
  );
};

export default ProfessionalDetails;
