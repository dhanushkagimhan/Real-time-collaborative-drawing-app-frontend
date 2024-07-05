import { Button, InputBox } from "../../utility/components";

export default function Login() {
  return (
    <div className="p-10 border-slate-400 border-2 rounded">
      <h2 className="text-2xl font-semibold">Login</h2>
      <div className="mt-10">
        <form>
          <InputBox title="Email" name="email" type="email" />
          <InputBox title="Password" name="password" type="password" />
          <Button title="Login" />
        </form>
      </div>
    </div>
  );
}
