import { ChangeEvent, FormEvent, useState } from "react";
import { Button, InputBox } from "../../utility/components";

type FormValueType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
};

export default function Register() {
  const [formValues, setFormValues] = useState<FormValueType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [formErrors, setFormErrors] = useState<FormValueType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormValues((values) => ({ ...values, [name]: value }));

    let submitBtnDisableLocal: boolean = false;

    if (name === "email") {
      if (
        value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null
      ) {
        setFormErrors((values) => ({
          ...values,
          [name]: "Please add valid email address",
        }));
        submitBtnDisableLocal = true;
      } else {
        setFormErrors((values) => ({
          ...values,
          [name]: "",
        }));
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        setFormErrors((values) => ({
          ...values,
          [name]: "Password length must have more than 8 characters",
        }));
        submitBtnDisableLocal = true;
      } else {
        setFormErrors((values) => ({
          ...values,
          [name]: "",
        }));
      }
    }

    if (name === "cPassword") {
      if (value !== formValues.password) {
        setFormErrors((values) => ({
          ...values,
          [name]: "Confirm password and password are not match!",
        }));
        submitBtnDisableLocal = true;
      } else {
        setFormErrors((values) => ({
          ...values,
          [name]: "",
        }));
      }
    }

    if (
      formValues.firstName === "" ||
      formValues.lastName === "" ||
      formValues.email === "" ||
      formValues.password === "" ||
      formValues.cPassword === ""
    ) {
      submitBtnDisableLocal = true;
    }

    setSubmitBtnDisabled(submitBtnDisableLocal);
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="p-10 border-slate-400 border-2 rounded">
        <h2 className="text-2xl font-semibold">Register</h2>

        <form className="w-[300px]" onSubmit={formSubmit}>
          <InputBox
            title="First Name"
            name="firstName"
            value={formValues.firstName}
            handleChange={handleChange}
            required={true}
          />
          <InputBox
            title="Last Name"
            name="lastName"
            value={formValues.lastName}
            handleChange={handleChange}
            required={true}
          />
          <InputBox
            title="Email"
            name="email"
            type="email"
            value={formValues.email}
            handleChange={handleChange}
            required={true}
          />
          <InputBox
            title="Password"
            name="password"
            type="password"
            value={formValues.password}
            handleChange={handleChange}
            required={true}
            error={formErrors.password}
          />
          <InputBox
            title="Confirm Password"
            name="cPassword"
            type="password"
            value={formValues.cPassword}
            handleChange={handleChange}
            required={true}
            error={formErrors.cPassword}
          />
          <Button
            title="Create Account"
            type="submit"
            disable={submitBtnDisabled}
          />
        </form>
      </div>
    </div>
  );
}
