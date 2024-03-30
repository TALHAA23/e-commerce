import Tag from "../NavBar/Tag";

const text =
  "1 Liter of gross-fed raw milk stored in premioum glass hsdiofh iod foidhfoh oi hweohf oiehfo";
export default function ProductCard() {
  return (
    <article className="relative w-full xs:min-h-[500px] max-h-[500px] aspect-[2/3] rounded-2xl shadow-lg  shadow-slate-600 hover:scale-105 transition-all duration-100 ">
      <Tag />
      <Image />
      <Details />
    </article>
  );
}

const Image = () => (
  <img
    src="/milk.jpg"
    alt="milk"
    className=" h-[60%] w-full object-cover rounded-t-2xl"
  />
);

const Details = () => (
  <div className=" absolute flex flex-col justify-between bottom-0 w-full h-[55%] bg-gray-200 rounded-2xl p-3 px-3">
    <div>
      <h1 className="font-bold text-2xl">Raw Milk with a long long title</h1>
      <p className="xs:text-lg mt-2 text-slate-700 tracking-tight">{text}</p>
    </div>
    <div className="flex gap-2 items-center justify-between">
      <h3 className="relative font-semibold text-2xl pr-3 text-slate-800">
        $23.00
      </h3>
      <button className="w-full max-w-[150px] bg-green-800 text-white font-semibold py-2 rounded-full bg-gradient-to-b from-green-700/75 to-green-900 hover:scale-105 transition-all duration-100">
        More
      </button>
    </div>
  </div>
);
