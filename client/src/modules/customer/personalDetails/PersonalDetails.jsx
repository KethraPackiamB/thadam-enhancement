import { useEffect, useState } from "react";
import FormHeader from "../../../ui/formHeader/formHeader";

const contactTypeChoices = [
  "Lead",
  "Prospect",
  "Client",
  "Networking",
  "Partner",
  "Referral",
];

const PersonalDetails = ({ register, errors, setValue, customer }) => {
  const [selectedType, setSelectedType] = useState("Prospect");
  const [customType, setCustomType] = useState("");

  useEffect(() => {
    const savedType = customer?.contactType || "Prospect";

    if (contactTypeChoices.includes(savedType)) {
      setSelectedType(savedType);
      setCustomType("");
      setValue("contactType", savedType);
      return;
    }

    setSelectedType("Other");
    setCustomType(savedType);
    setValue("contactType", savedType);
  }, [customer, setValue]);

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);

    if (value === "Other") {
      setValue("contactType", customType, { shouldValidate: true });
      return;
    }

    setCustomType("");
    setValue("contactType", value, { shouldValidate: true });
  };

  const handleCustomTypeChange = (e) => {
    const value = e.target.value;
    setCustomType(value);
    setValue("contactType", value, { shouldValidate: true });
  };

  return (
    <div className="card mb-2 flex-fill">
      <div className="card-body">
        <FormHeader label="Personal Details" />

        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="required">First Name</label>
            <input
              type="text"
              className={`form-control bg-light ${errors.firstname ? "is-invalid" : ""}`}
              {...register("firstname", {
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "First Name is required",
                },
              })}
            />
            <div className="invalid-feedback">{errors.firstname?.message}</div>
          </div>

          <div className="col-md-6 mb-2">
            <label>Last Name</label>
            <input
              type="text"
              className={`form-control bg-light `}
              {...register("lastname")}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label>Email</label>
            <input
              id="email"
              type="email"
              className={`form-control bg-light ${errors.primaryEmail ? "is-invalid" : ""}`}
              {...register("primaryEmail", {
                validate: (value) => {
                  if (!value) return true;

                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailRegex.test(value) || "Enter a valid email";
                },
              })}
            />
          </div>

          <div className="col-md-6 mb-2">
            <label>Phone No.</label>
            <input
              type="text"
              maxLength={10}
              inputMode="numeric"
              className={`form-control bg-light ${errors.primaryContactNo ? "is-invalid" : ""}`}
              {...register("primaryContactNo", {
                required: "Phone required",
                pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" },
              })}
            />

            {errors.primaryContactNo && (
              <div className="invalid-feedback">
                {errors.primaryContactNo.message}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label>Contact Type</label>
            <input
              type="hidden"
              {...register("contactType", {
                validate: (value) =>
                  value?.trim() ? true : "Contact Type is required",
              })}
            />
            <select
              className={`form-select bg-light ${errors.contactType ? "is-invalid" : ""}`}
              value={selectedType}
              onChange={handleTypeChange}
            >
              {contactTypeChoices.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>

            {selectedType === "Other" && (
              <input
                type="text"
                className={`form-control bg-light mt-2 ${errors.contactType ? "is-invalid" : ""}`}
                placeholder="Enter contact type"
                value={customType}
                onChange={handleCustomTypeChange}
              />
            )}

            <div className="invalid-feedback">{errors.contactType?.message}</div>
          </div>

          <div className="col-md-6 mb-2">
            <label>Referred By</label>
            <input
              type="text"
              className="form-control bg-light"
              {...register("referredBy")}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 mb-2">
            <label>Notes</label>
            <textarea
              rows="2"
              className="form-control bg-light"
              {...register("notes")}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
