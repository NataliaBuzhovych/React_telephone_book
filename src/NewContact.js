import React from "react";
import "./index.css";

import { contacts } from "./Contacts";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";

const NewContact = ({ setShow, setOk }) => {
  let formInitialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      setShow(false);
      setOk(true);
      contacts.push(values);
    },
  });

  return (
    <div className="model">
      <div className="form-box">
        <button
          onClick={() => {
            setOk(true);
            setShow(false);
          }}
          className="close"
        >
          X
        </button>

        <form className="input-group" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            placeholder="first name *"
          />
          <span style={{ color: "red" }}>{errors.firstName}</span>
          <input
            required
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            placeholder="last name *"
          />
          <span style={{ color: "red" }}>{errors.lastName}</span>
          <input
            required
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone number *"
          />
          <span style={{ color: "red" }}>{errors.phone}</span>
          <div className="radio">
            <label>Gender: &nbsp; </label>
            <label>Male &nbsp; </label>
            <input
              required
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            ></input>
            <label>Female &nbsp; </label>
            <input
              required
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" value="Submit" className="btn prees">
            Save new contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewContact;
