import React from "react";
import { InputStyled } from "./Input.js";

export function Input({ text, id, name, type, holder, register, error }) {
  return (
    <InputStyled>
      <label className="headline" htmlFor={name}>
        {text}
      </label>
      <input
        className="headline"
        type={type}
        id={id}
        name={name}
        placeholder={holder}
        {...register(name)}
      />
      {error && error[name] && <p>{error[name]?.message}</p>}
    </InputStyled>
  );
}
