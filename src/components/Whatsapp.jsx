import { Link } from "react-router-dom";

export default function Whatsapp() {
  return (
    <Link
      to={`https://wa.me/923349658595`}
      target="_blank"
      className="fixed bottom-2 right-2 z-50 flex items-center gap-2 bg-black text-white rounded-md px-3 py-2"
    >
      <h1 className=" hidden sm:block">Chat with us on WhatsApp!</h1>
      <img
        src="/icons/whatsapp-color-svgrepo-com.svg"
        alt="whatsapp"
        className="  w-10 aspect-square"
      />
    </Link>
  );
}
