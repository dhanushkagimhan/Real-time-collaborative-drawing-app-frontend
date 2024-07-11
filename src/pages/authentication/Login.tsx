import { Link } from "react-router-dom";
import { Button, InputBox } from "../../utility/components";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserLoginType } from "../../utility/types";
import { useUserLogin } from "../../services";
import { useUserStore } from "../../states";
import { useCookies } from "react-cookie";
import dayjs from "dayjs";

export default function Login() {
  const [formValues, setFormValues] = useState<UserLoginType>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<UserLoginType>({
    email: "",
    password: "",
  });

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState<boolean>(true);

  const userLoginMutation = useUserLogin();
  const userState = useUserStore();
  const [_, setCookie] = useCookies(["adminJwt"]);

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

    if (formValues.email === "" || formValues.password === "") {
      submitBtnDisableLocal = true;
    }

    setSubmitBtnDisabled(submitBtnDisableLocal);
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formValues);

    userLoginMutation.mutate(formValues, {
      onSuccess: (data) => {
        if (data.data.success) {
          console.log(data.data.data);
          userState.setUser(data.data.data);
          const accessToken: string = data.data.data.token;
          setCookie("adminJwt", accessToken, {
            expires: dayjs().add(1, "h").toDate(),
          });
          console.log("Log in");
        }
      },
    });
  };

  return (
    <div className="p-10 border-slate-400 border-2 rounded">
      <h2 className="text-2xl font-semibold">Login</h2>
      <div className="mt-10">
        <form className="w-[300px]" onSubmit={formSubmit}>
          <InputBox
            title="Email"
            name="email"
            handleChange={handleChange}
            value={formValues.email}
            type="email"
            error={formErrors.email}
            required={true}
          />
          <InputBox
            title="Password"
            name="password"
            handleChange={handleChange}
            value={formValues.password}
            type="password"
            required={true}
            error={formErrors.password}
          />
          <Button title="Login" type="submit" disable={submitBtnDisabled} />
        </form>
      </div>
      <div className="mt-4">
        <Link to="/register" className="font-medium text-blue-400">
          Still haven't account, Create account
        </Link>
      </div>
    </div>
  );
}
