import { Link } from "react-router-dom";
import signOutUser from "../AdminUtils/signout";

const menu = ["upload", "update or delete"];
export default function Menu() {
  return (
    <div className=" h-full flex flex-col items-center justify-center">
      <div className=" shadow-lg flex flex-col gap-2 w-full max-w-[400px] px-3 py-6">
        <h1 className=" text-center font-bold text-2xl">Administration</h1>
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item == "upload" ? item : "modification"}
            className=" capitalize border py-3 text-center text-lg hover:scale-95 focus:scale-95"
          >
            {item}
          </Link>
        ))}
        <button
          onClick={signOutUser}
          className="capitalize border py-3 text-center text-lg hover:scale-95 focus:scale-95"
        >
          Signout
        </button>
      </div>
    </div>
  );
}
