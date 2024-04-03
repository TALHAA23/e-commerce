import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/brandLogo.jpg"
        alt="e-innovators"
        className=" w-12 aspect-square"
      />
    </Link>
  );
}
