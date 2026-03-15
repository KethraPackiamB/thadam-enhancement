const CustomerEngagement = ({ engagement }) => {
  const customerEngagement = [
    { label: "Last Contacted", value: engagement?.lastContactedDate },
    { label: "Referred By", value: engagement?.referredBy },
  ];
  return (
    <div className="card h-100" style={{ backgroundColor:"white"}}>
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-3" style={{color: "#2563eb"}}>Engagement</h5>
          {customerEngagement.map((engagement) => (
            <div className="row" key={engagement.label}>
              <h6 className="col">{engagement.label}:</h6>
              <p className="col">{engagement.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomerEngagement;
