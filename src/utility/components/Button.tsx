type ButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset";
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type ? props.type : "button"}
      className="p-2 bg-slate-200 w-full"
    >
      {props.title}
    </button>
  );
}
