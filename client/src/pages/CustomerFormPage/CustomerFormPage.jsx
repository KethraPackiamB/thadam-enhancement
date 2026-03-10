import "./CustomerFormPage.css";
import { useForm } from "react-hook-form";
import FormHeader from "../../components/form/FormHeader";
import PersonalDetails from "../../components/form/PersonalDetails";
import ContactDetails from "../../components/form/ContactDetails";
import LocationDetails from "../../components/form/LocationDetails";
import ProfessionalDetails from "../../components/form/ProfessionalDetails";
import Button from "../../components/button/Button";
import EngagementDetails from "../../components/form/EngagementDetails";
import Socials from "../../components/form/Socials";
import CompanyDetails from "../../components/form/CompanyDetails";

const CustomerFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Your details are Submitted successfully");
  };

  return (
    <div className="card card-container border-dark">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormHeader />
          <div className="row">
            <div className="col-4">
              <PersonalDetails register={register} errors={errors} />
              <ProfessionalDetails register={register} errors={errors} />
            </div>
            <div className="col-4">
              <CompanyDetails register={register} errors={errors} />
              <ContactDetails register={register} errors={errors} />
            </div>
            <div className="col-4">
              <LocationDetails register={register} errors={errors} />
            </div>
            <div>
              <EngagementDetails register={register} errors={errors} />
            </div>
            <div className="mt-3">
              <Socials register={register} errors={errors} />
            </div>
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default CustomerFormPage;
