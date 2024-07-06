import { Link } from "react-router-dom";
import { Button, InputBox } from "../../utility/components";

export default function Login() {
  return (
    <div className="p-10 border-slate-400 border-2 rounded">
      <h2 className="text-2xl font-semibold">Login</h2>
      <div className="mt-10">
        <form className="w-[300px]">
          <InputBox title="Email" name="email" type="email" />
          <InputBox title="Password" name="password" type="password" />
          <Button title="Login" type="submit" />
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
