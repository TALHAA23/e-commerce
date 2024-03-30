const text =
  "1 Liter of gross-fed raw milk stored in premioum glass hsdiofh iod foidhfoh oi hweohf oiehfo";
export default function ProductCard() {
  return (
    <article className="relative w-full xs:min-h-[500px] max-h-[500px] aspect-[2/3] rounded-2xl shadow-lg  shadow-slate-600 hover:scale-105 transition-all duration-100 ">
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
      <h1 className="font-bold text-3xl">Raw Milk</h1>
      <p className="text-lg mt-2">{text}</p>
    </div>
    <div className="flex gap-2 items-center">
      <h3 className="relative font-semibold text-2xl pr-3">$23.00</h3>
      <button className="w-full bg-green-800 text-white font-semibold py-2 rounded xs:rounded-xl bg-gradient-to-b from-green-700/75 to-green-900 hover:scale-105 transition-all duration-100">
        Read More
      </button>
    </div>
  </div>
);
