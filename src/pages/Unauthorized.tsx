import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div>
      <div>
        <h2>Unauthorized</h2>
        <Link to={"/"} className="underline">
          Home
        </Link>
      </div>
    </div>
  );
}
