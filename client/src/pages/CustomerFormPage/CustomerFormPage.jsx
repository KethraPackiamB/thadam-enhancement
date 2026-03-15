import "./CustomerFormPage.css";
import { useForm } from "react-hook-form";
import { useEffect, useState,useContext} from "react";
import PersonalDetails from "../../components/form/PersonalDetails";
import ContactDetails from "../../components/form/ContactDetails";
import CompanyDetails from "../../components/form/CompanyDetails";
import ProfessionalDetails from "../../components/form/ProfessionalDetails";
import LocationDetails from "../../components/form/LocationDetails";
import EngagementDetails from "../../components/form/EngagementDetails";
import Socials from "../../components/form/Socials";
import Button from "../../components/button/Button";
import TimeLine from "../../components/TimeLineBar/TimeLine";
import {useLocation, useNavigate} from "react-router-dom"
import { CustomerTableContext } from "../../context/CustomerTableContext";
 
 
const CustomerFormPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
 
  const[step, setStep] = useState(1)
  const navigate = useNavigate()
  const location = useLocation()
  const customer = location.state
  const { addCustomer, updateCustomer } = useContext(CustomerTableContext);
 
  const handleNavigate = () => {
    navigate('/dashboard')
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
  navigate("/dashboard");
   
  };
 
  const nextStep = async() => {
    const valid = await trigger()
    if(valid){
      setStep((prev) => prev + 1)
    }
  }
   const previousStep = () => {
     setStep(step - 1)
   }
 
 
  return (
    <div className="card card-container border-dark">
      <form onSubmit={handleSubmit(onSubmit)}>
    <TimeLine step={step}/>
      {step === 1 && (
        <div>
          <h4 className="text-center">Personal Information</h4>
          <PersonalDetails register={register} errors={errors}/>
            <CompanyDetails register={register} errors={errors} />
           <ProfessionalDetails register={register} errors={errors}/>
           <div className="d-flex justify-content-end">
           <Button type="button" onClick={nextStep} className="btn btn-primary" buttonText="Next"/>
           </div>
        </div>
      )}
 
      {step === 2 && (
        <div>
          <h4 className="text-center">Contact Details</h4>
          <ContactDetails register={register} errors={errors} />
          <div className="mt-3 d-flex align-items-center justify-content-between">
           <Button type="button" onClick={previousStep} className="btn btn-secondary" buttonText="previous"/>
           <Button type="button" onClick={nextStep} className="btn btn-primary" buttonText="Next"/>
           </div>
        </div>
      )}



      {step === 3 && (
        <div>
          <h4 className="text-center">Address Details</h4>
          <LocationDetails register={register} errors={errors} />
          <div className="mt-3 d-flex align-items-center justify-content-between">
           <Button type="button" onClick={previousStep} className="btn btn-secondary" buttonText="previous"/>
           <Button type="button" onClick={nextStep} className="btn btn-primary" buttonText="Next"/>
           </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4 className="text-center">References</h4>
          <EngagementDetails  register={register} errors={errors}/>
          <div className="mt-3 d-flex align-items-center justify-content-between">
           <Button type="button" onClick={previousStep} className="btn btn-secondary" buttonText="previous"/>
           <Button type="button" onClick={nextStep} className="btn btn-primary" buttonText="Next"/>
           </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h4 className="text-center">Social Media</h4>
          <Socials register={register} errors={errors} />
          <div className="mt-3 gap-2 d-flex align-items-center justify-content-center">
          <Button  type="submit" buttonText={customer? "Update" : "Submit"} className = "btn btn-success" />
          <Button type="" onClick={handleNavigate} buttonText={"Cancel"} className="btn btn-danger"/>
          </div>
        </div>
      )}
      </form>
    </div>
  );
};
 
export default CustomerFormPage;