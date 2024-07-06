type ButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset";
  disable?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type ? props.type : "button"}
      className={`p-2  w-full ${
        props.disable ? "bg-slate-200 text-slate-400" : "bg-slate-300"
      }`}
      disabled={props.disable ? true : false}
    >
      {props.title}
    </button>
  );
}
