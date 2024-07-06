import { ChangeEvent } from "react";

type InputBoxProps = {
  title: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
};

export default function InputBox(props: InputBoxProps) {
  return (
    <div className="my-5">
      <label>
        {props.title} :
        <br />
        <input
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder ? props.placeholder : ""}
          className="border-slate-400 border-2 rounded focus:outline-none px-2 py-1 w-full"
          required={props.required ? true : false}
        />
      </label>
      {props.error ? (
        <span className="text-red-600">{props.error}</span>
      ) : (
        <></>
      )}
    </div>
  );
}
