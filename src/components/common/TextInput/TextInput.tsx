import { useEffect, useRef, useState } from "react";
import "./TextInput.scss";

interface TextInputProps {
  name: string;
  placeHolder: string;
  className?: string;
  required?: boolean;
  labelFormat?: {
    top: string;
    left: string;
    fontSize: string;
  };
  initialValue?: string;
  errorMessage?: string;
}

const TextInput = ({
  name,
  placeHolder,
  className,
  required,
  labelFormat,
  initialValue = "",
  errorMessage,
}: TextInputProps) => {
  const { top, left, fontSize } = labelFormat ?? {};
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (initialValue !== "") {
      setValue(initialValue);
    }
  }, [initialValue]);

  return (
    <div className="input-container">
      {value && (
        <label
          htmlFor={`text-input-id:${name}`}
          style={{ top, left, fontSize }}
          className="label-comp"
        >
          {placeHolder}
        </label>
      )}
      <input
        name={name}
        id={`text-input-id:${name}`}
        placeholder={placeHolder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="text"
        required={required}
        className={`text-input ${className ? className : ""} ${errorMessage !== undefined ? "text-input--error" : ""}`}
      />
      {errorMessage && (
        <p className="text-input__error-message">{errorMessage}*</p>
      )}
    </div>
  );
};

export default TextInput;
