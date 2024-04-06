import { Link } from "react-router-dom";
import Addresses from "./Addresses";
import GetInTouch from "./GetInTouch";
import Services from "./Services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white w-full bg-color-base px-2 pb-20 pt-5 sm:pt-14">
      <div className=" flex flex-col justify-center sm:flex-row sm:justify-evenly">
        <Addresses />
        <Services />
      </div>
      <div className="flex justify-between items-baseline">
        <GetInTouch />
        <Link to="/admin" className=" text-sm text-gray-300">
          Login as administrator
        </Link>
      </div>
    </footer>
  );
}
