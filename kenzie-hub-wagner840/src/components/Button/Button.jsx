export function Button({ event, prop }) {
  return (
    <button type="submit" onClick={event}>
      {prop}
    </button>
  );
}
