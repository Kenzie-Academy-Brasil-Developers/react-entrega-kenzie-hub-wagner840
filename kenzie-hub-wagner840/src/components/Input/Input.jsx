import React from "react";

export function Input({ text, name, type, holder, register, error }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={holder}
        {...register(name)}
      />
      {error && error[name] && <p>{error[name]?.message}</p>}
    </>
  );
}
