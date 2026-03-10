const CompanyDetails = ({ register }) => {
  return (
    <>
      <div className="form-group">
        <label>Company : </label>
        <input
          type="text"
          {...register("company")}
        />
      </div>
    </>
  );
};

export default CompanyDetails;
