import { LiStyled } from "./Li";

export function Li({ text, status, onClick }) {
  return (
    <LiStyled className="li-tec" onClick={onClick}>
      <h3 className="title-2">{text}</h3>
      <span className="headline">{status}</span>
    </LiStyled>
  );
}
