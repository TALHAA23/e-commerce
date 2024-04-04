import { Link } from "react-router-dom";

const menu = ["upload", "update or delete"];
export default function Menu() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className=" shadow-lg flex flex-col gap-2 w-full max-w-[400px] px-3 py-6">
        <h1 className=" text-center font-bold text-2xl">Administration</h1>
        {menu.map((item) => (
          <Link
            to={item == "upload" ? item : "modification"}
            className=" capitalize border py-3 text-center text-lg hover:scale-95 focus:scale-95"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
