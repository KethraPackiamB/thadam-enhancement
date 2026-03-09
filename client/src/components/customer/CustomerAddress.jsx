const CustomerAddress = ({ address }) => {
  const location = [
    { label: "Street", value: address.street },
    { label: "City", value: address.city },
    { label: "State", value: address.state },
    { label: "Country", value: address.country },
    { label: "Post Code", value: address.postcode },
  ];
  return (
    <div className="card h-100" style={{ backgroundColor: "white"}}>
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-3" style={{color: "#2563eb"}}>Address</h5>
              {location.map((location) => (
                <div className="row" key={location.label}>
                  <h6 className="col">{location.label}:</h6>
                  <p className="col">{location.value}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default CustomerAddress;
