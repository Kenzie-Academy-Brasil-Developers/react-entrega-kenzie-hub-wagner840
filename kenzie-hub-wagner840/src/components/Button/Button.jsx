export function Button({ identifier, event, prop }) {
  return (
    <button className={identifier} type="submit" onClick={event}>
      {prop}
    </button>
  );
}
