import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import PersonalDetails from "../../components/form/PersonalDetails";
import ContactDetails from "../../components/form/ContactDetails";
import ProfessionalDetails from "../../components/form/ProfessionalDetails";
import LocationDetails from "../../components/form/LocationDetails";
import References from "../../components/form/References";
import Socials from "../../components/form/Socials";
import Button from "../../components/button/Button";
import TimeLine from "../../components/TimeLineBar/TimeLine";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomerTableContext } from "../../context/CustomerTableContext";

const CustomerFormPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const customer = location.state;
  const { addCustomer, updateCustomer } = useContext(CustomerTableContext);

  const handleNavigate = () => {
    navigate('/')
  }
 
  useEffect(()=>{
   if(customer){
     reset(customer)
   }
  },[customer,reset])
 
  const onSubmit = (data) => {
    if (customer) {
    updateCustomer({
      id: customer._id,
      data,
    });
  } else {
    addCustomer(data);
  }
  navigate("/");
   
  };

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <style>
        {`
  .fixed-container {
    width: 700px;
    height: 600px;
    overflow: auto;
  }
`}
      </style>
      <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#eef2ff" }}
      >
        <div className="fixed-container bg-white rounded p-4 shadow ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column h-100"
          >
            <TimeLine step={step} />
            {step === 1 && (
              <div className="d-flex flex-column flex-grow-1">
                <h4 className="text-center">Personal Information</h4>
                <PersonalDetails register={register} errors={errors} />

                <ProfessionalDetails register={register} errors={errors} />
                <div className="d-flex justify-content-end mt-auto">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                    buttonText="Next"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="d-flex flex-column flex-grow-1">
                <h4 className="text-center">Contact Details</h4>
                <ContactDetails register={register} errors={errors} />
                <div className="d-flex justify-content-between mt-auto">
                  <Button
                    type="button"
                    onClick={previousStep}
                    className="btn btn-secondary"
                    buttonText="Previous"
                  />
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                    buttonText="Next"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="d-flex flex-column flex-grow-1">
                <h4 className="text-center">Address Details</h4>
                <LocationDetails register={register} errors={errors} />
                <div className="d-flex justify-content-between mt-auto">
                  <Button
                    type="button"
                    onClick={previousStep}
                    className="btn btn-secondary"
                    buttonText="Previous"
                  />
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                    buttonText="Next"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="d-flex flex-column flex-grow-1">
                <h4 className="text-center">References</h4>
                <References register={register} errors={errors} />
                <div className="d-flex justify-content-between mt-auto">
                  <Button
                    type="button"
                    onClick={previousStep}
                    className="btn btn-secondary"
                    buttonText="Previous"
                  />
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                    buttonText="Next"
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="d-flex flex-column flex-grow-1">
                <h4 className="text-center">Social Media</h4>
                <Socials register={register} errors={errors} />
                <div className="mt-auto">
                  <div className="row align-items-center">
                    <div className="col text-start">
                      <Button
                        type="button"
                        onClick={handleNavigate}
                        buttonText="Cancel"
                        className="btn btn-danger"
                      />
                    </div>

                    <div className="col text-center">
                      <Button
                        type="button"
                        onClick={previousStep}
                        className="btn btn-secondary"
                        buttonText="Previous"
                      />
                    </div>

                    <div className="col text-end">
                      <Button
                        type="submit"
                        buttonText={customer ? "Update" : "Submit"}
                        className="btn btn-success"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerFormPage;
