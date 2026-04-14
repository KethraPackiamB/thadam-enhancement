import Header from "../customerdetailHeader/Header";
import FieldRender from "../fieldRender/FieldRender";
const CustomerSocials = ({ customer }) => {
  const fields = [
    { label: "Facebook", value: customer.socialMedia?.facebook },
    { label: "Twitter", value: customer.socialMedia?.twitter },
    { label: "Instagram", value: customer.socialMedia?.instagram },
    {label:"linkedIn",value:customer.socialMedia?.linkedin}
  ];
  return (
    <div className="card p-3" >
    <Header label="Socials"/>
      <div className="d-flex gap-3">
        {fields
          .filter((field) => field.value) // hide empty
          .map((field) => (
            <FieldRender
              key={field.label}
              type="link"
              value={field.value}
            />
          ))}
      </div>
    </div>
  );
};
export default CustomerSocials;