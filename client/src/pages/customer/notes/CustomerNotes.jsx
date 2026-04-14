import Header from "../customerdetailHeader/Header";
const CustomerNotes = () => {
  return (
    <div className="card" >
      <div className="card-body">
        <Header label="Notes" />
        <div className="card-subtitle">
          <p>you can add notes about the customer here</p>
        </div>
      </div>
    </div>
  );
};
export default CustomerNotes;
