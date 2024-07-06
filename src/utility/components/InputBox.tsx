type InputBoxProps = {
  title: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export default function InputBox(props: InputBoxProps) {
  return (
    <div className="my-5">
      <label>
        {props.title} :
        <br />
        <input
          name={props.name}
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder ? props.placeholder : ""}
          className="border-slate-400 border-2 rounded focus:outline-none px-2 py-1 w-full"
        />
      </label>
    </div>
  );
}
