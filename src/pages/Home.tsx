import { Login } from "./authentication";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-orange-700 font-semibold">
        Real-Time Drawing
      </h1>
      <div className="mt-20 flex flex-row justify-end pr-20">
        <Login />
      </div>
    </div>
  );
}
