import CreateMenuSection from "./CreateMenuSection";
import { useMenuState } from "../../Context/MenuStateContext";

const catagories = ["Category1", "Category2", "Category3"];

export default function Menu() {
  const [isMenuShown, setIsMenuShown] = useMenuState();
  return (
    <div
      className={`fixed left-0 overflow-y-auto p-3 bg-gray-200 w-full max-w-[400px] h-[100vh] z-[60]
    ${
      isMenuShown ? "scale-x-100" : "scale-x-0"
    } origin-left transition-all duration-150
    `}
    >
      <div className="pb-3 flex items-center border-b-4 border-[#3C1884]">
        <h1 className="w-[90%] text-3xl font-bold">Menu</h1>
        <button onClick={() => setIsMenuShown(false)}>
          <img
            src="../../../public/icons/cross-circle-svgrepo-com.svg"
            alt="cross"
            className=" w-7 aspect-square"
          />
        </button>
      </div>
      <CreateMenuSection
        sectionTitle="catagories"
        sectionOptions={catagories}
      />
    </div>
  );
}
