import React, { useState } from "react";
import "./registrationPage.scss";
import { Form, Field, FormSpy } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../redux/actionsCreater";
import { RootReducerType } from "../../types/types";
import {
  required,
  mustBeNumber,
  phoneFormat,
  emailFormat,
  composeValidators,
} from "../../assets/validators";
import FieldInput from "../forms/fieldInput/FieldInput";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const registrationData = useSelector(
    (state: RootReducerType) => state.registration
  );

  const [formData, setFormData] = useState({
    ...registrationData,
  });

  const submitFormData = (event: any) => {
    event.prevenDefault();
  };

  const changeFormData = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const changeHandler = (values: any) => {
    dispatch(updateUserData(values));
  };

  return (
    <div className="wrapper">
      <div className="title">Registration Form</div>
      <Form
        onSubmit={submitFormData}
        initialValues={{
          ...formData,
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              onChange={(form) => {
                changeHandler(form.values);
              }}
            />
            <FieldInput
              fieldName="firstName"
              validators={required}
              fieldTitle="First Name"
              inputHandler={changeFormData}
              fieldType="text"
            />
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Last Name"
                    onInput={changeFormData}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="phoneNumber"
              validate={composeValidators(required, mustBeNumber, phoneFormat)}
            >
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="phoneNumber"
                    onInput={changeFormData}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email" validate={emailFormat}>
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="email"
                    onInput={changeFormData}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label>Gender</label>
              <div className="labels">
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                    required
                  />
                  Male
                </label>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default RegistrationPage;
