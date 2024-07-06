import { FormEvent } from "react";
import { Button, InputBox } from "../../utility/components";

export default function Register() {
  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="p-10 border-slate-400 border-2 rounded">
        <h2 className="text-2xl font-semibold">Register</h2>

        <form className="w-[300px]" onSubmit={formSubmit}>
          {/* <InputBox title="First Name" name="firstName" />
          <InputBox title="Last Name" name="lastName" />
          <InputBox title="Email" name="email" />
          <InputBox title="Password" name="password" />
          <InputBox title="Confirm Password" name="cPassword" /> */}
          <Button title="Create Account" type="submit" />
        </form>
      </div>
    </div>
  );
}
