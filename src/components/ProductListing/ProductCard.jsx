import { Link } from "react-router-dom";
import Tag from "../NavBar/Tag";
import { isNewRelease } from "../../assets/isNewRelease";
export default function ProductCard({
  title,
  price,
  brand,
  image,
  availability,
  publishDate,
  amazonAddress,
}) {
  return (
    <Link to={availability ? amazonAddress : ""} target="blank">
      <article className="relative flex w-full sm:min-h-[300px] sm:aspect-[2/3] rounded-2xl shadow-md shadow-slate-600 hover:scale-105 transition-all duration-100 ">
        <Image
          url={image}
          availability={availability}
          publishDate={publishDate}
        />
        <Details title={title} price={price} brand={brand} />
      </article>
    </Link>
  );
}

const Image = ({ url, availability, publishDate }) => (
  <div className=" relative w-[45%] aspect-square sm:h-[60%] sm:w-full">
    <img
      src={url}
      alt="img"
      className=" w-full aspect-square object-cover rounded sm:rounded-t-2xl"
    />
    {!availability && (
      <div className=" absolute top-0 w-full h-full bg-black/70 rounded-md flex justify-center items-center">
        <small className="capitalize text-white text-sm sm:text-lg">
          not available
        </small>
      </div>
    )}
    {isNewRelease(publishDate) && availability && <Tag />}
  </div>
);

const Details = ({ title, price, brand }) => (
  <div className="sm:absolute sm:h-[45%] flex flex-col justify-between bottom-0 w-full  bg-gray-200 rounded-r sm:rounded-2xl p-3 px-3">
    <h1 className="font-semibold lg:text-lg capitalize">
      {title.length < 60 ? title : title.substring(0, 60) + "..."}
    </h1>
    <div className=" flex justify-between">
      {brand && (
        <small className="text-xs self-end text-slate-600 border-b-2 border-slate-800/35 ">
          {brand}
        </small>
      )}
      <h3 className="relative ml-auto font-semibold text-xl sm:text-2xl pr-3 text-slate-800 flex gap-1">
        <span className="text-xs text-gray-600 self-start pt-1">AED</span>
        <span>{price}</span>
      </h3>
    </div>
  </div>
);
