const CustomerMoreInfo = ({ customer }) => {
  const fieldLeft = [
    { label: "First Name", value: customer.firstname },
    { label: "Primary Email", value: customer.primaryEmail },
    { label: "Mobile Phone", value: customer.primaryContactNo },
    { label: "Company Name", value: customer.company },
    { label: "Facebook", value: customer.socialMedia?.facebook || "URL not found"},
    { label: "Twitter", value: customer.socialMedia?.twitter || "URL not found" },
  ];
  const filedRight = [
    { label: "Last Name", value: customer.lastname },
    { label: "Secondary Email", value: customer.secondaryEmail || "Detail not found"},
    { label: "Secondary Mobile Phone", value: customer.secondaryContactNo || "Detail not found"},
    { label: "Designation", value: customer.designation },
    { label: "LinkedIn", value: customer.socialMedia?.linkedin || "URL not found"},
    { label: "Instagram", value: customer.socialMedia?.instagram || "URL not found"},
  ];
  return (
    <div className="card h-100 " style={{ backgroundColor: "white"}}>
      <div className="card-body">
        <h5 className="card-title mb-3" style={{color: "#2563eb"}}>More Info</h5>
        <div className="row ">
          <div className="col">
            {fieldLeft.map((field) => (
              <div className="row p-2" key={field.label}>
                <h6 className="col-5 ">{field.label} :</h6>
                <p className="col-7">{field.value}</p>
              </div>
            ))}
          </div>
          <div className="col">
            {filedRight.map((field) => (
              <div className="row p-2" key={field.label}>
                <h6 className="col-5">{field.label} :</h6>
                <p className="col-7">{field.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerMoreInfo;
