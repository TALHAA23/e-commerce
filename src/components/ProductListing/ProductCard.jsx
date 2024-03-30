import { Link } from "react-router-dom";

const text =
  "1 Liter of gross-fed raw milk stored in premioum glass hsdiofh iod foidhfoh oi hweohf oiehfo";
const link =
  "https://www.amazon.com/UBeesize-Quick-Release-Cellphone-Compatible-Smartphones/dp/B0C69SXB61/ref=sr_1_1_sspa?crid=3OHI8MWNGTR8N&dib=eyJ2IjoiMSJ9.PRRTLxHb4gZb0VkqOIQJlVC4dV0bW8FgrqwarcqoL7oGL9nF-VqyNKMxR168-vJiE6fFn35fM9obqAIBhHe66bWWxPpwNhJ5VGdfHEKLU34qnO41LrWibBTHqfpMgOdKJzb-fkaDa7SjGgSos03uIdhhLgj5WE5qFfA4WMb0UE0t-0vdtLHVKNdn__ghisUhSBm5sp84Dh-hV2eXD0BDtAo5yqApjF-YuocTU1lRcUI.OAJSGCBI6BR5jVmDNEbasZRctEksz1hVt9XkpPRLg5g&dib_tag=se&keywords=tripod&qid=1711788468&sprefix=tripod%2Caps%2C543&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1";
export default function ProductCard() {
  return (
    <Link to={link} target="blank">
      <article className="relative flex w-full sm:min-h-[500px] sm:aspect-[2/3] rounded-2xl shadow-md shadow-slate-600 hover:scale-105 transition-all duration-100 ">
        <Image />
        <Details />
      </article>
    </Link>
  );
}

const Image = () => (
  <img
    src="/milk.jpg"
    alt="milk"
    className=" w-[40%] aspect-square sm:h-[60%] sm:w-full object-cover rounded sm:rounded-t-2xl"
  />
);

const Details = () => (
  <div className="sm:absolute sm:h-[55%] flex flex-col justify-between bottom-0 w-full  bg-gray-200 rounded-r sm:rounded-2xl p-3 px-3">
    <div>
      <h1 className="font-bold text-lg sm:text-2xl">
        Raw Milk with a long long title
      </h1>
      <p className=" text-base sm:text-lg mt-2 text-slate-700">{text}</p>
    </div>
    <h3 className="relative ml-auto font-semibold text-2xl pr-3 text-slate-800">
      $23.00
    </h3>
  </div>
);
